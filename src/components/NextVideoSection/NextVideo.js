import React from 'react';
import './_next-video.scss';


function NextVideo({ videos, clickHandler}) {

    return(
        <section className= 'next-video'>
           

            {videos.map(video => {
                return (
                    <div onClick={() => {
                        clickHandler(video.id);
                    }} 
                    key= {video.id} className= 'next-video__block'>
                    <img className='next-video__image' src= {video.image} alt= {video.title}/>
                    
                    <p className= 'next-video__description'>{video.title}</p>
                   
                    </div>
                )
            })}
        
        </section>
    )
}


export default NextVideo;