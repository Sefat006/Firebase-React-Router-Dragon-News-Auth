import React from 'react';
import Header from '../Components/Header';
import RightNavbar from '../Components/Layout Component/RightNavbar';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news); 

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className='col-span-3'>

                </section>
                <aside className='col-span-9'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;