import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="h-screen w-full grid place-items-center"><FadeLoader /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;