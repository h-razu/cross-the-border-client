import React from 'react';
import logo from "../../../assets/images/logo/logo.png"
import { FaFacebookSquare, FaYoutube, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-white text-black">
            <div>
                <img src={logo} alt="" className='w-6/12 ' />
                <p className="font-semibold text-gray-400">
                    Providing reliable immigration and visa consultation service since 2020
                </p>
                <p className='text-gray-400'>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a target='_blank' rel='noreferrer' style={{ color: "#4267B2" }} href='https://www.facebook.com/' >
                        <FaFacebookSquare className='text-3xl'></FaFacebookSquare>
                    </a>
                    <a target='_blank' rel='noreferrer' style={{ color: "#FF0000" }} href='https://www.youtube.com/'>
                        <FaYoutube className='text-3xl'></FaYoutube>
                    </a>
                    <a target='_blank' rel='noreferrer' style={{ color: "#1DA1F2" }} href='https://twitter.com/i/flow/login'>
                        <FaTwitter className='text-3xl'></FaTwitter>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;