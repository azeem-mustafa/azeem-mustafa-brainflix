import React from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../Utils/API";
import Video from "../Video/Video";
import VideoDetails from "../Video/VideoDetails";
import Comments from "../Comments/Comments";
import ListedComments from "../Comments/ListedComments/ListedComments";
import NextVideo from "../NextVideoSection/NextVideo";
import "./_home.scss";

class Home extends React.Component {
  state = {
    selectedVideo: null,
    videoWithDetails: [],
  };

  getSelectedVideo = (videoId) => {
    axios
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {

        this.setState({
          selectedVideo: response.data,
        });
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=105f6357-1dac-4475-9750-00701622824d`
      )
      .then((response) => {

        this.setState({
          videoWithDetails: response.data,
        });

        const videoId = this.props.match.params.videoId || response.data[0].id;

        this.getSelectedVideo(videoId);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.getSelectedVideo(this.props.match.params.videoId);
    }
  }

  render() {
    if (this.state.selectedVideo === null) {
      return <h2>Loading...</h2>;
    }

    const fliteredVideos = this.state.videoWithDetails.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <main>
        <Video video={this.state.selectedVideo} />

        <div className="wrapper">
          <section className="wrapper__comments">
            <VideoDetails video={this.state.selectedVideo} />

            <Comments video={this.state.selectedVideo} />

            <ListedComments video={this.state.selectedVideo} />
          </section>

          <section className="wrapper__videos">
            {this.state.selectedVideo && (
              <NextVideo
                videos={fliteredVideos}
                selectedVideo={this.getSelectedVideo}
              />
            )}
          </section>
        </div>
      </main>
    );
  }
}

export default Home;
