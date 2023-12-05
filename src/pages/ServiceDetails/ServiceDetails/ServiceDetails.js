import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/TitleHook/TitleHooks';
import AddReview from '../AddReview/AddReview';
import Details from '../Details/Details';
import DisplayReview from '../DisplayReview/DisplayReview';

const ServiceDetails = () => {
    useTitle("Service Details");

    const service = useLoaderData();
    // console.log(service);

    return (
        <div className='bg-white p-10'>
            <div className='mb-10'>
                <Details service={service}></Details>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='mt-8'> <DisplayReview service={service}></DisplayReview></div>
                <div className='mt-16'><AddReview service={service}></AddReview></div>
            </div>

        </div>
    );
};

export default ServiceDetails;