import React from 'react';
import './_next-video.scss';
import NextVideoItem from '../NextVideoItem/NextVideoItem';



function NextVideo({ videos, selectedVideo}) {
    

    return(
        <section className= 'next-video'>

            {videos.map((video) => (

                <NextVideoItem key={video.id} video={video} selectedVideo={selectedVideo}/>
            ))}
        
        </section>
    )
}




export default NextVideo;