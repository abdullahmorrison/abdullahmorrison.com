import { visit } from 'unist-util-visit'

/**
 * Turns ```mermaid fences into <div class="mermaid"> before syntax highlighting
 * runs, so Shiki never sees them and the raw graph source survives to the
 * browser. src/layouts/PostLayout.astro renders them.
 */
export default function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'mermaid' || !parent || index === null) return

      parent.children[index] = {
        type: 'html',
        value: `<div class="mermaid" data-mermaid-source="${escapeAttribute(node.value)}"></div>`,
      }
    })
  }
}

function escapeAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
