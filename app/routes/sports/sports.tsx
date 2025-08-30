import type { Article } from "~/types";
import type { Route } from "./+types/index";
import { getSports } from "~/services/api";

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
        {projects.map((s) => (
          <li key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
