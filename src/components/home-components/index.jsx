import React, { useState } from "react";
import { Link } from "react-router-dom";
import showcaseImg from "./imges/krchimg.png";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Eng from "../../locale/englsh";
import Ru from "../../locale/rus";
import Uz from "../../locale/uzb";
import { Select, Space } from "antd";
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
    const selectLang = e;
    setLang(selectLang);
    localStorage.setItem("lang", selectLang);
    i18next.changeLanguage(selectLang);
  };
  return (
    <>
      <section className="home">
        <header className="header bg-[#797d49]">
          <div className="container  w-[90%] m-auto flex items-center justify-between py-[20px] ">
            <div className="hedaer-left text-[10px] max-[1059px]:text-[9px] max-[1024px]:text-[8px]">
              <Link to={"/"}>
                <h1 className="text-[5em] font-bold text-white max-[810px]:text-[2.2em]">TRAVEL HUT</h1>
              </Link>
            </div>

            <div className="hedaer-right flex items-center gap-[40px] text-[10px] font-bold text-white  max-[1059px]:text-[9px] max-[1024px]:text-[6px]">
              <Link to={"/"}>
                {" "}
                <h3 className="text-[2.1em]">{t("header_nav.home")}</h3>{" "}
              </Link>
              <Link>
                {" "}
                <h3 className="text-[2.1em]">{t("header_nav.about")}</h3>{" "}
              </Link>
              <Link>
                {" "}
                <h3 className="text-[2.1em]">{t("header_nav.contact")}</h3>{" "}
              </Link>
              {/* <select
                value={lang}
                onChange={handlechange}
                className="text-[#000] w-[10em] h-[3em]  rounded-md p-2"
              >
                <option className="text-[2.5em] font-[500]" value="eng">eng</option>
                <option className="text-[2.5em] font-[500]" value="uz">uz</option>
                <option className="text-[2.5em] font-[500]" value="ru">ru</option>
              </select> */}
              <Select
                value={lang}
                className="!w-[6em]"
                onChange={ (e) => handlechange(e)}
                options={[
                  { value: "eng", label: "Englsh" },
                  { value: "ru", label: "Russian" },
                  { value: "uz", label: "Uzbek" },
                ]}
              />
            </div>
          </div>
        </header>

        <div className="bottom min-h-[710px]">
          <div className="container w-[90%] m-auto flex items-center justify-between pt-[2em] max-[620px]:flex-col max-[620px]:gap-[20px]">
            <div className="site-left flex w-[45%] flex-col gap-[10px] text-[10px]  max-[1059px]:text-[9px] max-[835px]:text-[7px] max-[620px]:w-[100%] max-[620px]:text-center max-[620px]:items-center">
              <h5 className="font-[500] text-[3.4em] text-[#ffff]">
                {t("main_left.enjoy")}
              </h5>
              <h3 className="aladin text-[7.5em]"> {t("main_left.hut")}</h3>
              <h6 className="text-[#fff] font-normal text-[2em]">
                {t("main_left.discover")}
              </h6>
              <button className="rounded-[3.5em] flex  items-center justify-center w-[38.7em] h-[9.9em] bg-[#797d49] text-[#fff] transition-all hover:bg-transparent hover:border-[2px] border-[solid] border-[white]">
                {t("main_left.btn")}
              </button>
            </div>
            <div className="site-right w-[45%] flex justify-end  max-[620px]:w-full">
              <img
                className="w-[30em] h-[30em] max-[835px]:h-[22em] max-[620px]:self-center  rounded-md max-[620px]:w-full"
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
