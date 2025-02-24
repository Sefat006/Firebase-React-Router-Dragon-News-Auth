import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUsOn from '../FindUsOn';
import swimming from '../../assets/swimming.png';
import cls from '../../assets/class.png';
import playground from '../../assets/playground.png';

const RightNavbar = () => {
    return (
        <div className='space-y-2'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <div className=" mt-4 space-y-2 rounded-sm p-2">
                    <h1>Q-ZONE</h1>
                    <div>
                        <img src={swimming}alt="" />
                        <img src={cls}alt="" />
                        <img src={playground}alt="" />
                    </div>
                </div>
        </div>
    );
};

export default RightNavbar;