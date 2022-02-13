import React from 'react'
import { useTranslation } from "react-i18next";

const SslSubheading = () => {
  const { t } = useTranslation();
  return (
    <div className="col-span-2">
          <div className="p-5 shadow-lg">
            <div className="text-2xl text-center pb-4 font-semibold">
              {t('ssli_header')}
            </div>
            <div className="text-base text-[#444444]">
             {t('ssli_header_desc')}
            </div>
          </div>
        </div>
  )
}

export default SslSubheading