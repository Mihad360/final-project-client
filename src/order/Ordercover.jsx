import { Parallax } from "react-parallax";

const Ordercover = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={'https://i.ibb.co/p30G0LR/banner2.jpg'}
                bgImageAlt="the dog"
                strength={-100}
            >
               <div className="hero min-h-screen">
                <div className="hero"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-2xl  bg-gradient-to-r from-[#15151575] to-[#151515B3] px-40 py-20">
                        <h1 className="mb-5 text-5xl font-bold">OUR SHOP</h1>
                        <p className="mb-5 ">Would you like to try a dish?</p>
                    </div>
                </div>
            </div>
            </Parallax>
            
        </div>
    );
};

export default Ordercover;