import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import showcaseImg from "./imges/krchimg.png";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Eng from "../../locale/englsh";
import Ru from "../../locale/rus";
import Uz from "../../locale/uzb";
i18next.use(initReactI18next).init({
  resources: {
    eng: { translation: Eng },
    ru: { translation: Ru },
    uz: { translation: Uz },
  },
  lng: localStorage.getItem("lang") || "eng",
  fallbackLng: "eng",
});

const HomeComponents = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const { t } = useTranslation();
  const handlechange = (e) => {
    const selectLang = e.target.value;
    setLang(selectLang);
    localStorage.setItem("lang", selectLang);
    i18next.changeLanguage(selectLang);
  };
  return (
    <>
      <section className="home">
        <header className="header bg-[#797d49]">
          <div className="container  w-[90%] m-auto flex items-center justify-between py-[2rem] ">
            <div className="hedaer-left">
              <Link to={"/"}>
                <h1 className="text-[4rem] font-bold text-white">TRAVEL HUT</h1>
              </Link>
            </div>
            <div className="hedaer-right flex items-center gap-[6rem] text-[3rem] font-bold text-white">
              <Link to={"/"}>
                {" "}
                <h3>{t("header_nav.home")}</h3>{" "}
              </Link>
              <Link>
                {" "}
                <h3>{t("header_nav.about")}</h3>{" "}
              </Link>
              <Link>
                {" "}
                <h3>{t("header_nav.contact")}</h3>{" "}
              </Link>
              <select value={lang} onChange={handlechange} className="text-[#000]">
                <option value="eng">eng</option>
                <option value="uz">uz</option>
                <option value="ru">ru</option>
              </select>
            </div>
          </div>
        </header>

        <div className="bottom min-h-[710px]">
          <div className="container w-[90%] m-auto flex items-center justify-between pt-[8rem]">
            <div className="site-left flex w-[50%] flex-col gap-[1rem]">
              <h5 className="font-normal text-[6.4rem] text-[#ffff]">
                {t("main_left.enjoy")}
              </h5>
              <h3 className="aladin"> {t("main_left.hut")}</h3>
              <h6 className="text-[#fff] font-normal text-[4rem]">
                {t("main_left.discover")}
              </h6>
              <button className="rounded-[3.5rem] flex text-[4rem] items-center justify-center w-[38.7rem] h-[9.9rem] bg-[#797d49] text-[#fff] transition-all hover:bg-transparent hover:border-[2px] border-[solid] border-[white]">
                {t("main_left.btn")}
              </button>
            </div>
            <div className="site-right">
              <img
                className="w-[100%] h-[100%] rounded-md"
                src={showcaseImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponents;
