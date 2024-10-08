import React from "react";
import { IoIosMore } from "react-icons/io";
function LeftHome() {
  return (
    <div className="bg-[#000000] mx-auto xl:block hidden">
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


      <div dir="rtl" className=" w-96 border-[2px] border-[#17191b] rounded-2xl px-3 py-0  mt-6">
        <h3 className="text-xl text-white font-semibold mt-2">الاشتراك في Premium</h3>
        <p className="text-white mt-4">
        اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلًا، ستتسلّم حصة من إيرادات الإعلانات. </p>
        <button className="bg-[#1d9bf0] text-white font-bold rounded-full  px-5 py-2 cursor-pointer mt-4 mb-2">
          اشتراك
        </button>
      </div>

      <div dir="rtl" className="w-96 h-auto border-[2px] border-[#17191b] rounded-2xl  px-1 py-3  mt-6">
        <h3 className="text-xl text-white font-semibold mb-4">ماذا يحدث </h3>

        <div className="mt-7 hover:bg-[#17191b]">
        <h2 className="text-lg text-white">#نرتقي_بجودة_الحياة</h2>
        <h4 className="text-sm text-gray-500">برنامج جودة الحياة</h4>
        <p className="text-sm text-gray-500">مُروَّج بواسطة برنامج جودة الحياة</p>
        </div>

        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
        <h4 className="text-sm text-gray-500">مقاطع فيديو شائعة · متداول</h4>
        <h2 className="text-lg text-white">#الحرب_بدات_الان</h2>
        <p dir="ltr" className="text-sm text-gray-500">٣٧٫٣ ألف posts</p>
        </div>

        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
          <span className="flex text-gray-500 justify-between"> <h4 className="text-sm text-gray-500">المتداول في المملكة العربية السعودية</h4>
           <p dir="ltr" className="text-sm mt-1"><IoIosMore /></p>
          </span>
        <h2 className="text-lg text-white">الراتب الاساسي</h2>
        </div>

        <div className="mt-5 hover:bg-[#17191b] cursor-pointer">
          <span className="flex text-gray-500 justify-between"> <h4 className="text-sm text-gray-500">المتداول في المملكة العربية السعودية</h4>
           <p dir="ltr" className="text-sm mt-1"><IoIosMore /></p>
          </span>
        <h2 className="text-lg text-white"> #عم_الكل</h2>
        <p dir="ltr" className="text-sm text-gray-500 mt-4 mb-2"> ٢٬٢٦٩  posts</p>
        
        </div>

        
        

        </div>

    </div>
  );
}

export default LeftHome;
