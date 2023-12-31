import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import UserRedux from "../containers/System/Admin/UserRedux";
import Header from "../containers/Header/Header";
import ManageDoctor from "../containers/System/Admin/ManageDoctor";
import ManageSchedule from "../containers/System/Doctor/ManageSchedule";
import ManageSpecialty from "../containers/System/Events/ManageEvents";
import ManageTicket from "../containers/System/Tickets/ManageTicket";
import HomePage from "../containers/HomePage/HomePage";

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />

              <Route path="/system/user-redux" component={UserRedux} />
              {/* <Route path="/system/manage-doctor" component={ManageDoctor} /> */}
              <Route path="/system/manage-events" component={ManageSpecialty} />
              <Route path="/system/manage-ticket" component={ManageTicket} />

              {/* <Route
                path="/doctor/manage-schedule"
                component={ManageSchedule}
              /> */}

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
