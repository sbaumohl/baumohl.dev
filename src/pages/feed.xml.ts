import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context: any) {
    const posts = await getCollection("blog");
    return rss({
        title: "Sam Baumohl's Blog",
        description: "Born to humanities; forced to STEM.",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}`
        })),
        customData: `<language>en-us</language>`,
  });
}