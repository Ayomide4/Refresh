// lib/fetchEvents.ts
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export async function fetchEvents() {
  return await client.fetch(POSTS_QUERY);
}
