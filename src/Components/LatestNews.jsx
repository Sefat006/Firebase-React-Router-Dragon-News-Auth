import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { to } from './../../node_modules/moment/src/lib/moment/to';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-gray-200'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest News</p>
            <Marquee speed={200} className='space-x-10'>
                <Link to="/news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aliquam corrupti nemo, est nisi assumenda earum tempora molestiae minus repellendus.
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aliquam corrupti nemo, est nisi assumenda earum tempora molestiae minus repellendus.
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aliquam corrupti nemo, est nisi assumenda earum tempora molestiae minus repellendus.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;