import React, { useState } from "react";
import Logo from "../Img/aglogo.png";
import Footer from "../Components/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "../Components/Modal";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const [Modals, setModals] = useState(false);
  const handleOnClose = () => setModals(false);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="overflow-hidden">
        <nav className="bg-black mx-auto items-center flex  justify-between">
          <div>
            <img src={Logo} className="w-80" alt="Logo" />
          </div>
          <div className="md:static absolute md:min-h-fit md:w-auto md:bg-black bg-white left-0 min-h-[40vh] flex items-center px-5 top-[-100%] w-full">
            <ul className="md:flex-row flex-col flex md:items-center  md:gap-[4vw] gap-12">
              <li>
                <a className="text-red-800 hover:text-gray-500">
                  credit score check
                </a>
              </li>
              <li>
                <a className="text-green-800 text-2xl flex items-center">
                  {" "}
                  <WhatsAppIcon className="mr-2" fontSize="large" />
                  <ReactWhatsapp
                    number="+91 6383555967"
                    message="Hello World!!!"
                  >
                    Whatsapp
                  </ReactWhatsapp>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center cursor-pointer md:hidden">
            <MenuIcon onClick className=" text-white text-lg " />
          </div>
        </nav>

        <div className="bg-black text-white p-5 flex flex-col  bg-no-repeat  items-center justify-center ">
          <div
            className="text-5xl items-center  text-center sm:text-6xl font-['Noto Sans SC'] font-extrabold pt-40 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            "Empower your digital fortress with our expert cyber security
            consulting."
            {/* <div className="text-7xl sm:text-9xl font-['Noto Sans SC']">
              credit card bills.
            </div> */}
          </div>
          <div className="text-1xl font-semibold sm:text-3xl font-['Noto Sans SC'] mt-10 text-center lg:text-left ">
            Join the Secure World with Our Experts On Your Side to Guide
          </div>
          <div className="mt-16 mb-40">
            <button class="bg-gray-700 hover:bg-blue-700  text-white font-bold py-5 px-20 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-white px-10 py-40  lg:px-20  lg:py-60 bg-no-repeat   object-cover min-w-screen h-full bg-cover  bg-[url('/Volumes/SIYA/Git/ag/src/Img/bg5.jpg')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Poppins'] font-bold  "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Be Secure
            <div>Feel Safe.</div>
          </div>
          <div
            className="text-3xl font-['Poppins'] font-semibold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Be an organisation that is secured with an Intenational
            standard....!
          </div>
          <div className="text-1xl md:text-2xl  font-['Poppins'] lg:w-3/5 lg:text-md mt-10  w-full ">
            Secure your business with our expert Information Security Audit
            services! Our team of CISAs specializes in conducting audits for
            various compliance standards including ISO 27001, GDPR, SOC 2, and
            more. With years of experience, our audits will ensure that your
            company's sensitive information is protected. Trust us to keep your
            business compliant and secure. Contact us now to schedule an audit!
          </div>
          <div className="mt-5">
            <button
              class="bg-gray-700 hover:bg-blue-700  text-white font-bold py-5 px-20 rounded"
              onClick={() => setModals(true)}
            >
              click me
            </button>
          </div>
          <Modal onClose={handleOnClose} visible={Modals} />
        </div>

        <div className="text-white px-10 py-40  lg:px-20  lg:py-60   bg-no-repeat bg-cover bg-right  object-cover min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm5.jpeg')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Noto Sans SC'] font-semibold text-right pt-20 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Thinking of Vulnerability
            <div>testing</div>
          </div>
          <div
            className="text-3xl font-['Noto Sans SC'] text-right mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            With the team of Certified Ethical hackers with immensive
            experiences
          </div>
          <div className="text-1xl md:text-2xl  font-['Poppins']   lg:text-md mt-10 text-right  w-full ">
            Protect your business from cyber threats with our VAPT testing
            services! Our expert team will identify vulnerabilities in your
            systems and provide actionable recommendations to mitigate them.
            Stay secure and stay ahead of the game with our VAPT services.
            Contact us now to schedule a testing!
          </div>
          <div className="mt-5">
            <button
              class="bg-gray-700 hover:bg-blue-700  text-white font-bold py-5 px-20 rounded"
              onClick={() => setModals(true)}
            >
              click me
            </button>
          </div>
          <Modal onClose={handleOnClose} visible={Modals} />
        </div>

        <div className="text-white bg-[#0e1339]  px-10 py-40  lg:px-20  lg:py-60 bg-no-repeat   object-obtain min-w-screen h-full bg-cover bg-[url('/Volumes/SIYA/Git/ag/src/Img/bg3.png')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Poppins'] font-bold  "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Wanna be an expert in Information security
          </div>
          <div
            className="text-3xl font-['Poppins'] font-semibold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Or to equip you're employees in Infosec
          </div>
          <div className="text-1xl md:text-2xl  font-['Poppins'] lg:w-3/5 lg:text-md mt-10  w-full ">
            Advance your career in information security with our comprehensive
            training programs! Our experts offer a range of courses, including
            Information Security and CEH Training, designed to provide practical
            knowledge and skills to protect sensitive information. Enroll now
            and become a certified information security professional!
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
