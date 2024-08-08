import ModalCreateUser from "./ModalCreateUser";
import "./ManegeUser.scss"
import { BsPlusSquareFill } from "react-icons/bs";
import TableUser from "./TableUser";

import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {


    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setlistUsers] = useState([])


    useEffect(() => {
        fectchListUsers();
    }, []);
    const fectchListUsers = async () => {
        let res = await getAllUsers();
        console.log(res);
        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }


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
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fectchListUsers={fectchListUsers}
                />
            </div>

        </div>
    )
}
export default ManageUser;