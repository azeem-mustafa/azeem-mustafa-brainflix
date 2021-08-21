

function NextVideoItem({video, selectedVideo}){
    return(
      
        <div className= 'next-video__block' onClick={() => { selectedVideo(video.id);
        }} 
        key= {video.id}>
        <img className='next-video__image' src= {video.image} alt= {video.title}/>
        
        <p className= 'next-video__description'>{video.title}</p>
       
        </div>
        
    );
}

export default NextVideoItem;