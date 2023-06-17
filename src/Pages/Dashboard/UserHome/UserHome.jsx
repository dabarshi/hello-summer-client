import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Lottie from "lottie-react";
import welcome from "../../../assets/dashboard/welcome.json";



const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="mx-8">
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
                {/* Lottie imgae left side */}
                <div className="border-gray-300">
                    <Lottie className="h-full" animationData={welcome} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default UserHome;