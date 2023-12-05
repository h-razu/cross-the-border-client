import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContext/AuthProvider';
import useTitle from '../../Hook/TitleHook/TitleHooks';
import MyReviewsCard from './MyReviewsCard';


const MyReviews = () => {
    useTitle("My Reviews");

    const [reviews, setReviews] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`https://cross-the-border-server.vercel.app/reviews/${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [user.email]);

    // console.log(reviews);


    const handleDelete = (id) => {
        const proceed = window.confirm("Are you want to delete this review?");
        if (proceed) {
            fetch(`https://cross-the-border-server.vercel.app/reviews/${id}`, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='bg-white p-10'>
            <h1 className='text-3xl font-bold text-center mb-6'>My Reviews</h1>

            {
                reviews.length === 0 ?
                    <h1 className='text-5xl font-bold text-red-700 flex items-center justify-center'>No Review To Display</h1>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            reviews.map(review => <MyReviewsCard
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></MyReviewsCard>)
                        }

                    </div>
            }

        </div >
    );
};

export default MyReviews;