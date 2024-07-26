// class component
// function component

import React from "react";
import UserInfor from "./UserInfor.js";
import DisplayInfor from "./DisplayInfor.js";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Khoa DN", age: "20" },
      { id: 2, name: "NguoiVN", age: "25" },
      { id: 3, name: "Khoa", age: "30" },
    ],
  };
  //JSX
  render() {
    // DRY: don't repeat youself
    return (
      <div>
        <UserInfor />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
