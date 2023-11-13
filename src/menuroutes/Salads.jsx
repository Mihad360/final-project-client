import { Parallax } from 'react-parallax';

const Salads = () => {
    return (
        <div>
            <div>
            <Parallax
                blur={{ min: -20, max: 25 }}
                bgImage={'https://i.ibb.co/Wf575Dp/salad-bg.jpg'}
                bgImageAlt="the dog"
                strength={-100}
            >
               <div className="hero min-h-screen">
                <div className="hero"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-2xl  bg-gradient-to-r from-[#15151575] to-[#151515B3] px-40 py-20">
                        <h1 className="mb-5 text-5xl font-bold">SALADS</h1>
                        <p className="mb-5 ">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            </Parallax>
            
        </div>
        </div>
    );
};

export default Salads;