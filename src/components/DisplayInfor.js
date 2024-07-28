import React from "react";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide(event) {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    }
    render() {
        // destructoring array/object
        const { listUsers } = this.props; // object
        //props => viết tắt properties
        return (
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'yellow', paddingTop: '50px' }}>My name's {user.name} </div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor;
