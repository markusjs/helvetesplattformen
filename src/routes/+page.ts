// src/routes/+page.js

import {createClient} from "@sanity/client";
// import imageUrlBuilder from '@sanity/image-url'
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// const builder = imageUrlBuilder({
//   projectId: 'kc2y2loi',
//   dataset: 'nyheter',
// })
// const urlFor = (source: SanityImageSource) => builder.image(source)
// console.log('Images' + urlFor)


const client = createClient({
  projectId: "kc2y2loi",
  dataset: "nyheter",
  apiVersion: "2021-10-21",
  useCdn: false
});
export async function load({ params }) {
  const data = await client.fetch(`*[_type == "artikkel"]{
    title, source, url, publishedAt, author-> {name}, categories[]-> {title}, mainImage{asset ->{url}},
  } | order(publishedAt desc) 
  `);
  console.log(data);
  if (data) {
    return {
      posts: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}


// const data = await client.fetch(`*[_type == "artikkel"]
// | order(publishedAt desc)
// {title, "name": author->name}
// `);