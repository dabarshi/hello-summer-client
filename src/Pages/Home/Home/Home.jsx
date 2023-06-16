import PopularClasses from "../PopularClasses/PopularClasses";
import SliderBanner from "../SliderBanner/SliderBanner";


const Home = () => {
    return (
        <div className="bg-gray-200">
            <SliderBanner></SliderBanner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;