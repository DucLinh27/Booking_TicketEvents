import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailEvents.scss";
import { FormattedMessage } from "react-intl";
import HomeHeader from "../../HomePage/HomeHeader";
import { withRouter } from "react-router";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";
import {
  getAllCodeServices,
  getExtraInforDoctorById,
} from "../../../services/userService";
import ProfileDoctor from "../Doctor/ProfileDoctor";
import { getAllDetailSpecialtyById } from "../../../services/userService";
import DetailDoctor from "../HomeLogin";
import _ from "lodash";
import { LANGUAGES } from "../../../utils";
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
import Specialty from "../../HomePage/Section/Events";
import { getDetailInforDoctor } from "../../../services/userService";

class DetailEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailEvents: {},
    };
  }

  //just run 1 time
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      this.setState({
        currentDoctorId: id,
      });
      let res = await getDetailInforDoctor(id);
      console.log("res", res);
      if (res && res.errCode === 0) {
        this.setState({ detailEvents: res.data });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }
  handleOnChangeSelect = async (event) => {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let location = event.target.value;
      let res = await getAllDetailSpecialtyById({
        id: id,
        location: location,
      });

      if (res && res.errCode === 0) {
        let data = res.data;
        let arrDoctorId = [];
        if (data && !_.isEmpty(res.data)) {
          let arr = data.doctorSpecialty;
          if (arr && arr.length > 0) {
            arr.map((item) => {
              arrDoctorId.push(item.doctorId);
            });
          }
        }

        this.setState({
          dataDetailSpecialty: res.data,
          arrDoctorId: arrDoctorId,
        });
      }
    }
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    console.log("state:" + this.state);
    let { detailEvents } = this.state;
    return (
      <>
        <HomeHeader />
        {/* <div className="detail-specialty-body">
          <div className="specialty-description">
            {dataDetailSpecialty && !_.isEmpty(dataDetailSpecialty) && (
              <div
                dangerouslySetInnerHTML={{
                  __html: dataDetailSpecialty.descriptionHTML,
                }}
              ></div>
            )}  
          </div>
          <div className="search-sp-doctor">
            <select onChange={(event) => this.handleOnChangeSelect(event)}>
              {listProvince &&
                listProvince.length > 0 &&
                listProvince[0] &&
                listProvince.map((item, index) => {
                  return (
                    <option key={index} value={item.keyMap}>
                      {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
          {arrDoctorId &&
            arrDoctorId.length > 0 &&
            arrDoctorId.map((item, index) => {
              return (
                <div className="each-doctor" key={index}>
                  <div className="content-left">
                    <div className="profile-doctor">
                      <ProfileDoctor
                        partnerId={item}
                        isShowDescriptionDoctor={true}
                        isShowLinkDetail={true}
                        isShowPrice={false}
                      />
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="doctor-schedule">
                      <DoctorSchedule doctorIdFromParent={item} />
                    </div>

                    <div className="doctor-extra-infor">
                      <DoctorExtraInfor doctorIdFromParent={item} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div> */}
        <div className="home-header-banner">
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
          <div className="content-right col-10">
            <div className="content-up">
              <div
                className="banner"
                style={{
                  backgroundImage: `url(${
                    detailEvents.image ? detailEvents.image : " "
                  })`,
                }}
              ></div>
              <div className="event-booking">
                <div className="events-detail col-8">
                  <div className="event-name">{detailEvents.name}</div>
                  <div className="event-address">{detailEvents.address}</div>
                  <div className="event-timeType">{detailEvents.timeType}</div>
                </div>
                <div className="book-now col-4">
                  <div className="booking-detail">Book Now</div>
                  <div className="facebook-follow">
                    <div className="facebook col-6">SHARE TO FACEBOOK</div>
                    <div className="follow col-6">FOLLOW</div>
                  </div>
                  <div className="followers">--followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DetailEvents)
);
