# abdullahmorrison.com

My personal website

## Local setup

```bash
npm install
npm run dev
```

## Writing a post

Make a folder under `src/content/blog/`, put an `index.md` in it, and keep its
images beside it. The folder name becomes the URL.

```
src/content/blog/my-post/
  index.md
  diagram.png
```

```markdown
---
title: My post
date: 2026-08-16
description: One line, used on the blog index.
tags: [typescript]
draft: false
---
```

Drafts render locally and are dropped from production builds.
