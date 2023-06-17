

const UserRow = ({ user }) => {
    const {name, img, email, rule} = user;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{rule}</td>
            <th>
                <button className="btn btn-xs text-white bg-[#005BA2] hover:bg-[#07416d]">Make Instructor</button>
            </th>
            <th>
                <button className="btn btn-xs text-white bg-[#005BA2] hover:bg-[#07416d]">Make Admin</button>
            </th>
        </tr>
    );
};

export default UserRow;