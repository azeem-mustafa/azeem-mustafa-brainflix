import React from "react";
import "./_video.scss";

function Video(props) {
  return (
    <section className="video">
      <div className='video__flex'>
      <video className="video__box" poster={props.video.image} controls></video>
      </div>
    </section>
  );
}

export default Video;
