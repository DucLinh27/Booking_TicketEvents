import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManager.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          console.log("check statee", this.state.arrUsers);
        }
      );
      console.log("check statee 2", this.state.arrUsers);
    }

    // console.log('get user form nodejjs',response)
  }

  render() {
    console.log("render", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <div className="title text-center">Manage users with linh</div>
        <div className="users-table mt-3 mx-1">
          <table>
            <tr>
              <th>Emmail</th>
              <th>FisrtName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  console.log("check map", item, index);
                  return (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                        <button className="btn-delete"><i className="fas fa-trash"></i></button>

                      </td>
                    </tr>
                  );
                })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
