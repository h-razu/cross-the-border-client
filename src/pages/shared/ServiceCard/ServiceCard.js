import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, img, details, price } = service;
    return (
        <div className="card lg:card-side bg-white shadow-xl">

            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView src={img}>
                    <figure><img src={img} alt=" " className='w-56 h-full' /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
                <p>Service Fee: <span className='font-semibold'>${price}</span> </p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-outline text-black">See Details</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;