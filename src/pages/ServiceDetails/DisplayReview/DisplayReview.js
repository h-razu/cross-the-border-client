import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewCard from '../../shared/ReviewCard/ReviewCard';

const DisplayReview = ({ service }) => {
    const { _id } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://cross-the-border-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))
    }, []);

    console.log(reviews);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>What Our Customer Say...</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default DisplayReview;