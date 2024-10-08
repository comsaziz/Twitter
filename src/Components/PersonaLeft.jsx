import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { IoIosMore } from "react-icons/io";


function PersonaLeft() {
  return (
    

  
    <div className="mx-10 w-screen xl:block hidden  bg-[#000000]">
    <div className="w-full">
<div className="w-96 relative">
  <input
    type="text"
    className="bg-[#202327] w-full rounded-full py-3 px-12 "
    placeholder="بحث"
    dir="rtl"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-5 text-gray-500 absolute right-5 top-3"
  >
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd"
    />
  </svg>
</div>
</div>
<div dir="rtl" className="w-96 h-auto border-[2px] border-[#17191b] rounded-2xl  px-2 py-3 mt-3">
        <h3 className="text-xl text-white font-semibold mb-4"> قد يعجبك</h3>
        <div className="mt-7 hover:bg-[#17191b] flex">
            <img className='rounded-full w-11 h-9' src="https://i.pinimg.com/236x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg" alt="" />
            <p className='mr-3 text-white'>Luffy</p>
            <TiTickOutline className='mr-2 mt-1 bg-[#1d9bf0] rounded-2xl'/>
        </div>
        <span className=' relative bottom-3'>
        <p className='text-sm text-gray-500 mr-12'>@Luffyi9</p> 
        </span>
        <span className='flex justify-end relative bottom-10 left-2'>
         <button className='rounded-full w-16 py-1 text-black bg-white'>متابعة</button>
        </span>

        <div className="mt-7 hover:bg-[#17191b] flex">
            <img className='rounded-full w-11 h-9' src="https://i.pinimg.com/236x/f8/09/c2/f809c2772606ded64a17bb790556ed56.jpg" alt="" />
            <p className='mr-3 text-white'>BradPit</p>
            <TiTickOutline className='mr-2 mt-1 bg-[#1d9bf0] rounded-2xl'/>
        </div>
        <span className=' relative bottom-3'>
        <p className='text-sm text-gray-500 mr-12'>@BradPitt</p> 
        </span>
        <span className='flex justify-end relative bottom-10 left-2'>
         <button className='rounded-full w-16 py-1 text-black bg-white'>متابعة</button>
        </span>

        <div className="mt-7 hover:bg-[#17191b] flex">
            <img className='rounded-full w-11 h-9' src="https://i.pinimg.com/474x/19/d8/de/19d8de9f3f89749b649ee49fe23a9a7a.jpg" alt="" />
            <p className='mr-3 text-white'>Kylian murfy</p>
            <TiTickOutline className='mr-2 mt-1 bg-[#1d9bf0] rounded-2xl'/>
        </div>
        <span className=' relative bottom-3'>
        <p className='text-sm text-gray-500 mr-12'>@Kylianmu</p> 
        </span>
        <span className='flex justify-end relative bottom-10 left-2'>
         <button className='rounded-full w-16 py-1 text-black bg-white'>متابعة</button>
        </span>

         <p className='text-[#1c9bf0]'>عرض المزيد</p>

        </div>


        <div dir="rtl" className="w-96 h-auto border-[2px] border-[#17191b] rounded-2xl  px-1 py-3  mt-6">
        <h3 className="text-xl text-white font-semibold mb-4">ماذا يحدث </h3>


        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
          <span className="flex text-gray-500 justify-between"> <h4 className="text-sm text-gray-500">المجموعات المتداولة</h4>
           <p dir="ltr" className="text-sm mt-1"><IoIosMore /></p>
          </span>
        <h2 dir='ltr' className="text-md text-white ">#HOTD</h2>
        <p dir='ltr' className='text-sm text-gray-500 mt-1 mb-2'>٢٬٢٦٩  posts</p>
        </div>

        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
          <span className="flex text-gray-500 justify-between"> <h4 className="text-sm text-gray-500">المتداول في المملكة العربية السعودية</h4>
           <p dir="ltr" className="text-sm mt-1"><IoIosMore /></p>   
          </span>
          
        <h2 className="text-lg text-white"> المشهد الاخير</h2>
        <p dir="ltr" className="text-sm text-gray-500 mt-4 mb-2"> ٤٨٫٤ ألف posts</p>
        
        </div>

        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
          <span className="flex text-gray-500 justify-between"> <h4 className="text-sm text-gray-500">الموضوعات المتداولة</h4>
           <p dir="ltr" className="text-sm mt-1"><IoIosMore /></p>
          </span>
        <h2 dir='ltr' className="text-md text-white ">#HouseofDragon</h2>
        <p dir='ltr' className='text-sm text-gray-500 mt-1 mb-2'>٤٨٫٢ ألف posts</p>
        </div>
        </div>



        
        

</div>

  )
}

export default PersonaLeft