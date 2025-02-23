import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='mt-5'>
            <h2 className='mb-2'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 space-y-2">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><BsTwitter></BsTwitter> Twitter</button>
                <button className="btn join-item justify-start"><BsInstagram></BsInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;