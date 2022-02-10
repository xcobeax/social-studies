import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SslComponent = ({title, imageUrl,id,description, onClickReadMore, label}:any) => {
  return(
    <div className=" p-5 shadow-lg">
    <img src={imageUrl} className="pb-5" alt={`img-${id}`} />
    <div className="text-2xl pb-2 font-semibold">{title}</div>
    <div className="text-base text-[#444444] pb-2">
      {description}
    </div>
    <div className="w-full flex justify-end">
      <button
        onClick={() => onClickReadMore(String(id))}
        className="bg-[#94c045] px-4 rounded-md py-1 text-white"
      >
        {label}
      </button>
    </div>
  </div>
  )
}
const SslIndonesia = () => {
  const location = useNavigate();
  const onClickReadMore = (id:string) => {
    if (id === '4') {
      window.location.href = 'https://pbskids.org/games/social-studies/'
    }else{
    location(id);
    }
  };
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <div className="bg-[#94c045] text-[#fff] text-center py-8">
        <div className="text-3xl">{t('ssli_title')}</div>
        <div>{t('ssli_desc')}</div>
      </div>

      <div className="px-28 grid grid-cols-5 grid-flow-col py-12 gap-x-8">
        <div className="col-span-3 space-y-8">
          <SslComponent onClickReadMore={onClickReadMore} id={1} imageUrl="https://social-studies.masuk.id/assets/img/indonesia/bag1/indopict(1).jpg" title={t('ssli_ina')} description={t('ssli_ina_desc')} label={t('read_more')} />

          <SslComponent onClickReadMore={onClickReadMore} id={2} imageUrl="https://social-studies.masuk.id/assets/img/indonesia/bag2/indopict(1).jpg" title={t('ssli_ina_museum')} description={t('ssli_ina_museum_desc')} label={t('read_more')}/>

          <SslComponent onClickReadMore={onClickReadMore} id={3} imageUrl="https://social-studies.masuk.id/assets/img/gearth.png" title={t('ssli_ina_virtual')} description={t('ssli_ina_virtual_desc')}  label={t('read_more')}/>

          <SslComponent onClickReadMore={onClickReadMore} id={4} imageUrl="https://social-studies.masuk.id/assets/img/game.png" title={t('games')} description={t('games_desc')} label={t('play_now')} />
          
        </div>
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
      </div>
    </div>
  );
};

export default SslIndonesia;
