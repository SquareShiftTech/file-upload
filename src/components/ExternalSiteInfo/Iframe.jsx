import React from "react";

const Iframe = ({ src, width = "900", height = "600" }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: "none", borderRadius: "8px" }}
      title="Dynamic Iframe"
    ></iframe>
  );
};

export default Iframe;
