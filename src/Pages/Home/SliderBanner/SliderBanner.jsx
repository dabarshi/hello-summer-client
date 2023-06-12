import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import silder1 from "../../../assets/topSlider/slide1.jpg"
import silder2 from "../../../assets/topSlider/slide2.jpg"
import silder3 from "../../../assets/topSlider/slide3.jpg"

const SliderBanner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img className="w-full" src={silder1} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p >Legend 1</p>
                    </div>
                </div>
                <div>
                    <img className="w-full" src={silder2} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p >Legend 2</p>
                    </div>
                </div>
                <div>
                    <img className="w-full" src={silder3} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p >Legend 3</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default SliderBanner;