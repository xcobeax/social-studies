import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from "./Pages/404";
import Home from "./Pages/Home";
import SslFinlandia from "./Pages/SslFinlandia";
import SslIndonesia from "./Pages/SslIndonesia";
import DetailPage from "./Pages/SslIndonesia/detail";
import PdfPage from "./Pages/SslIndonesia/pdf";
import SslLibya from "./Pages/SslLibya";
import SslLibyaDetail from "./Pages/SslLibya/detail";
import SsliFinladDetail from "./Pages/SslFinlandia/detail";
import ScrollToTop from "./Utils/scrollToTop";

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
    id: 3,
    name: "SSL Indonesia",
    component: <SslIndonesia />,
    path: "/ssl-indonesia",
  },
  {
    id: 6,
    name: "SSL Indonesia",
    component: <DetailPage />,
    path: "/ssl-indonesia/:id",
  },
  {
    id: 4,
    name: "SSL Libya",
    component: <SslLibya />,
    path: "/ssl-libya",
  },
  {
    id: 8,
    name: "SSL Libya Detail",
    component: <SslLibyaDetail />,
    path: "/ssl-libya/:id",
  },
  {
    id: 9,
    name: "SSL Finlad Detail",
    component: <SsliFinladDetail />,
    path: "/ssl-finlandia/:id",
  },
  {
    id: 5,
    name: "SSL Finlandia",
    component: <SslFinlandia />,
    path: "/ssl-finlandia",
  },
  {
    id: 7,
    name: "SSL Indonesia PDF",
    component: <PdfPage />,
    path: "/ssl-indonesia/pdf",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
      <ScrollToTop />
      <Header />

        <div className="flex-1 flex">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
