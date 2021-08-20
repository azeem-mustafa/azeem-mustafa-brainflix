import React from 'react';
import './App.scss';
import videos from './assets/Data/video-details.json';
import Video from './components/Video/Video'
import VideoDetails from './components/Video/VideoDetails';
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments';


class App extends React.Component{
  state = {
    videos,
    selectedVideo: videos[0],
  };

 

  render(){
  return (
    <>
    <Header />

    <main>
      
      <Video video={this.state.selectedVideo} />

      <VideoDetails video={this.state.selectedVideo} />

      <Comments />

      

      

    </main>
    </>
  );
  }
}

export default App;
