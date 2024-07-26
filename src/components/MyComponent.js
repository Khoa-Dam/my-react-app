// class component
// function component

import React from 'react';
import UserInfor from "./UserInfor.js"
class MyComponent extends React.Component {
  //JSX
  render(){
    return (
      <div>
        <UserInfor/>
      </div>
    );
  }
}

export default MyComponent;