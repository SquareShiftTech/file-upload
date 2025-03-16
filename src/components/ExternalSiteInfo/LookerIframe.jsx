import React from "react";
import Iframe from "./Iframe";

const LookerIframe = () => {
  return (
    <div style={{ textAlign: "center" }}> {/* Center align title */}
      <h1>Looker Dashboard</h1>
      <Iframe src="https://www.wikipedia.org" />
    </div>
  );
};

export default LookerIframe;
