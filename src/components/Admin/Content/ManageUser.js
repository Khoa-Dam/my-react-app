import ModalCreateUser from "./ModalCreateUser";
import "./ManegeUser.scss"
import { BsPlusSquareFill } from "react-icons/bs";
import TableUser from "./TableUser";

import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {


    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setdataUpdate] = useState({});
    const [listUsers, setlistUsers] = useState([])


    useEffect(() => {
        fectchListUsers();
    }, []);
    const fectchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setdataUpdate(user);
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
                    <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}

                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fectchListUsers={fectchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                />
            </div>

        </div>
    )
}
export default ManageUser;