import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }


    render() {
        return (
            <div className="user-redux" >
                <div className='title'>
                    UserRedux
                </div>
                <div className='user-reduxbody'>
                    <div>Add new user</div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
