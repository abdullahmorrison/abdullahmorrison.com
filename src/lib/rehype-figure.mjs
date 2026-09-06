import { visit } from 'unist-util-visit'

/**
 * Promotes a paragraph that holds nothing but an image into a <figure>, using
 * the alt text as the caption. Markdown has no figure syntax, and a caption
 * under a plate is most of what makes a page read like print.
 *
 * Opt out per image by leaving the alt text empty: ![](./decorative.png)
 */
export default function rehypeFigure() {
    return (tree) => {
        visit(tree, 'element', (node) => {
            if (node.tagName !== 'p') return

            const meaningful = node.children.filter(
                (child) => !(child.type === 'text' && child.value.trim() === ''),
            )
            if (meaningful.length !== 1) return

            const image = meaningful[0]
            if (image.type !== 'element' || image.tagName !== 'img') return

            const caption = image.properties?.alt
            node.tagName = 'figure'
            node.children = [image]

            if (caption) {
                node.children.push({
                    type: 'element',
                    tagName: 'figcaption',
                    properties: {},
                    children: [{ type: 'text', value: String(caption) }],
                })
            }
        })
    }
}
