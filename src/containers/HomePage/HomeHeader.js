import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo2 from "../../assets/select/logo2.png";
import bocongthuong from "../../assets/select/bocongthuong.png";
import feature1 from "../../assets/select/feature1.svg";
import feature2 from "../../assets/select/feature2.svg";
import home from "../../assets/select/home.png";
import theater from "../../assets/select/theater.png";
import attractions from "../../assets/select/attractions.png";
import course from "../../assets/select/course.png";
import events from "../../assets/select/events.png";
import events2 from "../../assets/select/events2.png";
import livemusic from "../../assets/select/livemusic.png";
import nighlife from "../../assets/select/nighlife.png";
import sport from "../../assets/select/sport.png";
import community from "../../assets/select/community.png";
import about from "../../assets/about/about.png";
import dispute from "../../assets/about/dispute.png";
import faq from "../../assets/about/faq.png";
import information from "../../assets/about/information.png";
import operational from "../../assets/about/operational.png";
import tems from "../../assets/about/tems.png";
import organizer from "../../assets/about/organizer.png";
import blackpink from "../../assets/blackpink.jpg";

import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router";
import Specialty from "./Section/Events.js";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  returnToLogin = () => {
    if (this.props.history) {
      this.props.history.push(`/login`);
    }
  };
  handleDetailEvents = () => {
    if (this.props.history) {
      this.props.history.push(`//detail-events/`);
    }
  };
  render() {
    let languages = this.props.language;
    return (
      <React.Fragment>
        {/* header */}
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <img
                className="header-logo"
                src={logo2}
                onClick={() => this.returnToHome()}
              ></img>
              <div className="search-ticket">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <div className="center-content">
              {/* <div className="child-content">
                <div className="search-ticket">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                </div>
              </div> */}
            </div>

            <div className="right-content">
              <a className="text-event">Create event</a>

              <div className="login">
                <a onClick={() => this.returnToLogin()}>Login</a>
              </div>
              <div className="login-sign">
                <span>|</span>
              </div>
              <div className="sign-up">
                <a>Sign up</a>
              </div>
              <div
                className={
                  languages === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  languages === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
