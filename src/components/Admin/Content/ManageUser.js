import ModalCreateUser from "./ModalCreateUser";
import "./ManegeUser.scss"

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage USer
            </div>
            <div className="users-content">
                <div>
                    <button>add new user</button>
                </div>
                <div>
                    table users
                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}
export default ManageUser;