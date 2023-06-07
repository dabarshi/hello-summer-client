import Lottie from "lottie-react";
import error404 from "../../assets/404Page/error404.json";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        // lottie animation
        <div className="max-w-7xl mx-auto h-screen p-10">
            <div className="h-[500px]">
                <Lottie className="h-full" animationData={error404} loop={true} />
            </div>
            <div className="text-center mt-4">
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>

        </div>
    );
};

export default NotFoundPage;