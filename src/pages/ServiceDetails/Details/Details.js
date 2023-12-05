import React from 'react';

const Details = ({ service }) => {

    const { name, title, img, price, details } = service;

    return (
        <div>
            <h1 className='text-4xl font-bold mb-3'>{title}</h1>
            <img src={img} alt="" className='w-full rounded-xl' />
            <h2 className='text-2xl font-semibold my-3'>{name}</h2>
            <p className='text-xl mb-3'>Service fee: start from ${price}</p>
            <p className='text-justify'>{details}</p>
        </div>
    );
};

export default Details;