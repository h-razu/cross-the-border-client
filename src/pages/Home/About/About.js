import React from 'react';
import about from "../../../assets/images/random/about.jpg";

const About = () => {
    return (
        <div className='p-10 bg-white'>
            <h2 className='text-xl text-gray-700 text-center'>WHO WE ARE</h2>
            <h1 className='text-6xl text-center font-bold mb-6'>
                About Us
            </h1>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${about})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Welcome to
                            <br />
                            Cross The Border
                        </h1>
                        <div className="mb-5">
                            <h3 className='text-xl font-semibold'>OUR VISION</h3>
                            <p>
                                We being the leading immigration and
                                student counselors, endeavor to ensure
                                a bright future by opening doors of
                                opportunities to our clients.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className='text-xl font-semibold'>OUR MISSION</h3>
                            <p>
                                We seek to be the trustworthy leaders
                                in order to deliver brilliance to our kin
                                and to society all in all, to transform their
                                fantasies into realities.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className='text-xl font-semibold'>OUR GOAL</h3>
                            <p>
                                Since 2020, we are striving to provide
                                excellent services to our clients in order to
                                make their immigration or study abroad
                                visa process smooth and easy going.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;