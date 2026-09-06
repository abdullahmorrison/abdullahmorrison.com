// @ts-check
import { fileURLToPath } from 'node:url'
import { defineConfig, fontProviders } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkMermaid from './src/lib/remark-mermaid.mjs'
import rehypeFigure from './src/lib/rehype-figure.mjs'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdullahmorrison.com',

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  // Lets any component write `@use 'variables' as *`.
                  loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))],
              },
          },
      },
  },

  markdown: {
      // Astro 7 defaults to the Sätteri processor, which does not run remark or
      // rehype plugins. This pipeline needs them, so opt back into unified.
      // SmartyPants comes on by default and supplies the curly quotes and
      // em dashes the prose styles assume.
      processor: unified({
          remarkPlugins: [remarkMermaid],
          rehypePlugins: [
              rehypeFigure,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
      }),
      shikiConfig: {
          theme: 'github-dark-dimmed',
          wrap: true,
      },
  },

  fonts: [
      {
          // Display face. Carries the existing identity: hero, nav, headings.
          provider: fontProviders.google(),
          name: 'Shippori Mincho B1',
          cssVariable: '--font-display',
          weights: [400],
          // The family ships enormous Japanese subsets; the site only sets Latin.
          subsets: ['latin'],
      },
      {
          // Reading face. An old-style serif with real italics and small caps,
          // used only for post body copy.
          provider: fontProviders.google(),
          name: 'EB Garamond',
          cssVariable: '--font-prose',
          weights: [400, 500, 600],
          styles: ['normal', 'italic'],
          subsets: ['latin'],
      },
  ],

  integrations: [sitemap()],
})