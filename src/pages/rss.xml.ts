import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getPublishedPosts, postUrl } from '@/lib/posts'

/**
 * A `.ts` file in src/pages/ is a route that returns a Response instead of a
 * page. The exported function is named after the HTTP method it answers.
 * This file's path becomes the URL: /rss.xml
 */
export const GET: APIRoute = async (context) => {
    const posts = await getPublishedPosts()

    return rss({
        title: 'Abdullah Morrison',
        description: 'Software, and whatever else is holding my attention.',
        // context.site is the `site` value from astro.config.mjs. Feed readers
        // need absolute URLs, and this is where they come from.
        site: context.site!,

        items: posts.map((post) => ({
          link: postUrl(post),
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.date,
          categories: post.data.tags
        }))
    })
}
