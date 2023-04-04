// src/routes/+page.js

import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "kc2y2loi",
  dataset: "nyheter",
  apiVersion: "2021-10-21",
  useCdn: false
});

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "artikkel"]`);
  console.log(data)
  if (data) {
    return {
      posts: data,
      authors: data.author
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}