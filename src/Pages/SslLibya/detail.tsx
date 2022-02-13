import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SslDetail from "../../Components/Ssl/sslDetail";

const SslLDetail = () => {
  const { t } = useTranslation();
  const params = useParams();

  if (params.id === "1") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetail
          title={t("lib_panorama")}
          description={t("lib_panorama_desc")}
          imageUrl={require("../../Assets/libyacity.jpg")}
          url={[
            "https://www.europa.uk.com/global-1000-atlas/map/?pid=119473",
            "https://globalwindatlas.info/area/Libya",
            "https://www.atlasobscura.com/things-to-do/libya",
            "https://www.youtube.com/watch?v=nuJ6QTZdvxM",
          ]}
        />
        <SslDetail
          title={t("lib_social")}
          description={t("lib_social_desc")}
          imageUrl={require("../../Assets/libyamap.jpg")}
          url={["https://www.everyculture.com/Ja-Ma/Libya.html"]}
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
          title={t("leebia")}
          description={t("leebia_desc")}
          imageUrl={require("../../Assets/museumoflibya.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-lybia.htm"]}
        />

        <SslDetail
          title={t("assara")}
          description={t("assara_desc")}
          imageUrl={require("../../Assets/assara.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-tripoli.htm"]}
        />

        <SslDetail
          title={t("karamnly")}
          description={t("karamnly_desc")}
          imageUrl={require("../../Assets/karamanly.jpg")}
          url={[
            "https://www.temehu.com/Cities_sites/museum-of-karamanli-house.htm",
          ]}
        />

        <SslDetail
          title={t("janzur")}
          description={t("janzur_desc")}
          imageUrl={require("../../Assets/janzur.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-janzur.htm"]}
        />

        <SslDetail
          title={t("leptis")}
          description={t("leptis_desc")}
          imageUrl={require("../../Assets/leptis.jpg")}
          url={[
            "https://www.temehu.com/Cities_sites/museum-of-leptis-magna.htm",
          ]}
        />

        <SslDetail
          title={t("ghadames")}
          description={t("ghadames_desc")}
          imageUrl={require("../../Assets/ghadames.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-ghadames.htm"]}
        />

        <SslDetail
          title={t("nalut")}
          description={t("nalut_desc")}
          imageUrl={require("../../Assets/nalut.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-nalut.htm"]}
        />

        <SslDetail
          title={t("germa")}
          description={t("germa_desc")}
          imageUrl={require("../../Assets/germa.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-germa.htm"]}
        />

        <SslDetail
          title={t("cyrene")}
          description={t("cyrene_desc")}
          imageUrl={require("../../Assets/cyrene.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-cyrene.htm"]}
        />

        <SslDetail
          title={t("apollonia")}
          description={t("apollonia_desc")}
          imageUrl={require("../../Assets/apollonia.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-apollonia.htm"]}
        />

        <SslDetail
          title={t("tolmeita")}
          description={t("tolmeita_desc")}
          imageUrl={require("../../Assets/tolmeita.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-tolmeita.htm"]}
        />

        <SslDetail
          title={t("qasr")}
          description={t("qasr_desc")}
          imageUrl={require("../../Assets/qasr.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-qasr-libya.htm"]}
        />

        <SslDetail
          title={t("jado")}
          description={t("jado_desc")}
          imageUrl={require("../../Assets/jado.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-jado.htm"]}
        />

        <SslDetail
          title={t("sabratha")}
          description={t("sabratha_desc")}
          imageUrl={require("../../Assets/sabratha.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-sabratha.htm"]}
        />

        <SslDetail
          title={t("assultan")}
          description={t("assultan_desc")}
          imageUrl={require("../../Assets/assultan.jpg")}
          url={["https://www.temehu.com/Cities_sites/museum-of-assultan.htm"]}
        />

        <SslDetail
          title={t("vandalism")}
          description={t("vandalism_desc")}
          imageUrl={require("../../Assets/vandalism.jpeg")}
          url={[
            "https://www.temehu.com/Cities_sites/museumvandalism-archaeological-robberies.htm",
          ]}
        />
      </div>
    );
  }

  if (params.id === "3") {
    return (
      <div className="w-full px-28 py-8">
        <SslDetail
          title={t("l_tour")}
          description={t("l_tour_desc")}
          url={["https://www.youtube.com/watch?v=ac5B8pDwzkg"]}
          videoUrl="https://www.youtube.com/embed/ac5B8pDwzkg"
        />

        <SslDetail
          title={t("virtual_oasis")}
          description={t("virtual_oasis_desc")}
          url={["https://www.youtube.com/watch?v=DlJtxhR34Kg"]}
          videoUrl="https://www.youtube.com/embed/DlJtxhR34Kg"
        />

        <SslDetail
          title={t("virtual_libya")}
          description={t("virtual_libya_desc")}
          url={["https://www.youtube.com/watch?v=NTf2rki0AcI"]}
          videoUrl="https://www.youtube.com/embed/NTf2rki0AcI"
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

export default SslLDetail;
