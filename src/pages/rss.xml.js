import rss from "@astrojs/rss";

const posts = Object.values(
  import.meta.glob("./posts/*.md", { eager: true })
);

export const GET = () =>
  rss({
    title: "Astro Theme Creek",
    description: "A Theme for Astro",
    site: import.meta.env.SITE,
    items: posts.map(({ frontmatter, url }) => ({
      title: frontmatter.title,
      description: frontmatter.description,
      pubDate: frontmatter.pubDate,
      link: url,
    })),
  });
