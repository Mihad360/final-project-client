import { useState } from "react";
import Ordercover from "./Ordercover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/Usemenu";
import Foodcards from "./Foodcards";

const Orders = () => {

    const [tabindex, setTabindex] = useState(0)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
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
                    <div className="flex justify-center px-20 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        salad.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
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
                        offered.map(item => <Foodcards key={item._id} item={item}></Foodcards>)
                    }
                    </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Orders;