import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/TitleHook/TitleHooks';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';
import About from '../About/About';
import OfferedCountry from '../OfferedCountry/OfferedCountry';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle("Home");

    const [threeServices, setThreeServices] = useState([]);

    useEffect(() => {
        fetch("https://cross-the-border-server.vercel.app/topThreeService")
            .then(res => res.json())
            .then(data => setThreeServices(data))
    }, [])
    return (
        <div>
            <Slider></Slider>

            <section className='bg-white p-10'>
                <h2 className='text-xl text-gray-700 text-center'>THE MOST RELIABLE IMMIGRATION FIRM</h2>
                <h1 className='text-5xl text-center font-bold'>
                    OUR SERVICE AREAS
                </h1>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 my-10'>

                    {
                        threeServices.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to="/services">
                    <button className="btn btn-outline px-10 mx-auto block">See More</button>
                </Link>
            </section>

            <OfferedCountry></OfferedCountry>
            <About></About>
        </div>
    );
};

export default Home;