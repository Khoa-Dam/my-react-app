import ModalCreateUser from "./ModalCreateUser";
import "./ManegeUser.scss"
import { BsPlusSquareFill } from "react-icons/bs";
import { useState } from "react";
const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><BsPlusSquareFill /> Add new user</button>
                </div>
                <div className="table-users-container">
                    table users
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>

        </div>
    )
}
export default ManageUser;