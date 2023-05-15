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
      <div className="text-white p-10 min-w-screen min-h-screen  ">
        <div className="text-9xl font-['Noto Sans SC'] font-semibold pt-40  ">
          Be Secure
          <div>Feel Safe</div>
        </div>
        <div className="text-3xl font-['Noto Sans SC'] mt-10">
          Be an organisation that is secured with an Intenational standard....!
        </div>
        <div className="text-2xl font-['Noto Sans SC'] mt-20  w-full pr-96">
          Secure your business with our expert Information Security Audit
          services! Our team of CISAs specializes in conducting audits for
          various compliance standards including ISO 27001, GDPR, SOC 2, and
          more. With years of experience, our audits will ensure that your
          company's sensitive information is protected. Trust us to keep your
          business compliant and secure. Contact us now to schedule an audit!
        </div>
        <div className=" mt-10">
          <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-white p-10 min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Siya/ag/src/Img/bg2.png')] ">
        <div className="text-9xl font-['Noto Sans SC'] font-semibold pt-40  ">
          Thinking of Vulnerability
          <div>testing</div>
        </div>
        <div className="text-3xl font-['Noto Sans SC'] mt-10">
          With the team of Certified Ethical hackers with immensive experiences
        </div>
        <div className="text-2xl font-['Noto Sans SC'] mt-20  w-full pr-96">
          Protect your business from cyber threats with our VAPT testing
          services! Our expert team will identify vulnerabilities in your
          systems and provide actionable recommendations to mitigate them. Stay
          secure and stay ahead of the game with our VAPT services. Contact us
          now to schedule a testing!
        </div>
        <div className=" mt-10">
          <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-white  p-10 min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Siya/ag/src/Img/bg2.png')] ">
        <div className="grid justify-items-end ">
          <div className="text-9xl text-right font-['Noto Sans SC']  font-semibold pt-40  ">
            Wanna be an expert in Information security
          </div>
          <div className="text-3xl text-right font-['Noto Sans SC'] mt-10">
            Or to equip you're employees in Infosec
          </div>
          <div className="text-2xl text-right font-['Noto Sans SC'] mt-20 w-full pl-96">
            Advance your career in information security with our comprehensive
            training programs! Our experts offer a range of courses, including
            Information Security and CEH Training, designed to provide practical
            knowledge and skills to protect sensitive information. Enroll now
            and become a certified information security professional!
          </div>
          <div className=" mt-10">
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
