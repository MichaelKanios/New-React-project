import type { Article } from "~/types";
import type { Route } from "./+types/index";
import HeroSlide from "~/components/HeroSlide";
import { getArticles } from "~/services/api";
import { Link } from "react-router-dom"; // <--- import Link

// Loader
export async function loader({ request }: Route.LoaderArgs) {
  const projects = await getArticles();
  return { projects };
}
// Component
export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Article[] };
  return (
    <div>
      <HeroSlide projects={projects}/>
      <h1>Home Page</h1>
      <ul>
        {projects.map((article) => (
          <li key={article.id}>
            {/* Κάνουμε τον τίτλο clickable */}
            <Link to={`/article?id=${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
