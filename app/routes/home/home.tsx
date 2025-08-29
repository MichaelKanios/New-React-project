import type { Route } from "./+types/home";
import { Link } from "react-router";
import HeroSlide from "~/components/HeroSlide";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {


  return <>
  <div>
    <HeroSlide />
  </div>
 

  </>
}
