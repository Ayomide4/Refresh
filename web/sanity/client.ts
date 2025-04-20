// @ts-ignore - Ignoring next-sanity type error due to module resolution issue
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "scp1jubj",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
