import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('lessons');
  return rss({
    title: 'Intro to GIT',
    description: 'A short course about git basics',
    site: context.site,
    items: posts.map((lesson) => ({
      title: lesson.data.title,
      pubDate: lesson.data.pubDate,
      description: lesson.data.description,
      link: `/lessons/${lesson.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
