import React from 'react';
import './App.scss';
import videos from './assets/Data/video-details.json';
import videoData from './assets/Data/videos.json';
import Video from './components/Video/Video'
import VideoDetails from './components/Video/VideoDetails';
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments';
import ListedComments from './components/Comments/ListedComments/ListedComments';
import NextVideo from './components/NextVideoSection/NextVideo';



class App extends React.Component{
  state = {
    videos: videoData,
    selectedVideo: videos[0],
    mainVideos: videos[0],
  };

  updateSelectedVideo = (id) => {
    let updatedVideo = videoData.find((video) => video.id === id);

    this.setState({
        selectedVideo: updatedVideo,
    });
};

 

  render(){
    const fliteredVideos = this.state.videos.filter((video) => video.id !== this.state.selectedVideo.id );
  return (
    <>
    <Header />

    <main>
      
      <Video video={this.state.selectedVideo} />

      <VideoDetails video={this.state.selectedVideo} />

      <Comments />

      <ListedComments video={this.state.mainVideos} />

      <NextVideo videos={fliteredVideos} selectedVideo= {this.updateSelectedVideo} 
       />

      

    </main>
    </>
  );
  }
}

export default App;
