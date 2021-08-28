import React from "react";
import "./_next-video.scss";
import NextVideoItem from "../NextVideoItem/NextVideoItem";


//this creates the outer block for next video section

function NextVideo({ videos, selectedVideo }) {

  
  return (
    <section className="next-video">
      <h3 className="next-video__header">NEXT VIDEO</h3>

      {videos.map((video) => (
        <NextVideoItem
          key={video.id}
          video={video}
          selectedVideo={selectedVideo}
        />
      ))}
    </section>
  );
}

export default NextVideo;
