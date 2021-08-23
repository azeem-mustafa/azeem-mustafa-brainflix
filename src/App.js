import React from "react";
import "./App.scss";
import videos from "./assets/Data/video-details.json";
import videoData from "./assets/Data/videos.json";
import Video from "./components/Video/Video";
import VideoDetails from "./components/Video/VideoDetails";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import ListedComments from "./components/Comments/ListedComments/ListedComments";
import NextVideo from "./components/NextVideoSection/NextVideo";

class App extends React.Component {
  state = {
    videoWithoutComments: videoData,
    selectedVideo: videos[0],
    videosWithDetails: videos,
  };

  updateSelectedVideo = (id) => {
    let updatedVideo = this.state.videosWithDetails.find(
      (video) => video.id === id
    );

    this.setState({
      selectedVideo: updatedVideo,
    });
  };

  render() {
    const fliteredVideos = this.state.videoWithoutComments.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <>
        <Header />

        <main>
          
          <Video video={this.state.selectedVideo} />

          <div className="wrapper">

            <section className="wrapper__comments">

              <VideoDetails video={this.state.selectedVideo} />

              <Comments video={this.state.selectedVideo} />

              <ListedComments video={this.state.selectedVideo} />

            </section>

            <section className="wrapper__videos">

              <NextVideo
                videos={fliteredVideos}
                selectedVideo={this.updateSelectedVideo}
              />
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default App;
