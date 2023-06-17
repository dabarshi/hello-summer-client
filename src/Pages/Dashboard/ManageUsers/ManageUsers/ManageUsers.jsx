import useAllUser from "../../../../hooks/useAllUser";
import UserRow from "../UserRow/UserRow";


const ManageUsers = () => {
    const [users] = useAllUser();
    console.log(users)
    return (
        <div>
            <div className="text-center font-bold text-2xl">
                <h1>Manage Users</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rule</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;