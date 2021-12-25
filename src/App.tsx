import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import NotFound from "./Pages/404";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SslFinlandia from "./Pages/SslFinlandia";
import SslIndonesia from "./Pages/SslIndonesia";
import SslLibya from "./Pages/SslLibya";

const routes = [
  {
    id: 0,
    name: "404",
    component: <NotFound />,
    path: "/*",
  },
  {
    id: 1,
    name: "Index",
    component: <Home />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    component: <About />,
    path: "/about",
  },
  {
    id: 3,
    name: "SSL Indonesia",
    component: <SslIndonesia />,
    path: "/ssl-indonesia",
  },
  {
    id: 4,
    name: "SSL Libya",
    component: <SslLibya />,
    path: "/ssl-libya",
  },
  {
    id: 5,
    name: "SSL Finlandia",
    component: <SslFinlandia />,
    path: "/ssl-finlandia",
  },
];

const App: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
