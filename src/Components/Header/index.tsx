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
  return (
    <div className="w-full sticky top-0 z-40 shadow-md py-3 px-28 border-b border-gray-300 bg-white flex justify-between items-center">
      <div className="text-3xl font-medium tracking-wide">{t("title")}</div>
      <div className="flex gap-x-10 font-medium text-gray-600">
        <Link to={"/"}>
          <div
            className={`cursor-pointer ${
              route.pathname === "/" ? "text-green-600" : "text-gray-700"
            } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
          >
            {t('home')}
          </div>
        </Link>
        {/* <Link to={"/about"}>
          <div
            className={`cursor-pointer ${
              route.pathname === "/about" ? "text-green-600" : "text-gray-700"
            } hover:text-green-600 transition-all duration-500 hover:shadow-lg`}
          >
            {t('about')}
          </div>
        </Link> */}
        <div onMouseLeave={() => setIsOpenSsl(false)}>
          <div
            onMouseEnter={() => setIsOpenSsl(true)}
            className="flex space-x-2 items-center"
          >
            <div className="cursor-pointer hover:text-green-600 transition-all duration-500 hover:shadow-lg">
             {t('ssl')}
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
                {t('ssl_ina')}
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
                {t('ssl_ar')}
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
                {t('ssl_fl')}
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
  );
};

export default Header;
