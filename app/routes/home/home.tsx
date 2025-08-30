import { useLoaderData } from "react-router-dom";
import type { Article } from "~/services/api";
import { getArticles } from "~/services/api";
import HeroSlide from "~/components/HeroSlide";

// Loader για το home route
export async function loader() {
  return getArticles();
}

export default function Home() {
  const articles = useLoaderData() as Article[];
   console.log("Articles from loader:", articles); 

  return (
    <div>
      <HeroSlide />
      <h1>Home Page</h1>

      <div>
    
        
        {articles?.map(article => (
          <div key={article.id}>
            {article.title} - {article.category}
          </div>
        ))}
      </div>
    </div>
  );
}
