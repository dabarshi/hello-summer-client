import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import silder1 from "../../../assets/topSlider/slide1.jpg"
// import silder2 from "../../../assets/topSlider/slide2.jpg"
import silder3 from "../../../assets/topSlider/slide3.jpg"
// import silder4 from "../../../assets/topSlider/slide4.jpg"
// import silder5 from "../../../assets/topSlider/slide5.jpg"
// import silder6 from "../../../assets/topSlider/slide6.jpeg"
import silder7 from "../../../assets/topSlider/slide7.jpeg"
// import silder8 from "../../../assets/topSlider/slide8.jpg"
// import silder9 from "../../../assets/topSlider/slide9.webp"
// import silder10 from "../../../assets/topSlider/slide10.jpg"
// import silder11 from "../../../assets/topSlider/slide11.jpg"
// import silder12 from "../../../assets/topSlider/slide12.png"
// import silder13 from "../../../assets/topSlider/slide13.jpg"
import silder14 from "../../../assets/topSlider/slide14.webp"
import { Link } from "react-router-dom";

const SliderBanner = () => {
    return (
        <div className="mb-10">
            <Carousel className="text-center">
                <div>
                    <img className="w-full " src={silder14} />

                    <div className="absolute top-0 bg-black w-full h-full bg-opacity-20 ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <p className="font-semibold md:text-2xl text-white uppercase my-2">A chance to provide Formative Experiences</p>
                            <Link to="/register">
                                <button className="btn-custom">Register</button>
                            </Link>
                        </div>
                    </div>



                </div>
                <div>
                    <img className="w-full " src={silder7} />
                    <div className="absolute top-0 bg-black w-full h-full bg-opacity-10 ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <p className="font-semibold md:text-2xl text-white uppercase my-2">A chance to provide Formative Experiences</p>
                            <Link to="/register">
                                <button className="btn-custom">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full " src={silder3} />
                    <div className="absolute top-0 bg-black w-full h-full bg-opacity-10 ">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <p className="font-semibold md:text-2xl text-white uppercase my-2">A chance to provide Formative Experiences</p>
                            <Link to="/register">
                                <button className="btn-custom">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default SliderBanner;