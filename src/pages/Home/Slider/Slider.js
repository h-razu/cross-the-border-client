import React from 'react';
import img1 from "../../../assets/images/headerImage/slider-1.jpg";
import img2 from "../../../assets/images/headerImage/slider-2.jpg";
import img3 from "../../../assets/images/headerImage/slider-3.jpg";

const Slider = () => {
    return (
        <div className="carousel w-full max-h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt='' />
                <div className='absolute w-full h-full flex justify-center items-center '>
                    <h1 className='text-6xl font-bold text-white text-center'>
                        SKILLED & BUSINESS
                        <br />
                        IMMIGRATION
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full " alt='' />
                <div className='absolute w-full h-full flex flex-col justify-center items-center '>
                    <h1 className='text-6xl font-bold text-center'>
                        FREE CONSULTATION
                    </h1>
                    <p className='text-2xl font-semibold'>Talk to us for family visa, skilled & business migration, & visitor visa</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full " alt='' />
                <div className='absolute w-full h-full flex flex-col justify-center items-center '>
                    <h1 className='text-6xl font-bold text-white text-center'>
                        CHOOSE YOUR DESTINATION!
                    </h1>
                    <p className='text-2xl font-semibold text-white'>
                        We Provide Clear Advice For Your Migration.
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;