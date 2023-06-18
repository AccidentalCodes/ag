import React, {useState} from 'react';
import Logo from '../Img/aglogo.png';
import newlogo from '../Img/logo new.png';
import Footer from '../Components/Footer';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from '../Components/Modal';
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Modal1 from '../Components/Modal1';

const Home = () => {
  const [Modals, setModals] = useState(false);
  // const [Modal1, setModal1] = useState(false);
  const handleOnClose = () => setModals(false);

  return (
    <>
      <div class="group fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 ">
        <div class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 group-hover:rotate-90 transition  transition-all duration-[0.6s]">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
            />
          </svg>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
            />
          </svg>
        </div>

        <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-hidden">
        <nav className="bg-black mx-auto items-center flex  justify-between">
          <div>
            <img src={newlogo} className="w-60" alt="Logo" />
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
                  <WhatsAppIcon className="mr-2" fontSize="large" />
                  <ReactWhatsapp
                    number="+91 6383555967"
                    message="Hello World!!!">
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
            data-aos-duration="1000">
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

        <div className="text-white px-10 py-40  lg:px-20  lg:py-60 bg-no-repeat   object-cover min-w-screen h-full bg-cover  bg-[url('/Volumes/SIYA/Git/ag/src/Img/bg5.png')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Poppins'] font-bold  "
            data-aos="fade-right"
            data-aos-duration="1000">
            Be Secure
            <div>Feel Safe.</div>
          </div>
          <div
            className="text-3xl font-['Poppins'] font-semibold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000">
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
              onClick={() => setModals(true)}>
              click me
            </button>
          </div>
          <Modal onClose={handleOnClose} visible={Modals} />
        </div>

        <div className="text-white px-10 py-40  lg:px-20  lg:py-60   bg-no-repeat bg-cover bg-right  object-cover min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm5.jpeg')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Noto Sans SC'] font-semibold text-right pt-20 "
            data-aos="fade-left"
            data-aos-duration="1000">
            Thinking of Vulnerability
            <div>testing</div>
          </div>
          <div
            className="text-3xl font-['Noto Sans SC'] text-right mt-10"
            data-aos="fade-up"
            data-aos-duration="1000">
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
          <div className="mt-5 ">
            <button
              class="bg-gray-700 hover:bg-blue-700  text-white font-bold py-5 px-20 rounded"
              onClick={() => setModals(true)}>
              click me
            </button>
            <Modal1 onClose={handleOnClose} visible={Modals} />
          </div>
        </div>

        <div className="text-white bg-[#0e1339]  px-10 py-40  lg:px-20  lg:py-60 bg-no-repeat   object-obtain min-w-screen h-full bg-cover bg-[url('/Volumes/SIYA/Git/ag/src/Img/bg3.png')] ">
          <div
            className="text-6xl  md:text-7xl xl:text-9xl font-['Poppins'] font-bold  "
            data-aos="fade-right"
            data-aos-duration="1000">
            Wanna be an expert in Information security
          </div>
          <div
            className="text-3xl font-['Poppins'] font-semibold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000">
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
