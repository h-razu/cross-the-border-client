import React from 'react';
import useTitle from '../../Hook/TitleHook/TitleHooks';
import image from "../../assets/images/random/service add.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    useTitle("Add Service")

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const title = form.serviceTitle.value;
        const img = form.serviceImage.value;
        const price = form.servicePrice.value;
        const details = form.details.value;

        console.log(name, title, img, price, details);

        const service = {
            name, title, img, price, details
        };

        fetch("https://cross-the-border-server.vercel.app/services", {

            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New Service Add Successful !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    form.reset();
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="max-w-lg rounded-lg">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className='text-3xl font-bold mt-4 mx-auto'>Add New Service!</h1>
                    <form onSubmit={handleAddService} className="card-body py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name='serviceTitle' placeholder="Service Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image URL</span>
                            </label>
                            <input type="text" name='serviceImage' placeholder="Service Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price ($)</span>
                            </label>
                            <input type="text" name='servicePrice' placeholder="Service Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Details</span>
                            </label>
                            <textarea className="textarea textarea-success" name='details' placeholder="Service Details" required></textarea>
                        </div>
                        <div className="form-control my-4">
                            <input type="submit" value="Add Service" className="btn btn-primary rounded-lg" />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div >
    );
};

export default AddService;