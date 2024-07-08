import CVHome from "./../../pageContent/jsx/CVHome.jsx";
import HomePage from "./../../Pages/jsx/HomePage.jsx";

// const basename = "/PORTFOLIO-GULLO-JOSE-LEANDRO";
const mainPage = "/Home";

const mainRoutes = [
  { path: "/", access: "Home", component: <HomePage /> },
  { path: "/CV", access: "CV", component: <CVHome /> },
];

const routes = { mainRoutes, mainPage };

export default routes;