import React from "react";
import Logo from "../../Assets/socialLogo.png";
import { images } from "./images";
import ImageViewer from "react-simple-image-viewer";
import { useTranslation } from "react-i18next";

const styles = {
  backgroundImage: `url(https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80)`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const handleGetStrarted = () => {
    document.getElementById("section2")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isViewerOpen]);

  return (
    <div className="w-full flex flex-col">
      {/* section 1 */}
      <div
        className="w-full flex flex-col justify-center text-center space-y-8 py-[9rem]"
        style={styles}
      >
        <div className="w-full flex justify-center">
          <h1 className="text-5xl text-white font-semibold w-2/3">
            {t("home_main_title")}
          </h1>
        </div>
        <div id="section2">
          <button
            onClick={handleGetStrarted}
            className="rounded-full px-10 py-2 font-medium text-white border border-[#9cce46]"
          >
            {t("get_started")}
          </button>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex items-center space-y-7 flex-col mx-28 -mt-14 bg-white p-10 shadow-lg text-center mb-16">
        <div className="text-4xl w-2/3 text-[#646c55]">{t("home_title")}</div>
        <div className="text-lg text-[#646c55]">{t("home_content")}</div>
      </div>
      {/* section 3 */}
      <div className="w-full bg-[#86b03c] text-white flex flex-col items-center p-10 space-y-4 mb-16">
        <div className="text-3xl tracking-wide font-semibold">
          {t("home_sub_title")}
        </div>
        <div>{t("home_sub_content")}</div>
        <div>
          <button className="rounded-full px-10 py-2 font-medium text-white border border-white">
            {t("about_button")}
          </button>
        </div>
      </div>
      {/* section 4 */}
      <div className="mx-28 text-[#646c55] flex flex-col mb-16 cursor-default">
        <div className="text-4xl font-semibold text-center">
          {t("about_title")}
        </div>
        <div className="flex space-x-10 items-center">
          <div className="w-1/3 shadow-lg p-6 hover:-translate-y-2 duration-300">
            <img src={Logo} alt="ina" />
          </div>
          <div className="flex flex-col w-2/3 space-y-10">
            <div className="shadow-lg p-6 text-center hover:-translate-y-2 duration-300">
              <div className="text-[#94c045] text-xl">
                {t("about_content_1")}
              </div>
              <div className="text-[#646c55]">{t("about_content_1_desc")}</div>
            </div>
            <div className="shadow-lg p-6 text-center hover:-translate-y-2 duration-300">
              <div className="text-[#94c045] text-xl">
                {t("about_content_2")}
              </div>
              <div className="text-[#646c55]">{t("about_content_2_desc")}</div>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="mx-28 text-[#646c55] flex flex-col mb-16 space-y-8">
        <div className="text-4xl font-semibold text-center">{t("gallery")}</div>

        <div className="grid grid-cols-3 grid-flow-row gap-5">
          {images.map((e, index) => (
            <div
              onClick={() => openImageViewer(index)}
              className="relative z-10 hover:scale-105 duration-300 cursor-pointer"
              key={e.id}
            >
              <img src={e.image} alt={`img-${e.id}`} />
              <div className="absolute inset-0 bg-black bg-opacity-10">
                <div className="text-white bg-gray-600 bg-opacity-50 p-2 bottom-0 w-full absolute">
                  <div className="text-sm text-gray-200 tracking-wide">
                    {e.desc}
                  </div>
                  <div className="italic text-gray-300 font-medium tracking-wide text-xs">
                    {e.country}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isViewerOpen && (
            <div className="z-40">
              <ImageViewer
                src={images.map((e) => e.image)}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
