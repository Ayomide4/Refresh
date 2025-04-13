import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "event"] | order(publishedAt desc){title, location, date, body, image}`

export async function fetchEvents() {
  return await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
}
