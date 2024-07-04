import CVHome from "./../../pageContent/jsx/CVHome.jsx";
import HomePage from "./../../Pages/jsx/HomePage.jsx";

const basename = "/PORTFOLIO-GULLO-JOSE-LEANDRO";
const mainPage = "/Home";

const mainRoutes = [
  { path: "/Home", access: "Home", component: <HomePage /> },
  { path: "/CV", access: "CV", component: <CVHome /> },
];

const routes = { mainRoutes, basename, mainPage };

export default routes;