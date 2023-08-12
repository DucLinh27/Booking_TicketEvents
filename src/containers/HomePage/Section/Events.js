import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getALlSpecialty } from "../../../services/userService";
import Slider from "react-slick";
import "./Events.scss";
import { withRouter } from "react-router";
import logo2 from "../../../assets/select/logo2.png";
import bocongthuong from "../../../assets/select/bocongthuong.png";
import feature1 from "../../../assets/select/feature1.svg";
import feature2 from "../../../assets/select/feature2.svg";
import home from "../../../assets/select/home.png";
import theater from "../../../assets/select/theater.png";
import attractions from "../../../assets/select/attractions.png";
import course from "../../../assets/select/course.png";
import events from "../../../assets/select/events.png";
import events2 from "../../../assets/select/events2.png";
import livemusic from "../../../assets/select/livemusic.png";
import nighlife from "../../../assets/select/nighlife.png";
import sport from "../../../assets/select/sport.png";
import community from "../../../assets/select/community.png";
import about from "../../../assets/about/about.png";
import dispute from "../../../assets/about/dispute.png";
import faq from "../../../assets/about/faq.png";
import information from "../../../assets/about/information.png";
import operational from "../../../assets/about/operational.png";
import tems from "../../../assets/about/tems.png";
import organizer from "../../../assets/about/organizer.png";
import blackpink from "../../../assets/blackpink.jpg";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSpecialty: [],
      arrDoctors: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorsRedux,
      });
    }
  }
  async componentDidMount() {
    let res = await getALlSpecialty();
    console.log(res);
    if (res && res.errCode === 0) {
      this.setState({ dataSpecialty: res.data ? res.data : [] });
    }
  }
  handleDetailSpecialty = (item) => {
    if (this.props.history) {
      this.props.history.push(`/manage-events/${item.id}`);
    }
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    let { dataSpecialty } = this.state;

    return (
      <div className="section-share">
        <div className="content-left col-2">
          <div className="menu-container">
            <div className="text-logo" onClick={() => this.returnToHome()}>
              <img
                className="header-logo"
                src={home}
                // onClick={() => this.returnToHome()}
              ></img>
              <span>Home</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={livemusic}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Live music</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={theater}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Theater - Art culture</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={nighlife}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Nightlife</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={community}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Community</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={course}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Course</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={attractions}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Attractions</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={sport}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Sport</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={events}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Events at Ho Chi Minh</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={events2}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Events at Ha Noi</span>
            </div>
          </div>
          <div className="about-container">
            <div className="text-logo">
              <img
                className="header-logo"
                src={about}
                onClick={() => this.returnToHome()}
              ></img>
              <span>About us</span>
            </div>
            <div className="text-logo" s>
              <img
                className="header-logo"
                src={organizer}
                onClick={() => this.returnToHome()}
              ></img>
              <span>For Organizer</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={faq}
                onClick={() => this.returnToHome()}
              ></img>
              <span>FAQ</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={tems}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Term & conditions</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={operational}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Operational regulations</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={information}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Information privacy policy</span>
            </div>
            <div className="text-logo">
              <img
                className="header-logo"
                src={dispute}
                onClick={() => this.returnToHome()}
              ></img>
              <span>Dispute settlement policy</span>
            </div>
          </div>
          <div className="footer-container">
            <div>
              <img
                className="bocongthuong"
                src={bocongthuong}
                onClick={() => this.returnToHome()}
              ></img>
            </div>
            <div>
              <span>Ticketbox Co., Ltd</span>
            </div>
            <div>
              <span>
                Legal representative: Tran Ngoc Thai Son Address: 3rd floor,
                Tower A, Viettel Building, 285 Cach Mang Thang Tam, Ward 12,
                District 10, City. Ho Chi Minh
              </span>
            </div>
            <div>
              <span>Tel: 1900.6408 - Hotline: support@ticketbox.vn</span>
            </div>
            <div>
              <span>
                Business registration certificate number: 0313605444, first
                issued on January 7, 2016 by the Department of Planning and
                Investment of Ho Chi Minh City
              </span>
            </div>
            <div>
              <span>icon</span>
            </div>
          </div>
        </div>
        <div className="section-container col-10">
          <div className="section-body">
            <Slider {...this.props.settings}>
              {dataSpecialty &&
                dataSpecialty.length > 0 &&
                dataSpecialty.map((item, index) => {
                  return (
                    <div
                      className="section-customize specialty-child"
                      key={index}
                      onClick={() => this.handleDetailSpecialty(item)}
                    >
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="featured-events">
            <div className="feature1">
              <img
                className="header-logo"
                src={feature1}
                onClick={() => this.returnToHome()}
              ></img>
            </div>
            <div className="span-s">
              <span>Featured events</span>
            </div>
            <div>
              <img
                className="header-logo"
                src={feature2}
                onClick={() => this.returnToHome()}
              ></img>
            </div>
          </div>
          <div className="duonglai"></div>
          <div className="content-down row">
            <div className="section-body2 row">
              {dataSpecialty &&
                dataSpecialty.length > 0 &&
                dataSpecialty.map((item, index) => {
                  return (
                    <div
                      className="section-customize specialty-child"
                      key={index}
                      onClick={() => this.handleDetailSpecialty(item)}
                    >
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                      <div className="clinic-name">{item.name}</div>
                    </div>
                  );
                })}
            </div>
            <div className="option-child">
              {dataSpecialty &&
                dataSpecialty.length > 0 &&
                dataSpecialty.map((item, index) => {
                  return (
                    <>
                      <div
                        className="text-child"
                        key={index}
                        onClick={() => this.handleDetailSpecialty(item)}
                      ></div>
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      ></div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    topDoctorsRedux: state.admin.topDoctors,

    //inject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
