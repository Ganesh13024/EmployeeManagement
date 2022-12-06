import React from "react";
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return(
        <div className="max-w-full mx-auto bg-black py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#87CEEB]">VEGETA</h1>
            <p className="py-4">Find the talent needed to get your business growing.</p>
            <div className="flex justify-between md:w-[75%] my-6 ">
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
            <div>
                <h6 className="font-bold text-gray-600">Categories</h6>
                <ul>
                    <li className="py-2 text-sm">Graphics & Design</li>
                    <li className="py-2 text-sm">Digital Marketing</li>
                    <li className="py-2 text-sm">Video & Animation</li>
                    <li className="py-2 text-sm">Music & Audio</li>
                    <li className="py-2 text-sm">Programming & Tech</li>
                    <li className="py-2 text-sm">Business</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-600">Support</h6>
                <ul>
                    <li className="py-2 text-sm">Help & Support</li>
                    <li className="py-2 text-sm">Trust & Safety</li>
                    <li className="py-2 text-sm">Selling on Vegeta</li>
                    <li className="py-2 text-sm">Buying on Vegeta</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-600">About</h6>
                <ul>
                    <li className="py-2 text-sm">Careers</li>
                    <li className="py-2 text-sm">Press & News</li>
                    <li className="py-2 text-sm">Partnerships</li>
                    <li className="py-2 text-sm">Privacy Policy</li>
                    <li className="py-2 text-sm">Terms of Service</li>
                    <li className="py-2 text-sm">Intellectual Property Claims</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-600">Community</h6>
                <ul>
                    <li className="py-2 text-sm">Events</li>
                    <li className="py-2 text-sm">Blog</li>
                    <li className="py-2 text-sm">Forum</li>
                    <li className="py-2 text-sm">Community Standards</li>
                    <li className="py-2 text-sm">Podcast</li>
                    <li className="py-2 text-sm">Affiliates</li>
                    <li className="py-2 text-sm">Invite a Friend</li>
                    <li className="py-2 text-sm">Become a Seller</li>
                </ul>
            </div>
        </div>
        </div>

    )
}

export default Footer;