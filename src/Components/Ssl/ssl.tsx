import React from "react";

const Ssl = ({
  title,
  imageUrl,
  id,
  description,
  onClickReadMore,
  label,
}: any) => {
  return (
    <div className=" p-5 shadow-lg">
      <img src={imageUrl} className="pb-5" alt={`img-${id}`} />
      <div className="text-2xl pb-2 font-semibold">{title}</div>
      <div className="text-base text-[#444444] pb-2">{description}</div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => onClickReadMore(String(id))}
          className="bg-[#94c045] px-4 rounded-md py-1 text-white"
        >
          {label}
        </button>
      </div>
    </div>
  );
};
export default Ssl;
