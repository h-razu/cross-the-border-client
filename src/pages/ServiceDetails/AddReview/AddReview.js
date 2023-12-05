import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext/AuthProvider';

const AddReview = ({ service }) => {
    const { _id, name } = service;

    const { user } = useContext(authContext);

    const [rating, setRating] = useState(0);
    const [reviewAddSuccess, setReviewAddSuccess] = useState(false);

    //from react-rating-stars-component
    const ratingHandler = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 0,
        a11y: true,
        color: "black",
        activeColor: "red",
        onChange: (newValue) => {
            setRating(newValue);
        }
    };

    const handleReviewAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;

        const review = {
            serviceId: _id,
            serviceName: name,
            customerName: user?.displayName,
            email: user?.email,
            customerImageURL: user?.photoURL,
            serviceRating: rating,
            comment
        };

        fetch("https://cross-the-border-server.vercel.app/reviews", {

            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setReviewAddSuccess(true);
                    form.reset();
                    setTimeout(() => {
                        setReviewAddSuccess(false);
                    }, 2000);
                }
            })
            .catch(e => console.log(e));

    }

    // console.log(rating);
    return (
        <div>
            <div className="card flex-shrink-0 w-full ml-auto max-w-md shadow-2xl bg-base-100">
                <h1 className='text-3xl font-bold mt-4 mx-auto'>Leave a review!</h1>
                <form onSubmit={handleReviewAdd} className="card-body py-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" defaultValue={name} name='serviceName' className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control mb-0">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <ReactStars {...ratingHandler} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customer Comment</span>
                        </label>
                        <textarea className="textarea textarea-success" name='comment' placeholder="Comments" required></textarea>
                    </div>
                    <div className="form-control my-2">
                        {
                            user?.uid ?
                                <input type="submit" value="Add Review" className="btn btn-primary rounded-lg" />
                                :
                                <Link to="/login">
                                    <div className="tooltip" data-tip="Please Login">
                                        <input type="submit" value="Please Login to Add Review" className="btn btn-primary rounded-lg " />
                                    </div>
                                </Link>
                        }
                    </div>
                </form>
            </div>
            {
                reviewAddSuccess && <div className="toast">
                    <div className="alert alert-info">
                        <div>
                            <span>Review add successful.</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddReview;