import ModalCreateUser from "./ModalCreateUser";
import "./ManegeUser.scss"
import { BsPlusSquareFill } from "react-icons/bs";
import { useState } from "react";
import TableUser from "./TableUser";
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
                    <TableUser />
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