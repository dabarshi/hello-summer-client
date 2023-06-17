import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const StudentSelectedClasses = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="flex justify-center items-center gap-10 bg-indigo-600 text-white p-10">
                <figure>
                    <img className="w-20 rounded" src={user.photoURL} alt="" />
                </figure>
                <div>
                    <h3 className="font-semibold text-lg"><span className="font-light">Name : </span>{user.displayName}</h3>
                    <p><span className="font-light">Email : </span>{user.email}</p>
                </div>
            </div>
            <div>
                
            </div>

        </div>
    );
};

export default StudentSelectedClasses;