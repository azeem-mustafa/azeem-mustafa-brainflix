import React from 'react';
import video from '../../assets/Data/videos.json';
import './_next-video.scss';


class  NextVideo extends React.Component {
    state = {
        video,
        nextVideo: video.map[0]
        ,
    };

    updateSelectedVideo = (id) => {
        let nextVideo = this.state.video.find((videos) => videos.id === id);

        this.setState({
            nextVideo: nextVideo,
        });
    };

    render() {
    return(
        <section className= 'next-video'>
           

            {video.map(next => {
                return (
                    <div key= {next.id} className= 'next-video__block'>
                    <img className='next-video__image' src= {next.image} alt= {next.title}/>
                    
                    <p className= 'next-video__description'>{next.title}</p>
                   
                    </div>
                )
            })}
        
        </section>
    )
}
}

export default NextVideo;