import "./_uploadForm.scss";
import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../Utils/API";
import { createRef } from "react";

const formRef = createRef();

class UploadForm extends Component {
  state = {
    user_title: "",
    user_description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formTitle = formRef.current.user_title.value;
    const formDescription = formRef.current.user_description.value;

    if (this.isFormValid()) {
      axios
        .post(`${API_URL}videos`, {
          title: formTitle,
          image: "http://localhost:8080/images/image2.jpeg",
          channel: "New Channel",
          description: formDescription,
          views: "0",
          likes: "0",
          duration: "4:01",
          video: "https://project-2-api.herokuapp.com/stream",
          timestamp: Date.now(),
          comments: [],
        })
        .then((response) => {
          this.props.history.push("/");
        });
    } else {
      alert("Failed to upload");
    }
  };

  isFormValid = () => {
    if (!this.state.user_title || !this.state.user_description) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <form ref={formRef} className="form">
        <label className="form__title">
          <h5 className="form__label">TITLE YOUR VIDEO</h5>
        </label>
        <div className="form__flex-block">
          <input
            className="form__title-box"
            value={this.state.user_title}
            onChange={this.handleChange}
            name="user_title"
            placeholder="Add a title to your video"
          ></input>
        </div>

        <label className="form__description"></label>
        <h5 className="form__label">ADD A VIDEO DESCRIPTION</h5>
        <div className="form__flex-block">
          <textarea
            className="form__description-box"
            value={this.state.user_description}
            name="user_description"
            onChange={this.handleChange}
            placeholder="Add a description of your video"
          ></textarea>
        </div>

        <hr className="form__divider divider" />
        <div className="form__button-flex">
          <button
            onClick={this.handleSubmit}
            className="form__button-publish"
            type="button"
          >
            PUBLISH
          </button>

          <button className="form__button-cancel" type="submit">
            CANCEL
          </button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
