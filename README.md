# HUMI website

Built with Eleventy (11ty). Pages are generated automatically from the files in `src/`.

## Write a new blog post (no code needed)

1. On GitHub, open the folder `src/blog/posts/`.
2. Click **Add file → Create new file**.
3. Name it `YYYY-MM-DD-short-title.md`, for example `2026-10-25-yaskawa-sigma-x.md`.
   The part after the date becomes the web address: `/blog/yaskawa-sigma-x/`.
4. Copy the contents of `POST-TEMPLATE.md`, fill in the title, date and description, and write your post.
   - `lang: en` for English, `lang: ja` for Japanese, `lang: fr` for French.
5. Click **Commit changes**. Cloudflare Pages rebuilds the site, and the post is live in about a minute.

Images: upload them to `src/img/` (Add file → Upload files), then use `![description](/img/file-name.jpg)` in the post.

To edit or delete a post, open its file on GitHub and use the pencil (edit) or trash (delete) icon.

**Writing news posts:** summarize in your own words, add your own view, and link to the original source. Don't paste articles or use photos from news sites.

## Settings you can change in one place

`src/_data/site.json`:
- `email`: your contact address (used everywhere on the site)
- `formEndpoint`: your Formspree form URL, e.g. `https://formspree.io/f/abcd1234`
- `url`: your domain

## Put the site online (one time)

1. Create a free GitHub account and a new repository (e.g. `humi-site`). Upload all files in this folder
   (everything except `node_modules` and `_site`, if present).
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, and pick the repository.
3. Build settings:
   - Framework preset: **Eleventy**
   - Build command: `npx @11ty/eleventy`
   - Build output directory: `_site`
4. Deploy. Then under **Custom domains**, add your domain (e.g. humi-parts.com).

## Work on it locally (optional)

```
npm install
npm start      # preview at http://localhost:8080
```
