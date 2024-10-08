import React from "react";
import { IoIosMore } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { FaRegHeart, FaRetweet, FaRegComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiExport, CiBookmark } from "react-icons/ci";
import { IoStatsChartSharp } from "react-icons/io5";
import TuwaiqIcon from "../assets/Tuwiaq.jpg"; 

function LikedTweets({ likedTweets }) {
  return (
    <div className="p-5">
      {likedTweets.length === 0 ? (
        <p className="text-gray-500">You have no liked tweets yet.</p>
      ) : (
        likedTweets.map((tweet) => (
          <div key={tweet.id} className="border-b py-1 px-3">
            <span className="flex justify-between">
              <IoIosMore className="mt-2" />
              <span className="flex">
                <p className="text-sm text-gray-500 mt-1 mr-1"> TuwaiqAcadmy</p>
                <TiTickOutline className="mt-1.5 mr-1 text-[#000] bg-[#1d9bf0] rounded-full" />
                <p className="text-white text-md mr-1">{tweet.author}</p>
                <img
                  className="rounded-full w-10 mr-1"
                  src={TuwaiqIcon}
                  alt=""
                />
              </span>
            </span>
            <span className="flex justify-end relative bottom-4">
              <p className="text-white text-md mr-12">{tweet.content}</p>
            </span>
            <div className="flex justify-center mt-5 w-full h-full text-center">
              <img className="w-96 h-auto" src={tweet.imageUrl} alt="" />
            </div>
            <div className="flex justify-evenly text-[#5b5f63] mt-6">
              <CiExport />
              <CiBookmark className="hover:text-[#1d9bf0]" />
              <IoStatsChartSharp className="hover:text-[#1d9bf0]" />
              <FaRegHeart className="hover:text-red-400 cursor-pointer text-red-400" />{" "}
             
              <FaRetweet className="hover:text-green-400" />
              <FaRegComment className="hover:text-[#1d9bf0]" />
              <MdDelete className="hover:text-red-400 cursor-pointer" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default LikedTweets;
