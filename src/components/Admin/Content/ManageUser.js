import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage USer
            </div>
            <div className="users-content">
                <button>add new user</button>
            </div>
            <div>
                table users
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;