import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

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

        //template + logic js
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>

                                        <div >My name's {user.name} </div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUSer(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        );
    }
}

export default DisplayInfor;
