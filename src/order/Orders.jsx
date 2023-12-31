import { useState } from "react";
import Ordercover from "./Ordercover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/Usemenu";
import Foodcards from "./Foodcards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Orders = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    const [tabindex, setTabindex] = useState(0)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <div>
                <Ordercover></Ordercover>
            </div>
            <Tabs className="text-center py-12" defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList className="text-black font-semibold">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <div>
                        <div>
                        
                    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        salad.slice(0,6).map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        salad.slice(6).map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
        </SwiperSlide>
      </Swiper>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        pizza.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        soup.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        desserts.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        drinks.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Orders;