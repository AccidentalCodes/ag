import React from "react";
import Logo from "../Img/aglogo.png";

import Button from "@mui/material/Button";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="px-16 py-10 items-center flex flex-row justify-between ">
        <img src={Logo} className="w-60 " alt="Logo" />
        <div className="flex flex-row ">
          <div className="text-white text-2xl m-5 font-['Noto Sans SC']">
            credit score check
          </div>
          <div className="text-white text-2xl m-5 font-['Noto Sans SC']">
            {" "}
            CRED pay
          </div>
        </div>
      </div>
      <div className="text-white mt-16 m-5 flex flex-col items-center justify-center">
        <div className="text-9xl font-['Noto Sans SC'] font-extrabold ">
          rewards for paying
          <div className="text-9xl font-['Noto Sans SC']">
            credit card bills.
          </div>
        </div>
        <div className="text-3xl font-['Noto Sans SC'] mt-10">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <div className="mt-16 mb-96">
          <button class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-white p-10 min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Siya/ag/src/Img/bg1.png')] ">
        <div className="text-9xl font-['Noto Sans SC'] font-semibold pt-40  ">
          feel special
          <div>more often.</div>
        </div>
        <div className="text-3xl font-['Noto Sans SC'] mt-10">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <div className="text-2xl font-['Noto Sans SC'] mt-20  w-full pr-96">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className=" mt-10">
          <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-white p-10 min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Siya/ag/src/Img/bg2.png')] ">
        <div className="text-9xl font-['Noto Sans SC'] font-semibold pt-40  ">
          we take your money
          <div>matters seriously.</div>
        </div>
        <div className="text-3xl font-['Noto Sans SC'] mt-10">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <div className="text-2xl font-['Noto Sans SC'] mt-20  w-full pr-96">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className=" mt-10">
          <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
