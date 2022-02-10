import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const SslDetailComponent = ({
  title,
  description,
  file,
  label,
  imageUrl,
  url,
  videoUrl,
}: any) => {
  const location = useNavigate();
  return (
    <div className="w-full grid grid-cols-2 grid-flow-col py-12 gap-x-8">
      {/* kiri */}
      <div className="col-span-1 p-4">
        {imageUrl && <img src={imageUrl} className="" alt={`img`} />}
        {videoUrl && (
          <div
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              paddingTop: "56.25%",
            }}
          >
            <iframe
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="tub"
              src={videoUrl}
            ></iframe>
          </div>
        )}
        <div className="flex justify-center space-x-2">
          {url.map((i: string, index: any) => {
            return (
              <div key={index} className="text-sm text-[#94c045]">
                {i}{" "}
                {index !== url.length - 1 && (
                  <span className="px-2 text-black">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* kanan */}
      <div className="col-span-1 p-4">
        <div className="text-2xl font-semibold text-center pb-3">{title}</div>
        <div className="text=[#444444] pb-3">{description}</div>
        {file && (
          <div className="w-full flex justify-end">
            <button
              onClick={() => location("/ssl-indonesia/pdf")}
              className="bg-[#94c045] px-4 rounded-md py-1 text-white"
            >
              {label}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const DetailPage = () => {
  const { t } = useTranslation();
  const params = useParams();

  if (params.id === "1") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetailComponent
          title={t("ssli_panorama")}
          description={t("ssli_panorama_desc")}
          file="e"
          label={t("ssli_panorama_label")}
          imageUrl="https://social-studies.masuk.id/assets/img/indonesia/bag1/indopict(1).jpg"
          url={[
            "https://www.panorama-destination.com",
            "https://atlas.big.go.id/eatlas1/",
          ]}
        />
        <SslDetailComponent
          title={t("ssli_social")}
          description={t("ssli_social_desc")}
          imageUrl="https://social-studies.masuk.id/assets/img/indonesia/bag1/indopict(2).png"
          url={["https://sejarahsosial.org/"]}
        />
        <SslDetailComponent
          title={t("ssli_history")}
          description={t("ssli_history_desc")}
          imageUrl="https://social-studies.masuk.id/assets/img/bighistory.png"
          url={["https://www.bighistoryproject.com/"]}
        />
      </div>
    );
  }

  if (params.id === "2") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetailComponent
          title={t("monas")}
          description={t("monas_desc")}
          imageUrl={require("../../Assets/monas.jpg")}
          url={["https://indonesiavirtualtour.com/"]}
        />

        <SslDetailComponent
          title={t("nasional")}
          description={t("nasional_desc")}
          imageUrl={require("../../Assets/national.jpg")}
          url={["https://museumnasional.iheritage.id/"]}
        />

        <SslDetailComponent
          title={t("kebangkitan")}
          description={t("kebangkitan_desc")}
          imageUrl={require("../../Assets/awakening.jpg")}
          url={["http://virtualtour.muskitnas.net./"]}
        />

        <SslDetailComponent
          title={t("fatahilah")}
          description={t("fatahilah_desc")}
          imageUrl={require("../../Assets/fatahilah.jpg")}
          url={[
            "https://indonesiavirtualtour.com/dki-jakarta/taman-fatahillah",
          ]}
        />
      </div>
    );
  }

  if (params.id === "3") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetailComponent
          title={t("ragunan")}
          description={t("ragunan_desc")}
          url={["https://www.youtube.com/watch?v=7itJivVjavI"]}
          videoUrl="https://www.youtube.com/embed/7itJivVjavI"
        />

        <SslDetailComponent
          title={t("seaworld")}
          description={t("seaworld_desc")}
          url={["https://www.youtube.com/watch?v=U_GlfbXk9Qc"]}
          videoUrl="https://www.youtube.com/embed/U_GlfbXk9Qc"
        />

        <SslDetailComponent
          title={t("googleearth")}
          description={t("googleearth_desc")}
          imageUrl={require("../../Assets/googleearth.png")}
          url={["https://www.google.co.id/intl/id/earth/"]}
        />

        <SslDetailComponent
          title={t("googlesky")}
          description={t("googlesky_desc")}
          imageUrl={require("../../Assets/googlesky.png")}
          url={["https://www.google.co.id/sky/"]}
        />
      </div>
    );
  }

  return null;
};

export default DetailPage;
