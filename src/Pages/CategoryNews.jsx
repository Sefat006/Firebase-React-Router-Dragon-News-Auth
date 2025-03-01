import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const { data:news } = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <div className='space-y-2'>
                {news.map( singleNews => <NewsCard key={singleNews._id} news={singleNews}>{singleNews.title}</NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;