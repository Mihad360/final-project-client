import { Helmet } from "react-helmet-async";
import Cover from "../cover/Cover";
import Salads from "../menuroutes/Salads";
import Deserts from "../menuroutes/Deserts";
import Pizzas from "../menuroutes/Pizzas";
import Soups from "../menuroutes/Soups";
import Desert from "../menuroutes/Desert";
import Pizza from "../menuroutes/Pizza";
import Salad from "../menuroutes/Salad";
import Soup from "../menuroutes/Soup";
import Offer from "../menuroutes/Offer";

const Menu = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>
                        BISTRO MENU
                    </title>
                </Helmet>
                <div>
                    <Cover></Cover>
                    <Offer></Offer>
                    <Deserts></Deserts>
                    <Desert></Desert>
                    <Pizzas></Pizzas>
                    <Pizza></Pizza>
                    <Salads></Salads>
                    <Salad></Salad>
                    <Soups></Soups>
                    <Soup></Soup>
                </div>
            </div>
        </div>
    );
};

export default Menu;