import React, { Component } from "react";
import LogoImg from "../../assets/Logo/Logo-brainflix.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
import ButtonImg from "../../assets/Icons/Icon-upload.svg";
import "./_header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__img-box">
          {" "}
          <img className="header__img" src={LogoImg} alt="logo-img" />
        </Link>

        <form className="header__form">
          <input
            type="text"
            className="header__search"
            name="user_search"
            placeholder="Search"
          ></input>

          <div className="header__form-sub-wrapper">
            <Link className="header__button-link" to="/upload">
              <button className="header__button" type="submit">
                <img
                  className="header__button-img"
                  src={ButtonImg}
                  alt="button plus sign"
                />{" "}
                UPLOAD
              </button>
            </Link>

            <div className="header__img-box">
              <img className="header__avatar" src={Avatar} alt="mohan-img" />
            </div>
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
