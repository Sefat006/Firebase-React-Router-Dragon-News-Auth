import React from 'react';
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { author, title, rating, total_view, image_url, details } = news;
    console.log(news)

    return (
        <div className="card bg-white shadow-lg rounded-lg p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">{author.published_date.split(" ")[0]}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>

            {/* News Title */}
            <h2 className="text-lg font-bold mb-2">{title}</h2>

            {/* Thumbnail Image */}
            <img src={image_url} alt="News" className="w-full rounded-lg mb-3" />

            {/* News Details */}
            <p className="text-gray-700 text-sm mb-4">
                {news.details.slice(0, 150)}...{" "}
                <Link to={`/news/${news_id}`} className="text-primary">Read More</Link>
            </p>



            {/* Footer Section */}
            <div className="flex justify-between items-center mt-3 text-gray-600">
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                        i < Math.floor(rating.number) ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
                    ))}
                    <span className="text-black font-semibold ml-1">{rating.number}</span>
                </div>

                {/* Total Views */}
                <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
