import React from 'react';
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
    const { customerName, customerImageURL, comment, serviceRating } = review;


    const ratingHandler = {
        size: 20,
        count: 5,
        isHalf: false,
        value: `${parseInt(serviceRating)}`,
        a11y: true,
        color: "black",
        activeColor: "red",
    };


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center justify-start'>
                    <div className="w-12 rounded-full">
                        <img src={customerImageURL} alt="" />
                    </div>
                    <div className='ml-1'>
                        <p className='text-xl font-semibold'>{customerName}</p>
                        <ReactStars {...ratingHandler} />
                    </div>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;