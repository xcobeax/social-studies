import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Ssl from "../../Components/Ssl/ssl";
import SslHeader from "../../Components/Ssl/sslHeader";
import SslSubheading from "../../Components/Ssl";

const SslIndonesia = () => {
  const location = useNavigate();
  const onClickReadMore = (id: string) => {
    if (id === "4") {
      window.location.href = "https://pbskids.org/games/social-studies/";
    } else {
      location(id);
    }
  };
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <SslHeader title={t("ssli_title")} desc={t("ssli_desc")} />

      <div className="px-28 grid grid-cols-5 grid-flow-col py-12 gap-x-8">
        <div className="col-span-3 space-y-8">
          <Ssl
            onClickReadMore={onClickReadMore}
            id={1}
            imageUrl={require("../../Assets/pano_indo.jpg")}
            title={t("ssli_ina")}
            description={t("ssli_ina_desc")}
            label={t("read_more")}
          />
          <Ssl
            onClickReadMore={onClickReadMore}
            id={2}
            imageUrl={require("../../Assets/monas.jpg")}
            title={t("ssli_ina_museum")}
            description={t("ssli_ina_museum_desc")}
            label={t("read_more")}
          />
          <Ssl
            onClickReadMore={onClickReadMore}
            id={3}
            imageUrl={require("../../Assets/googleearth.png")}
            title={t("ssli_ina_virtual")}
            description={t("ssli_ina_virtual_desc")}
            label={t("read_more")}
          />
          <Ssl
            onClickReadMore={onClickReadMore}
            id={4}
            imageUrl={require("../../Assets/game.png")}
            title={t("games")}
            description={t("games_desc")}
            label={t("play_now")}
          />
        </div>
        <SslSubheading />
      </div>
    </div>
  );
};

export default SslIndonesia;
