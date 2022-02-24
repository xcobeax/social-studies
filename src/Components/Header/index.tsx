import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowDown from "../../Assets/arrow-down.png";
import Globe from "../../Assets/globe.png";
import Ina from "../../Assets/ina.png";
import En from "../../Assets/en.png";
import Fl from "../../Assets/fl.png";
import Lb from "../../Assets/lb.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Header = () => {
  const [isOpenSSl, setIsOpenSsl] = useState<boolean>(false);
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);
  const route = useLocation();
  const { t } = useTranslation();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div
      className={`${
        isOpenMenu ? "lg:h-10" : "h-10"
      } lg:items-center lg:py-8 sticky py-1.5 top-0 z-40 shadow-md border-b border-gray-300 bg-white w-full px-5 lg:px-28 transition-all ease-in-out duration-300`}
    >
      <div className="w-full flex justify-between items-center lg:h-full">
      <Link to={"/"}>
        <div className="lg:text-3xl font-medium tracking-wide">
          {t("title")}
        </div>
        </Link>
        <svg
          onClick={() => handleClickMenu()}
          className="block lg:hidden"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <div className="lg:flex hidden lg:gap-x-10 font-medium text-gray-600">
          <Link to={"/"}>
            <div
              className={`cursor-pointer ${
                route.pathname === "/" ? "text-green-600" : "text-gray-700"
              } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
            >
              {t("home")}
            </div>
          </Link>
          <div onMouseLeave={() => setIsOpenSsl(false)}>
            <div
              onMouseEnter={() => setIsOpenSsl(true)}
              className="flex space-x-2 items-center"
            >
              <div className="cursor-pointer hover:text-green-600 transition-all duration-500 hover:shadow-lg">
                {t("ssl")}
              </div>
              <img
                src={ArrowDown}
                alt="arrow"
                className={`w-2 h-1 duration-300 ${isOpenSSl && "rotate-180"}`}
              />
            </div>
            <div
              className={`absolute transition-all ease-in p-4 top-10 bg-white shadow-md border flex flex-col space-y-2 duration-700 ${
                !isOpenSSl && "hidden"
              }`}
            >
              <Link to={"/ssl-indonesia"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-indonesia"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
                >
                  {t("ssl_ina")}
                </div>
              </Link>
              <Link to={"/ssl-libya"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-libya"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
                >
                  {t("ssl_ar")}
                </div>
              </Link>
              <Link to={"/ssl-finlandia"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-finlandia"
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
                >
                  {t("ssl_fl")}
                </div>
              </Link>
            </div>
          </div>

          <div
            className="flex flex-row items-center"
            onMouseLeave={() => setIsOpenLang(false)}
          >
            <div
              onMouseEnter={() => setIsOpenLang(true)}
              className="flex space-x-2 items-center"
            >
              <img src={Globe} alt="globe" className={`w-5`} />
              <img
                src={ArrowDown}
                alt="arrow"
                className={`w-2 h-1 duration-300 ${isOpenLang && "rotate-180"}`}
              />
            </div>
            <div
              className={`absolute transition-all ease-in p-4 top-10 bg-white shadow-md border flex flex-col space-y-4 duration-700 ${
                !isOpenLang && "hidden"
              }`}
            >
              <img
                onClick={() => i18n.changeLanguage("in")}
                src={Ina}
                alt="ina"
                className={`w-10 cursor-pointer border`}
              />
              <img
                onClick={() => i18n.changeLanguage("en")}
                src={En}
                alt="ina"
                className={`w-10 cursor-pointer border`}
              />
              <img
                src={Lb}
                alt="ina"
                onClick={() => i18n.changeLanguage("ar")}
                className={`w-10 cursor-pointer border`}
              />
              <img
                src={Fl}
                alt="ina"
                onClick={() => i18n.changeLanguage("fl")}
                className={`w-10 cursor-pointer border`}
              />
            </div>
          </div>
        </div>
      </div>
      {isOpenMenu && (
        <div className="w-full lg:hidden justify-between text-sm flex space-y-2 text-gray-600 transition-all duration-300">
          <ul>
          <Link to={"/"}>
            <div
              className={`cursor-pointer ${
                route.pathname === "/" ? "text-green-600" : "text-gray-600"
              } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
            >
              {t("home")}
            </div>
          </Link>
            <li>{t("ssl")}</li>
            <li className="pl-4 space-y-0.5 flex flex-col">
              <Link to={"/ssl-indonesia"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-indonesia"
                      ? "text-green-600"
                      : "text-gray-600"
                  } hover:text-green-600 transition-all duration-500 hover:shadow-lg  text-xs `}
                >
                  {t("ssl_ina")}
                </div>
              </Link>
              <Link to={"/ssl-libya"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-libya"
                      ? "text-green-600"
                      : "text-gray-600"
                  } hover:text-green-600 transition-all duration-500 text-xs hover:shadow-lg`}
                >
                  {t("ssl_ar")}
                </div>
              </Link>
              <Link to={"/ssl-finlandia"}>
                <div
                  className={`cursor-pointer ${
                    route.pathname === "/ssl-finlandia"
                      ? "text-green-600"
                      : "text-gray-600"
                  } hover:text-green-600 transition-all duration-500 hover:shadow-lg  text-xs `}
                >
                  {t("ssl_fl")}
                </div>
              </Link>
            </li>
          </ul>
         <div className="flex flex-col space-y-3">
         <img
                onClick={() => i18n.changeLanguage("in")}
                src={Ina}
                alt="ina"
                className={`w-6 cursor-pointer border`}
              />
              <img
                onClick={() => i18n.changeLanguage("en")}
                src={En}
                alt="ina"
                className={`w-6 cursor-pointer border`}
              />
              <img
                src={Lb}
                alt="ina"
                onClick={() => i18n.changeLanguage("ar")}
                className={`w-6 cursor-pointer border`}
              />
              <img
                src={Fl}
                alt="ina"
                onClick={() => i18n.changeLanguage("fl")}
                className={`w-6 cursor-pointer border`}
              />
         </div>
        </div>
      )}
    </div>
  );
};

export default Header;
