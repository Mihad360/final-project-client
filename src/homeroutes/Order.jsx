import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Order = () => {
    return (
        <div className='px-20 pb-12'>
            <h1 className='text-amber-500 text-lg font-semibold text-center py-3'>---From 11:00am to 10:00pm---</h1>
            <p className='px-[500px] my-2'><hr /></p>
            <p className='text-2xl font-bold text-black text-center'>ORDER ONLINE</p>
            <p className='px-[500px] my-2 pb-12'><hr /></p>
            <div className='pb-24'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/zJ0NYNH/slide1.jpg" alt="" />
                        <h1 className='uppercase text-3xl font-bold text-black text-center pr-20 -mt-14'>Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/cbPqn6k/slide2.jpg" alt="" />
                        <h1 className='uppercase text-3xl font-bold text-black text-center pr-20 -mt-14'>pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/2nzncWg/slide3.jpg" alt="" />
                        <h1 className='uppercase text-3xl font-bold text-black text-center pr-20 -mt-14'>Soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/swtFvLw/slide4.jpg" alt="" />
                        <h1 className='uppercase text-3xl font-bold text-black text-center pr-20 -mt-14'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/zJ0NYNH/slide1.jpg" alt="" />
                        <h1 className='uppercase text-3xl font-bold text-black text-center pr-20 -mt-14'>Salads</h1>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='image p-32'>
                <div className='bg-white text-center text-black md:p-10 lg:p-20'>
                    <h1 className='text-3xl uppercase font-bold pb-3'>Bistro Boss</h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Order;