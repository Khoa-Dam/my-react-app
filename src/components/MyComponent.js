// class component
// function component

import React from 'react';
import UserInfor from "./UserInfor.js"
import DisplayInfor from './DisplayInfor.js';
class MyComponent extends React.Component {
  //JSX
  render(){
    const myInfor = ['ab', 'c', 'c'];
    return (
      <div>
        <UserInfor/>
        <br></br>
        <DisplayInfor name="Khoa DN" age ="20"/>
        <hr></hr>
        <DisplayInfor name="NguoiVN" age ={25} myInfor = {myInfor}/>
      </div>
    );
  }
}

export default MyComponent;