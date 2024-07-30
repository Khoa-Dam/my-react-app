import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful
// class DisplayInfor extends React.Component {
//     render() {
//         console.log(">>>call me render");
//         // destructoring array/object
//         const { listUsers } = this.props; // object
//         //props => viết tắt properties

//         //template + logic js
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>

//                                         <div >My name's {user.name} </div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUSer(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props; // object
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log(">>call me render");
    useEffect(
        () => {
            // setTimeout(() => {
            //     document.title = "Hello World!";
            // }, 3000)
            if (listUsers.length === 0) {
                alert("You deleted all the user");
            }
            console.log(">>> cal me useEffect");
        }, [listUsers]
    );

    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>

                                    <div >My name's {user.name} </div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUSer(user.id)}>Delete</button>
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

export default DisplayInfor;
