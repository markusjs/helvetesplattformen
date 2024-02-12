export const prerender = true;
import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'kc2y2loi',
	dataset: 'nyheter',
	apiVersion: '2021-10-21',
	useCdn: false
});

export const GET = async () => {
	const data = await client.fetch(`*[_type == "artikkel"]{
    title, source, url, publishedAt, author-> {name}, categories[]-> {title}, mainImage{asset ->{url}},
  } | order(publishedAt desc)
  `);

	const body = render(data);
	return new Response(body, {
		headers: {
			'content-type': 'application/xml',
			'cache-control':
				'public, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=3600'
		}
	});
};

type Post = {
	title: string;
	url: string;
	publishedAt: string;
	author: {
		name: string;
	};
};

const render = (
	posts: Post[]
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
<channel>
<title>
	<![CDATA[Helvetesplattformen]]>
</title>
	<description>
	<![CDATA[ En oversikt over skriverier om Helseplattformen. ]]>
</description>
<link>https://helvetesplattformen.no</link>
<lastBuildDate>${new Date().toString()}</lastBuildDate>
<atom:link href="https://helvetesplattformen.no/rss.xml" rel="self" type="application/rss+xml" />
${posts
	.map(
		(post) => `
<item>
	<guid>${post.url.replace(/&/g, '&amp;')}</guid>
	<title>${post.title}</title>
	<link>${post.url.replace(/&/g, '&amp;')}</link>
	<description></description>
	<pubDate>${new Date(post.publishedAt).toString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
