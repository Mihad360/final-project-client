import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true} interval={2000}>
                <div>
                    <img src="https://i.ibb.co/SXKsp1f/banner.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/k4jHycH/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/nsD3Hxs/06.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/3WvQ7M9/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/yQqVt0K/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/KzDL17N/05.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;