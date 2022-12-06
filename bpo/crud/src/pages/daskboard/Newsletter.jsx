import React from "react";

const Newsletter =()=>{
    return(
        <div className="bg-black w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want Tips and Guide ?</h1>
                    <p>Signup Our Newsletter And stay Up to Date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <input type="email" placeholder="Enter the Email Id" className="p-3 flex w-full rounded-md text-black"/>
                    <button className="bg-[#87CEEB] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 text-black">Notify Me</button>
                    </div>
                    <p>We care About The Protection of your Data,Read Our <span className="text-[#87CEEB]">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;