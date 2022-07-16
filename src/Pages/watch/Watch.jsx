import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/4b33NTAuF5E?t=5"
      />
    </div>
  );
}
