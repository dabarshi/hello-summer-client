import Lottie from "lottie-react";
import error404 from "../../assets/404Page/error404.json";

const NotFoundPage = () => {
    return (
        // lottie animation
        <div className="max-w-7xl mx-auto h-screen">
            <Lottie className="h-full" animationData={error404} loop={true} />
        </div>
    );
};

export default NotFoundPage;