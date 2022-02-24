import React from "react";
import { useNavigate } from "react-router-dom";

const SslDetail = ({
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
    <div className="w-full lg:grid lg:grid-cols-2 lg:grid-flow-col lg:py-12 lg:gap-x-8">
      {/* kiri */}
      <div className="lg:col-span-1 p-4">
        {imageUrl && <img src={imageUrl} className="w-full" alt={`img`} />}
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
        <div className="flex flex-wrap justify-center space-x-2">
          {url.map((i: string, index: any) => {
            return (
              <a href={i} key={index} className="text-sm text-[#94c045]">
                {i}
                {index !== url.length - 1 && (
                  <span className="px-2 text-black">|</span>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* kanan */}
      <div className="lg:col-span-1 p-4">
        <div className="text-2xl font-semibold text-center pb-3">{title}</div>
        <div className="text=[#444444] pb-3">{description}</div>
        {file && (
          <div className="w-full flex justify-end">
            <button
              onClick={() => location("/ssl-indonesia/pdf")}
              className="bg-[#94c045] text-sm lg:text-base px-4 rounded-md py-1 text-white"
            >
              {label}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SslDetail;
