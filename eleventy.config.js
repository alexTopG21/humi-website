export default function (eleventyConfig) {
  // Copy static assets as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");

  // Favicons and logo, copied to the site root
  eleventyConfig.addPassthroughCopy({
    "src/favicon.ico": "favicon.ico",
    "src/favicon.svg": "favicon.svg",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
    "src/logo.png": "logo.png"
  });

  // Blog posts: every Markdown file in src/blog/posts, newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  
  // Japanese blog posts: every Markdown file in src/ja/blog/posts, newest first
  eleventyConfig.addCollection("postsJa", (api) =>
    api.getFilteredByGlob("src/ja/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // Date formatting, e.g. 20 Oct 2026
  eleventyConfig.addFilter("readableDate", (d) =>
    new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Tokyo" }).format(d)
  );
    eleventyConfig.addFilter("jaDate", (d) =>
    new Intl.DateTimeFormat("ja-JP", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Tokyo" }).format(d)
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("langName", (l) => ({ en: "English", fr: "Français", ja: "日本語" }[l] || ""));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
