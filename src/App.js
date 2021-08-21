import React from 'react';
import './App.scss';
import videos from './assets/Data/video-details.json';

import Video from './components/Video/Video'
import VideoDetails from './components/Video/VideoDetails';
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments';
import ListedComments from './components/Comments/ListedComments/ListedComments';
import NextVideo from './components/NextVideoSection/NextVideo';



class App extends React.Component{
  state = {
    videos,
    selectedVideo: videos[0],
  };

  updateSelectedVideo = (id) => {
    let selectedVideo = this.state.videos.find((video) => video.id === id);

    this.setState({
        selectedVideo: selectedVideo,
    });
};

 

  render(){
  return (
    <>
    <Header />

    <main>
      
      <Video video={this.state.selectedVideo} />

      <VideoDetails video={this.state.selectedVideo} />

      <Comments />

      <ListedComments video={this.state.selectedVideo} />

      <NextVideo clickHandler= {this.updateSelectedVideo} 
      videos={this.state.videos} />

      

    </main>
    </>
  );
  }
}

export default App;
