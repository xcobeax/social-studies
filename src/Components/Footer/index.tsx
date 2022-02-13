import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#141611] text-center py-3 text-sm text-white">
     {t('footer')}
    </div>
  );
};

export default Footer;
