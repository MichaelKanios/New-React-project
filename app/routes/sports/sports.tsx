import type { Article } from "~/types";
import type { Route } from "./+types/index";
import { getSports } from "~/services/api";
import { Link } from "react-router";

// Loader
export async function loader({ request }: Route.LoaderArgs) {
  const sports = await getSports();
  return { projects: sports }; // ίδια δομή με home
}

// Component
export default function Sports({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData as { projects: Article[] };

  return (
    <section>
      <h2>Sports</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
             <Link to={`/article?id=${project.id}`}>{project.description}</Link>
             <li>{project.author}</li>
             
          </li>
        ))}
      </ul>
    </section>
  );
}
