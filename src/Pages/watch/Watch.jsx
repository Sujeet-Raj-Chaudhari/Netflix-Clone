import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useLocation, Link } from "react-router-dom";
export default function Watch() {
  const location = useLocation();

  const movie = location.state.movie;
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
