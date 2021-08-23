import React from "react";
import "./_video.scss";

function Video(props) {
  return (
    <section className="video">
      <video className="video__box" poster={props.video.image} controls></video>
    </section>
  );
}

export default Video;
