
import useAllUser from "../../../../hooks/useAllUser";



const ManageUsers = () => {
    const [users, refetch] = useAllUser();



    const makeAdmin = (_id) => {
        fetch(`http://localhost:5000/users/admin/${_id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    
                }
            })
    }
    const makeInstructor = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/instructor/${_id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                }
            })
    }
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
                            <th>Role</th>
                            <th>Instructor</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            users.map(user => <tr key={user._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.role}</td>
                                <th>
                                    <button  onClick={() => makeInstructor(user._id)} className="btn btn-xs text-white bg-[#005BA2] hover:bg-[#07416d]">Make Instructor</button>
                                </th>
                                <th>
                                    <button onClick={() => makeAdmin(user._id)} className="btn btn-xs text-white bg-[#005BA2] hover:bg-[#07416d]">Make Admin</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;