import type { Article } from "~/types";
import type { Route } from "./+types/index";
import { getArticles } from "~/services/api";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");  // <-- εδώ παίρνουμε το id

  if (!id) {
    throw new Response("No article id provided", { status: 400 });
  }

  const all = await getArticles();
  const article = all.find((a) => a.id === Number(id));

  if (!article) {
    throw new Response("Article not found", { status: 404 });
  }

  return { article };
}

export default function ArticlePage({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData as { article: Article };

  return (
    <section>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>Author: {article.author}</p>
      <p>Published: {new Date(article.published_at).toLocaleDateString()}</p>
    </section>
  );
}
