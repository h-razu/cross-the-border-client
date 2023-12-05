import React from 'react';
import usa from "../../../assets/images/offeredCountry/usa.jpg"
import uk from "../../../assets/images/offeredCountry/uk.jpg"
import germany from "../../../assets/images/offeredCountry/germany.jpg"
import malaysia from "../../../assets/images/offeredCountry/malaysia.jpg"
import france from "../../../assets/images/offeredCountry/france.jpg"
import canada from "../../../assets/images/offeredCountry/canada.jpg"

const OfferedCountry = () => {
    return (
        <div className='p-10 bg-white'>
            <h2 className='text-xl text-gray-700 text-center'>COUNTRIES WE OFFER SUPPORT</h2>
            <h1 className='text-5xl text-center font-bold mb-6'>
                Immigration & Visa Services
                <br />
                Following Countries
            </h1>

            <div className='grid justify-items-center grid-cols-1 items-center gap-4 md:grid-cols-2 xl:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={usa} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">USA</h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={uk} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">UK</h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={canada} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">Canada</h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={germany} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">Germany</h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={france} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">France</h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full transition ease-in-out delay-100 hover:-translate-y-1">
                    <figure><img src={malaysia} alt=" " /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold">Malaysia</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferedCountry;