import React, { useEffect, useState } from 'react';
import Profileicon from "../assets/Profile.jpg";
import TuwaiqIcon from "../assets/Tuwiaq.jpg";
import { MdOutlineCalendarMonth, MdDelete } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { CiExport, CiBookmark } from "react-icons/ci";
import { IoStatsChartSharp } from "react-icons/io5";
import axios from 'axios';
import LikedTweets from './LikedTweets ';
function CenterPersonal() {
    const [tweets, setTweets] = useState([]);
    const [likedTweets, setLikedTweets] = useState([]);
    const [showLikedTweets, setShowLikedTweets] = useState(false); 

    useEffect(() => {
        axios.get('https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp')
            .then(response => {
                setTweets(response.data);
            })
            .catch(error => {
                console.error("Error fetching tweets:", error);
            });
    }, []);

   

    const handleLikeTweet = (id) => {
        if (likedTweets.includes(id)) {
            setLikedTweets(likedTweets.filter(tweetId => tweetId !== id)); 
        } else {
            setLikedTweets([...likedTweets, id]);
        }
    };

    return (
        <div className='border-[2px] border-[#17191b] rounded-none bg-black w-[85%]'>
            <div className='border-[1px] border-[#17191b] py-2 mr-16 w-full'>
                <span className='flex justify-end px-2 hover:bg-[#17191b] text-white'>
                    <h3>Abdulaziz</h3>
                </span>
                <span className='flex justify-end px-2 hover:bg-[#17191b] text-white'>
                    <p className='text-sm text-gray-500'>٧٥٨ منشورًا</p>
                </span>
            </div>
            <div className='bg-[#32363a] p-24'>
            </div>
            <div className='flex justify-between'>
                <div className='mt-3 ml-1'>
                    <button className='px-3 py-1 text-white border border-gray-500 rounded-full'>تعديل الملف الشخصي</button>
                </div>
                <div className='flex relative bottom-16'>
                    <img className='rounded-full w-32' src={Profileicon} alt="" />
                </div>  
            </div>
            <div className='flex justify-evenly w-full mt-8 lg:px-24 px-5'>
                <ul className='flex lg:space-x-14 space-x-4 text-gray-500'>
                    <li 
                        onClick={() => setShowLikedTweets(true)} 
                        className={` hover:cursor-pointer border-[#1d9bf0] border-b-4 w-full ${showLikedTweets ? '' : 'text-gray-500'}`}
                    >
                        الإعجابات
                    </li>
                    <li 
                        onClick={() => setShowLikedTweets(false)} 
                        className={` hover:cursor-pointer border-b-4 w-full ${!showLikedTweets ? 'border-[#1d9bf0]' : ''}`}
                    >
                        المنشورات
                    </li>
                    <li>الوسائط</li>
                    <li>المقالات</li>
                    <li>المميزة</li>
                    <li>الردود</li>
                </ul>
            </div>

            <div className='border-[1px] border-[#17191b] py-4 px-2'>
                {showLikedTweets ? (
                    <LikedTweets likedTweets={tweets.filter(tweet => likedTweets.includes(tweet.id))} />
                ) : (
                    tweets.map(tweet => (
                        <div key={tweet.id} className='border-b py-2'>
                            <span className='flex justify-between'>
                                <IoIosMore className='mt-2' />
                                <span className='flex'>
                                    <p className='text-sm text-gray-500 mt-1 mr-1'> TuwaiqAcadmy</p>
                                    <TiTickOutline className='mt-1.5 mr-1 text-[#000] bg-[#1d9bf0] rounded-full' />
                                    <p className='text-white text-md mr-1'></p>
                                    <img className='rounded-full w-10 mr-1' src={TuwaiqIcon} alt='' />
                                </span>
                            </span>
                            <span className='flex justify-end relative bottom-4'>
                                <p className='text-white text-md mr-12'>{tweet.content}</p> 
                            </span>
                            <div className='flex justify-center mt-5 w-full h-full text-center'>
                                <img className='w-96 h-auto' src='' alt="" />
                            </div>
                            <div className='flex justify-evenly text-[#5b5f63] mt-6'>
                                <CiExport />
                                <CiBookmark className='hover:text-[#1d9bf0]' />
                                <IoStatsChartSharp className='hover:text-[#1d9bf0]' />
                                <FaRegHeart 
                                    className={`hover:text-red-400 cursor-pointer ${likedTweets.includes(tweet.id) ? 'text-red-400' : ''}`}
                                    onClick={() => handleLikeTweet(tweet.id)}
                                />
                                <FaRetweet className='hover:text-green-400' />
                                <MdDelete
                                    className='hover:text-red-400 cursor-pointer'

                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CenterPersonal;
