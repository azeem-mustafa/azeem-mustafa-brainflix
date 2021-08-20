import React from 'react';
import './_video-details.scss';
import ViewsImg from '../../assets/Icons/Icon-views.svg';
import LikesImg from '../../assets/Icons/Icon-likes.svg';

function VideoDetails(props) {

/*format date*/
function dateDisplay(timeAndDay) {
  const currentDate = new Date(timeAndDay);
  let month = currentDate.getMonth() + 1;
  let date = currentDate.getDate();
  let year = currentDate.getFullYear();

  return + month + "/" + date + "/" + year;
}

  return (
    <section className='video-details'>

      <h1 className='video__details-title'>{props.video.title}</h1>

      <div className='video-details__channel-and-date'>
        <h2 className='video-details__channel'>{props.video.channel}</h2>
        <h2 className= 'video-details__date'>{dateDisplay(props.video.timestamp)}</h2>
      </div>

      <div className='video-details__views'>
        <img src={ViewsImg} alt='views img' />
        <h4>{props.video.views}</h4>
      </div>

      <div className='video-details__likes'>
        <img src={LikesImg} alt='Likes Img' />
        <h4>{props.video.likes}</h4>
      </div>

      <hr className= 'video-details__divider divider'/>

      <p>{props.video.description}</p>
    </section>
  )
}

export default VideoDetails;