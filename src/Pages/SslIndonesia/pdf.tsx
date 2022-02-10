import React from "react";

const PdfPage = () => {
  return (
   <div className="w-full">
        <iframe
        title="asd"
      src={require('../../Assets/atlas.pdf')}
      width="100%"
      height="100%"
    ></iframe>
   </div>
  );
};

export default PdfPage;
