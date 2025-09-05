import type { Article } from "~/types";
import type { Route } from "./+types/index";
import HeroSlide from "~/components/HeroSlide";
import { getArticles } from "~/services/api";
import { Link } from "react-router-dom"; // <--- import Link
import{getSports} from "~/services/api";
import { useState } from "react";
import Pagination from "~/components/Pagination";

// Loader
export async function loader({ request }: Route.LoaderArgs) {
  const projects = await getArticles();
  const sports = await getSports();
  return { projects,sports };
}

// Component
export default function Home({ loaderData }: Route.ComponentProps) {
  const { projects,sports } = loaderData as { projects: Article[] ,sports: Article[]};
  
  //Filter 
const [selectedCategory, setSelectedCategory] = useState('All');
const categories = ['All', ...new Set(projects.map((project) => project.category))];
const filteredProjects = selectedCategory === 'All'
  ? projects
  : projects.filter((project) => project.category === selectedCategory);


  //Pagination  
     const [currentPage, setCurrentPage]=useState(1)
      const [postPerPage ,setPostPerPage]=useState(6)
      const lastPostIndex = currentPage * postPerPage ;
      const firstPostIndex =lastPostIndex - postPerPage;      
      const currentPost = filteredProjects.slice(firstPostIndex, lastPostIndex);

  
    


  return (
    <div>
      <HeroSlide projects={projects}/>
      
      <div className="flex flex-wrap gap-2 mb-8 justify-center mt-10">
  {categories.map((category) => (
    <button
      key={category}
      className={`px-4 py-2 rounded 
        ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>

<ul className="grid justify-items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10 items-stretch">
  {currentPost.map((article) => (   // <-- ΕΔΩ η αλλαγή
    <li key={article.id} className="flex flex-col shadow rounded-lg p-4 w-full">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <Link
        className="text-blue-400 hover:text-blue-800 font-semibold underline text-xl mt-4"
        to={`/article?id=${article.id}`}
      >
        {article.title}
      </Link>
      <p className="mt-2 font-light flex-grow">{article.description}</p>
      <div className="mt-4">
        <Link to={`/article?id=${article.id}`}>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
            Read more
          </button>
        </Link>
      </div>
    </li>
  ))}
</ul>
      {/* Pagination */}
      <Pagination
        totalPost={filteredProjects.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
