import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Profileicon from "../assets/Profile.jpg";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarClock } from "react-icons/tb";
import { MdEmojiEmotions } from "react-icons/md";
import { LiaListSolid } from "react-icons/lia";
import { MdOutlineGifBox } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import TuwaiqIcon from "../assets/Tuwiaq.jpg";
import { TiTickOutline } from "react-icons/ti";
import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function CenterHome() {
  const [tweetContent, setTweetContent] = useState(''); 
  const [tweets, setTweets] = useState([]); 
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [tweetToDelete, setTweetToDelete] = useState(null); 


  useEffect(() => {
    fetchTweets();
  }, []);

  
  const fetchTweets = () => {
    axios.get('https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp')
      .then(response => {
        setTweets(response.data); 
      })
      .catch(error => {
        console.error('Error fetching tweets:', error);
      });
  };

  
  const handlePostTweet = () => {
    if (tweetContent.trim()) {
      axios.post('https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp', { content: tweetContent })
        .then(response => {
          fetchTweets(); 
          setTweetContent(''); 
        })
        .catch(error => {
          console.error('Error posting tweet:', error);
        });
    }
  };


  const handleDeleteClick = (id) => {
    setTweetToDelete(id); 
    setShowDeleteModal(true); 
  };

 
  const confirmDelete = () => {
    if (tweetToDelete) {
      axios.delete(`https://66e803d4b17821a9d9daf73c.mockapi.io/photo/SignUp/${tweetToDelete}`)
        .then(() => {
          fetchTweets(); 
          setShowDeleteModal(false); 
        })
        .catch(error => {
          console.error('Error deleting tweet:', error);
        });
    }
  };

  return (
    <div className='border-[2px] border-[#17191b] rounded-none bg-black w-full '>
      <div className='border-[1px] border-[#17191b] py-2 w-full'>
        <span className='flex justify-evenly w-96 mx-auto hover:bg-[#17191b] text-white'>
          <h3>متابّعون</h3>
          <span className='ml-32'>
            <h3 className='border-[#1d9bf0] border-b-4 w-6'>لك</h3>
          </span>
        </span>
      </div>

      <div className='border-[1px] border-[#17191b] py-4'>
        <span className='flex justify-end'>
          <input
            dir='rtl'
            className='w-96 bg-black border-black text-white border-b outline-none'
            type="text"
            placeholder='ماذا يحدث؟!'
            value={tweetContent} 
            onChange={(e) => setTweetContent(e.target.value)} 
          />
          <img className='rounded-full w-10 ml-2 mr-2' src={Profileicon} alt="" />
        </span>

        <span className='flex justify-between'>
          <button
            className='bg-[#1d9bf0] text-white font-bold rounded-full px-5 py-2 cursor-pointer mt-4 mb-2 ml-4'
            onClick={handlePostTweet} 
          >
            نشر
          </button>
          <span className='text-[#1d9bf0] mt-8 flex w-full justify-end space-x-3 mr-4 font-bold'>
            <CiLocationOn className='text-[#0a3857]' />
            <TbCalendarClock />
            <MdEmojiEmotions />
            <LiaListSolid />
            <MdOutlineGifBox />
            <CiImageOn />
          </span>
        </span>
      </div>

      <div className='border-[1px] border-[#17191b] py-4 px-2'>
        {tweets.map(tweet => ( 
          <div key={tweet.id} className='border-b py-2'>
            <span className='flex justify-between'>
              <IoIosMore className='mt-2' />
              <span className='flex'>
                <p className='text-sm text-gray-500 mt-1 mr-1'>TuwiaqAcadmy</p>
                <TiTickOutline className='mt-1.5 mr-1 text-[#000] bg-[#1d9bf0] rounded-full' />
                <p className='text-white text-md mr-1'></p>
                <img className='rounded-full w-10 mr-1' src={TuwaiqIcon} alt='' />
              </span>
            </span>
            <span className='flex justify-end relative bottom-4'>
              <p className='text-white text-md mr-12'>{tweet.content}</p> 
            </span>
            <div className='flex justify-center mt-5 w-full h-full text-center'>
              <img className='w-96 h-auto' src="" alt="" />
            </div>
            <div className='flex justify-evenly text-[#5b5f63] mt-6'>
              <CiExport />
              <CiBookmark className='hover:text-[#1d9bf0]' />
              <IoStatsChartSharp className='hover:text-[#1d9bf0]' />
              <FaRegHeart className='hover:text-red-400' />
              <FaRetweet className='hover:text-green-400' />
              <FaRegComment className='hover:text-[#1d9bf0]' />
              <MdDelete
                className='hover:text-red-400 cursor-pointer'
                onClick={() => handleDeleteClick(tweet.id)} 
              />
            </div>
          </div>
        ))}
      </div>

      {showDeleteModal && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center'>
          <div className='bg-white p-8 rounded-lg'>
            <h2>Are you sure you want to delete this tweet?</h2>
            <div className='flex justify-between mt-4'>
              <button
                className='bg-red-500 text-white px-4 py-2 rounded'
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>
              <button
                className='bg-gray-300 px-4 py-2 rounded'
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CenterHome;
