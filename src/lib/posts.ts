import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'blog'>

/** Newest first. Drafts show up while developing and vanish in production. */
export async function getPublishedPosts(): Promise<Post[]> {
    const posts = await getCollection('blog', ({ data }) =>
        import.meta.env.PROD ? !data.draft : true,
    )
    return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/**
 * The site-relative URL for a post, e.g. "/blog/hello-world/".
 *
 * Every place that links to a post goes through here, so the shape of a post
 * URL is written down exactly once.
 */
export function postUrl(post: Post): string {
    return `/blog/${post.id}/`
}

/**
 * Frontmatter dates parse as UTC midnight, so formatting in the machine's local
 * zone would show the previous day west of Greenwich.
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    })
}

export function readingTime(body: string): string {
    const words = body.trim().split(/\s+/).length
    return `${Math.max(1, Math.round(words / 200))} min read`
}
