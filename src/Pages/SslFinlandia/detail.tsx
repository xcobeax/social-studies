import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SslDetail from "../../Components/Ssl/sslDetail";

const SslLDetail = () => {
  const { t } = useTranslation();
  const params = useParams();

  if (params.id === "1") {
    return (
      <div className="w-full px-4 lg:px-28 py-4 lg:py-8">
        <SslDetail
          title={t("fin_panorama")}
          description={t("fin_panorama_desc")}
          imageUrl={require("../../Assets/finland.jpg")}
          url={[
            "https://www.worldatlas.com/maps/finland",
            "https://www.youtube.com/watch?v=QG3Z7ZgiAnE",
          ]}
        />
        <SslDetail
          title={t("fin_social")}
          description={t("fin_social_desc")}
          imageUrl={require("../../Assets/fin_map.jpg")}
          url={["https://socialhistoryportal.org/"]}
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
      <div className="w-full lg:px-28 lg:py-8">
        <SslDetail
          title={t("finish")}
          description={t("finish_desc")}
          url={[
            "https://www.youtube.com/watch?v=pzd6VHr0qQA",
            "https://www.suomenlasimuseo.fi/museum",
          ]}
          videoUrl="https://www.youtube.com/embed/pzd6VHr0qQA"
        />

        <SslDetail
          title={t("kiasma")}
          description={t("kiasma_desc")}
          url={["https://www.youtube.com/watch?v=cu7izUoRwxY"]}
          videoUrl="https://www.youtube.com/embed/cu7izUoRwxY"
        />

        <SslDetail
          title={t("art")}
          description={t("art_desc")}
          url={[
            "https://www.youtube.com/watch?v=umQ9sUGgyLk",
            "https://sinebrychoffintaidemuseo.fi/en/guided-tours/",
          ]}
          videoUrl="https://www.youtube.com/embed/umQ9sUGgyLk"
        />

        <SslDetail
          title={t("ham")}
          description={t("ham_desc")}
          url={[
            "https://www.youtube.com/watch?v=9tAa-lRv-go",
            "https://www.hamhelsinki.fi/en/",
          ]}
          videoUrl="https://www.youtube.com/embed/9tAa-lRv-go"
        />

        <SslDetail
          title={t("finnish")}
          description={t("finnish_desc")}
          url={[
            "https://www.youtube.com/watch?v=RPV0bTeZ4ig",
            "https://www.valokuvataiteenmuseo.fi/en",
          ]}
          videoUrl="https://www.youtube.com/embed/RPV0bTeZ4ig"
        />

        <SslDetail
          title={t("kunt")}
          description={t("kunt_desc")}
          url={[
            "https://www.youtube.com/watch?v=X5Jf9Gj7i00",
            "https://taidehalli.fi/en/",
          ]}
          videoUrl="https://www.youtube.com/embed/X5Jf9Gj7i00"
        />

        <SslDetail
          title={t("amos")}
          description={t("amos_desc")}
          url={[
            "https://www.youtube.com/watch?v=Pugx_4gjZIc",
            "https://amosrex.fi/en/",
          ]}
          videoUrl="https://www.youtube.com/embed/Pugx_4gjZIc"
        />

        <SslDetail
          title={t("emma")}
          description={t("emma_desc")}
          url={[
            "https://www.youtube.com/watch?v=sJ9DBYE0Bic",
            "https://www.youtube.com/watch?v=Yb0IMaMTCXI",
            "https://emmamuseum.fi/en/",
          ]}
          videoUrl="https://www.youtube.com/embed/Yb0IMaMTCXI"
        />

        <SslDetail
          title={t("gustaf")}
          description={t("gustaf_desc")}
          url={[
            "https://www.youtube.com/watch?v=XdsC14b-WBI",
            "https://serlachius.fi/en/museums-and-collections/serlachius-museums/",
          ]}
          videoUrl="https://www.youtube.com/embed/XdsC14b-WBI"
        />

        <SslDetail
          title={t("sara")}
          description={t("sara_desc")}
          url={[
            "https://www.youtube.com/watch?v=YBKvCp3in4Y",
            "https://www.tampere.fi/sarahilden/en/index.html",
          ]}
          videoUrl="https://www.youtube.com/embed/YBKvCp3in4Y"
        />
      </div>
    );
  }

  if (params.id === "3") {
    return (
      <div className="w-full lg:px-28 lg:py-8">
        <SslDetail
          title={t("zoo")}
          description={t("zoo_desc")}
          url={["https://www.youtube.com/watch?v=OUE87d25-8w"]}
          videoUrl="https://www.youtube.com/embed/OUE87d25-8w"
        />

        <SslDetail
          title={t("aqua")}
          description={t("aqua_desc")}
          url={["https://www.youtube.com/watch?v=WVbJRMkQCno"]}
          videoUrl="https://www.youtube.com/embed/WVbJRMkQCno"
        />

        <SslDetail
          title={t("forest")}
          description={t("forest_desc")}
          url={["https://www.youtube.com/watch?v=vMqi0bGYRnk"]}
          videoUrl="https://www.youtube.com/embed/vMqi0bGYRnk"
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
