import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [index("routes/home/home.tsx"),
                route("sports", "./routes/sports/sports.tsx"),
                route("cantina", "./routes/cantina/cantina.tsx"),
                route("about", "./routes/about/about.tsx"),
                route("article", "./routes/article/article.tsx"),
                route("contact", "./routes/contact/contact.tsx")



] satisfies RouteConfig;
