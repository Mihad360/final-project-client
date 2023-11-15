import Sectiontitle from "../components/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="px-20">
            <div className="pt-16">
                <Sectiontitle heading={"TESTIMONIALS"}
                    subheading={"---What Our Clients Say---"}>
                </Sectiontitle>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="px-44 text-center mb-20 flex flex-col items-center ">
                                <div className="flex justify-center pb-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                </div>
                                <p className="text-black">{review.details}</p>
                                <h1 className="text-3xl text-amber-500 font-bold py-3">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;