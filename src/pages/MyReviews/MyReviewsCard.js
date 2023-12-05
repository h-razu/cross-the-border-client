import React from 'react';
import ReactStars from "react-rating-stars-component";

const MyReviewsCard = ({ review, handleDelete }) => {
    const { serviceName, comment, serviceRating, _id } = review;


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
                <div className='ml-1'>
                    <p className='text-xl font-semibold'>{serviceName}</p>
                    <ReactStars {...ratingHandler} />
                </div>

                <p>{comment}</p>

                <div className='flex justify-between'>
                    <button className="btn btn-outline btn-primary">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;