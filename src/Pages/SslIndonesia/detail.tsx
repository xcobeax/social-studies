import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SslDetail from "../../Components/Ssl/sslDetail";


const DetailPage = () => {
  const { t } = useTranslation();
  const params = useParams();

  if (params.id === "1") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetail
          title={t("ssli_panorama")}
          description={t("ssli_panorama_desc")}
          file="e"
          label={t("ssli_panorama_label")}
          imageUrl={require("../../Assets/pano_indo.jpg")}
          url={[
            "https://www.panorama-destination.com",
            "https://atlas.big.go.id/eatlas1/",
          ]}
        />
        <SslDetail
          title={t("ssli_social")}
          description={t("ssli_social_desc")}
          imageUrl={require("../../Assets/sejarah.png")}
          url={["https://sejarahsosial.org/"]}
        />
        <SslDetail
          title={t("ssli_history")}
          description={t("ssli_history_desc")}
          imageUrl={require("../../Assets/history.png")}
          url={["https://www.bighistoryproject.com/"]}
        />
      </div>
    );
  }

  if (params.id === "2") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetail
          title={t("monas")}
          description={t("monas_desc")}
          imageUrl={require("../../Assets/monas.jpg")}
          url={["https://indonesiavirtualtour.com/"]}
        />

        <SslDetail
          title={t("nasional")}
          description={t("nasional_desc")}
          imageUrl={require("../../Assets/national.jpg")}
          url={["https://museumnasional.iheritage.id/"]}
        />

        <SslDetail
          title={t("kebangkitan")}
          description={t("kebangkitan_desc")}
          imageUrl={require("../../Assets/awakening.jpg")}
          url={["http://virtualtour.muskitnas.net./"]}
        />

        <SslDetail
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
        <SslDetail
          title={t("ragunan")}
          description={t("ragunan_desc")}
          url={["https://www.youtube.com/watch?v=7itJivVjavI"]}
          videoUrl="https://www.youtube.com/embed/7itJivVjavI"
        />

        <SslDetail
          title={t("seaworld")}
          description={t("seaworld_desc")}
          url={["https://www.youtube.com/watch?v=U_GlfbXk9Qc"]}
          videoUrl="https://www.youtube.com/embed/U_GlfbXk9Qc"
        />

        <SslDetail
          title={t("googleearth")}
          description={t("googleearth_desc")}
          imageUrl={require("../../Assets/googleearth.png")}
          url={["https://www.google.co.id/intl/id/earth/"]}
        />

        <SslDetail
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
