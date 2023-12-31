import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailTicket.scss";
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
import { getAllDetailClinicById } from "../../../services/userService";
import DetailDoctor from "../HomeLogin";
import _ from "lodash";
import { LANGUAGES } from "../../../utils";

class DetailTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctorId: [],
      dataDetailEvents: {},
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
      let res = await getAllDetailClinicById({
        id: id,
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
          dataDetailEvents: res.data,
          arrDoctorId: arrDoctorId,
        });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  render() {
    let { arrDoctorId, dataDetailEvents } = this.state;
    console.log("check state", this.state);
    let { language } = this.props.language;

    return (
      <>
        <HomeHeader />
        {/* <div className="detail-specialty-body">
          <div className="specialty-description">
            {dataDetailEvents && !_.isEmpty(dataDetailEvents) && (
              <>
                <div className="name">{dataDetailEvents.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataDetailEvents.descriptionHTML,
                  }}
                ></div>
              </>
            )}
          </div>

          {arrDoctorId &&
            arrDoctorId.length > 0 &&
            arrDoctorId.map((item, index) => {
              return (
                <div className="each-doctor" key={index}>
                  <div className="content-left">
                    <div className="profile-doctor">
                      <ProfileDoctor
                        doctorId={item}
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailTicket);
