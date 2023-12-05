import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from "../../assets/images/random/login.png"
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContext/AuthProvider';
import useTitle from '../../Hook/TitleHook/TitleHooks';
import { useEffect } from 'react';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';

const Login = () => {
    useTitle("Log In");
    const [error, setError] = useState("");
    const { googleSignIn, emailPassSignIn } = useContext(authContext);

    //for spinner loader
    const [isSpinnerLoading, setSpinnerLoading] = useState(true);
    //set delay for 1sec to display the loader
    useEffect(() => {
        setTimeout(() => {
            setSpinnerLoading(false);
        }, 1000);
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        // console.log(email, pass);

        emailPassSignIn(email, pass)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(e => setError(e))

    }

    //google sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            }).catch(error => setError(error));
    }

    const renderLoginUI = (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="max-w-lg rounded-lg">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className='text-3xl font-bold mt-4 mx-auto'>Welcome Back!</h1>
                    <form onSubmit={handleLoginSubmit} className="card-body py-2">
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
                            <input type="submit" value="Log In" className="btn btn-primary rounded-lg" />
                            <p className='my-1'>Don't have an account?
                                <Link to="/register" className='text-blue-700 ml-1'>Register here</Link>
                            </p>
                        </div>
                    </form>
                    <div className="divider mx-4 my-0">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn btn-success mx-6 my-4">
                        <FaGoogle />
                        <span className='ml-1'>Continue With Google</span>
                    </button>
                </div>
            </div>
        </div >
    );
    return (
        <div>
            {
                isSpinnerLoading ? <LoadingSpinner></LoadingSpinner> : renderLoginUI
            }
        </div>
    );
};

export default Login;