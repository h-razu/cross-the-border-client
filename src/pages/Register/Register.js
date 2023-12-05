import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUpImage from "../../assets/images/random/signUp.png"
import { authContext } from '../../Context/AuthContext/AuthProvider';
import useTitle from '../../Hook/TitleHook/TitleHooks';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';

const Register = () => {
    useTitle("Register");
    const [error, setError] = useState("");
    const { signUpWithEmail, profileUpdate } = useContext(authContext);

    //for spinner loader
    const [isSpinnerLoading, setSpinnerLoading] = useState(true);
    //set delay for 1sec to display the loader
    useEffect(() => {
        setTimeout(() => {
            setSpinnerLoading(false);
        }, 1000);
    }, [])

    const navigate = useNavigate();

    const handleSignUpSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.imageURL.value;
        const email = form.email.value;
        const pass = form.password.value;
        // console.log(name, image, email, pass);

        signUpWithEmail(email, pass)
            .then(result => {
                // console.log(result.user);
                form.reset();
                nameAndImageURLUpdate(name, image);
                navigate("/")

            }).catch(err => setError(err))
    }

    const nameAndImageURLUpdate = (name, photo) => {
        const profileInfo = {
            displayName: name,
            photoURL: photo
        };
        profileUpdate(profileInfo)
            .then()
            .catch(err => setError(err))
    };

    const renderRegisterUI = (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="max-w-lg rounded-lg">
                    <img src={signUpImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className='text-3xl font-bold mt-4 mx-auto'>Register!</h1>
                    <form onSubmit={handleSignUpSubmit} className="card-body py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Image URL</span>
                            </label>
                            <input type="text" name='imageURL' placeholder="image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                {error}
                            </label>
                        </div>
                        <div className="form-control">
                            <input type="submit" value="Register" className="btn btn-primary rounded-lg" />
                            <p className='mt-1 mb-3'>Already have an account?
                                <Link to="/login" className='text-blue-700 ml-1'>Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );

    return (
        <div>
            {
                isSpinnerLoading ? <LoadingSpinner></LoadingSpinner> : renderRegisterUI
            }
        </div>
    );
};

export default Register;