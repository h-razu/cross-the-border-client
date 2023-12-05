import React, { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../Hook/TitleHook/TitleHooks';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import ServiceCard from '../shared/ServiceCard/ServiceCard';

const Services = () => {
    useTitle("Our Services");

    const [isLoadingSpinner, setLoadSpinner] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://cross-the-border-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoadSpinner(false);
            })
    }, [])

    // console.log(services);

    const renderServices = (
        <div className='p-10 bg-white'>
            <h2 className='text-xl text-gray-700 text-center'>HOW WE HELP OUR CLIENTS</h2>
            <h1 className='text-5xl text-center font-bold'>
                Level With Great Visa Serving Policies
            </h1>
            <p className='text-xl text-gray-700 text-center w-2/3 mx-auto'>
                We provide a team of professionals who maintain excellence in everything they do, are service oriented when dealing with their customers, and set high standards for themselves.
            </p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 my-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );

    return (
        <div>
            {
                isLoadingSpinner ? <LoadingSpinner></LoadingSpinner> : renderServices
            }
        </div>
    );
};

export default Services;