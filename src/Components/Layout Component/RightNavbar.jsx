import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUsOn from '../FindUsOn';

const RightNavbar = () => {
    return (
        <div className='space-y-2'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
        </div>
    );
};

export default RightNavbar;