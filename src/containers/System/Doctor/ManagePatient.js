import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagePatient.scss";
import { FormattedMessage } from "react-intl";
import DatePicker from "../../../components/Input/DatePicker.js";
import { getAllPatientForDoctor } from "../../../services/userService";
import moment from "moment";

class ManagePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).startOf("day").valueOf(),
      dataPatient: {},
    };
  }

  //just run 1 time
  async componentDidMount() {
    let { user } = this.props;
    let { currentDate } = this.state;
    let formatedDate = new Date(currentDate).getTime();
    this.getDataPatient(user, formatedDate);
  }
  getDataPatient = async (user, formatedDate) => {
    let res = await getAllPatientForDoctor({
      doctorId: user.id,
      date: formatedDate,
    });
    if (res && res.errCode === 0) {
      this.setState({
        dataPatient: res.data,
      });
    }
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {}
  handleOnchangeDatepicker = (date) => {
    this.setState({ currentDate: date[0] }, () => {
      let { user } = this.props;
      let { currentDate } = this.state;
      let formatedDate = new Date(currentDate).getTime();
      this.getDataPatient(formatedDate, user);
    });
  };
  handleBtnConfirm = () => {};
  handleBtnRemedy = () => {};
  render() {
    console.log("check ", this.state);
    let { dataPatient } = this.state;
    return (
      <div className="manage-patient-container">
        <div className="m-p-title">Quan ly Benh Nhan Kham Benh</div>
        <div className="manage-patient-body row">
          <div className="col-4 form-group">
            <label>Chon ngay kham</label>
            <DatePicker
              onChange={this.handleOnchangeDatepicker}
              className="form-control"
              value={this.state.currentDate}
            />
          </div>
          <div className="col-12 table-manage-patient">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>Time</th>
                  <th>FullName</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
                {dataPatient && dataPatient.length > 0 ? (
                  dataPatient.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.timeTypeDataPatient.valueVi}</td>
                        <td>{item.patientData.firstName}</td>
                        <td>{item.patientData.address}</td>
                        <td>{item.patientData.genderData.valueVi}</td>
                        <td>
                          <button
                            className="mp-btn-confirm"
                            onClick={() => this.handleBtnConfirm()}
                          >
                            Xac Nhan
                          </button>
                          <button
                            className="mp-btn-remedy"
                            onClick={() => this.handleBtnRemedy()}
                          >
                            Gui hoa don
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>NO DATA</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    user: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
