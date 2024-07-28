// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor.js";
import DisplayInfor from "./DisplayInfor.js";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Khoa DN", age: "15" },
            { id: 2, name: "NguoiVN", age: "25" },
            { id: 3, name: "Khoa", age: "30" },
        ],
    };

    handleAddNewUser = (userObj) => {
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj)
        // this.setState({
        //   listUsers: listUsersNew,
        // })
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
            // listUsers: [...this.state.listUsers, userObj],
        })
    }
    handleDeleteUSer = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone,
        })
    }
    //JSX
    render() {
        // DRY: don't repeat youself

        return (
            <>
                <br></br>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUSer={this.handleDeleteUSer}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;
