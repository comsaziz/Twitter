import React from 'react'
import { GoHomeFill } from "react-icons/go";
import TuwaiqLogo from '../assets/Twitter.ico'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TbInboxOff } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/Profile.jpg'
import { IoIosMore } from "react-icons/io";
import { FaFeatherAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


function RightHome() {
    const navigate = useNavigate()
  return (

   
        <div className=' w-60  flex flex-col items-center  cursor-pointer   bg-[#000000]'> 

        <div className='flex mb-5'>
        <img src={TuwaiqLogo} alt="" />
        </div> 
        
        <div
        onClick={() => navigate('/')}
         className='flex mb-6 items-center text-white'>
        
        <p className='mr-3 xl:block hidden'>الرئيسية</p>
        <GoHomeFill size={30} /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='mr-3 xl:block hidden'>استكشف</p>
        <CiSearch size={30} /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='mr-3 xl:block hidden'>التنبيهات</p>
        <IoNotificationsOutline size={30} className='ml-1' /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='ml-3 xl:block hidden'>الرسائل</p>
        <CiMail size={30} className='lg:ml-3 ml-1' /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='ml-5 xl:block hidden'>Grok</p>
        <TbInboxOff size={30} className='lg:ml-4 ml-2' /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='mr-3 xl:block hidden'>المجتمعات</p>
        <FiUsers size={28} className='lg:mr-2 ml-2' /> 
        </div>

        <div className='flex mb-6 items-center text-white'>
        <p className='mr-3 xl:block hidden'>Premium</p>
        <img src={TuwaiqLogo} alt="" className='ml-2' />
        </div>

        <div
        onClick={()=> navigate("/personal")}
         className='flex mb-6 items-center text-white cursor-pointer'>
        <p className='mr-3 xl:block hidden '>الملف الشخصي</p>
        <CiUser size={32} className='lg:mr-9 ml-2' /> 
        </div>

        <div className=' flex mb-6 items-center text-white'>
        <p className='mr-2 xl:block hidden'>المزيد</p>
        <CiCircleMore size={32} className='lg:ml-7 ml-2' /> 
        </div>

        <div className=' flex mb-6 items-center text-white'
         onClick={() => navigate('/signin')}
        >
        <p className=' mr-3 xl:block hidden'>تسجيل الخروج</p>
        <CiLogout size={32} className='lg:mr-8 ml-2' /> 
        </div>

        <div className='flex mb-6 items-center'>
        <button className='bg-[#1d9bf0] text-white font-bold rounded-full xl:block hidden  px-24 py-4 cursor-pointer mt-4 mb-2 ml-4'>نشر</button>
         <button className='bg-[#1d9bf0] text-white font-bold rounded-full block xl:hidden  px-4 py-4 cursor-pointer mt-4 mb-2 ml-2'>{<FaFeatherAlt/>}</button>
        </div>

        <div className='flex flex-row justify-between w-full  '>
     
        <IoIosMore className='mt-2 ml-4 text-white xl:block hidden'/>
   
       
    
       
            <div className='flex'>
            <p className='mr-3 mt-1 xl:block hidden text-white'>Abdulaziz</p>
            <img className='rounded-full w-9 lg:mr-3 ml-6' src={Profile} alt="" />
           
            </div>
           

        </div>
            
            
            
        </div>

  )
}

export default RightHome