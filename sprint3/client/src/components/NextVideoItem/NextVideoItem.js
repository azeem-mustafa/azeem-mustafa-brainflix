import ".././NextVideoSection/_next-video.scss";
import { Link } from "react-router-dom";

//this section pulls the videos and data from the api for next video section

function NextVideoItem({ video}) {
  return (
    <Link
      to={`/videos/${video.id}`}
      className="next-video__block"
      
      key={video.id}
    >
      <div>
        <img
          className="next-video__image"
          src={video.image}
          alt=""
        />
      </div>
      <div className="next-video__title-and-channel-block">
        <p className="next-video__title">{video.title}</p>

        <p className="next-video__channel">{video.channel}</p>
      </div>
    </Link>
  );
}

export default NextVideoItem;
