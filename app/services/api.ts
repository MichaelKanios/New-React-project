import type { Article } from "~/types";

const BASE_URL = "https://verbose-space-parakeet-5vg5j5pjq5424qq6-3000.app.github.dev";

// helper για fetch
async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Response(`Failed to fetch ${endpoint}`, { status: res.status });
  }

  return res.json() as Promise<T>;
}

// 🔹 Articles
export async function getArticles(): Promise<Article[]> {
  return fetchData<Article[]>("/data");
}

// 🔹 Sports (φιλτράρουμε από /data)
export async function getSports(): Promise<Article[]> {
  const all = await fetchData<Article[]>("/data");
  return all.filter((a) => a.category?.toLowerCase() === "sports");
}