import React, { useState } from "react";
import Logo from "../Img/aglogo.png";
import Footer from "../Components/Footer";
// import { Modal } from "antd";
import bg1 from "../Img/bg1.png";

const Home = () => {
  // const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="bg-black">
        {/* <div className="px-16 py-10 items-center  flex flex-row justify-between ">
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
        </div> */}

        <div className="text-white p-5 flex flex-col  bg-no-repeat  items-center justify-center ">
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
          <div className="text-1xl font-semibold sm:text-3xl font-['Noto Sans SC'] mt-10">
            Join the Secure World with Our Experts On Your Side to Guide
          </div>
          <div className="mt-16 mb-96">
            <button class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* <div className="text-white p-10 min-w-screen min-h-screen bg-no-repeat bg-right object-contain bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm7.jpeg')] ">
          <div className="text-7xl sm:text-9xl  font-['Noto Sans SC'] font-semibold pt-20  ">
            Be Secure
            <div>Feel Safe</div>
          </div>
          <div className="text-3xl font-['Noto Sans SC'] mt-10">
            Be an organisation that is secured with an Intenational
            standard....!
          </div>
          <div className="text-1xl md:text-2xl font-['Noto Sans SC'] mt-20  w-full md:pr-96">
            Secure your business with our expert Information Security Audit
            services! Our team of CISAs specializes in conducting audits for
            various compliance standards including ISO 27001, GDPR, SOC 2, and
            more. With years of experience, our audits will ensure that your
            company's sensitive information is protected. Trust us to keep your
            business compliant and secure. Contact us now to schedule an audit!
          </div>
          <div className=" mt-10">
            <button
              class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full"
              onClick={() => setOpen(true)}
            >
              Learn More
            </button>
            <Modal
              // title="Certified Ethical hackers"
              centered
              open={open}
              onOk={() => setOpen(false)}
              // okType="primary"
              onCancel={() => setOpen(false)}
            >
              <p>
                Enhance your business's security with our comprehensive
                Information Security Audit services. We have a team of Certified
                Information Systems Auditors (CISAs) who are experts in
                conducting audits for various compliance standards, including
                ISO 27001, GDPR, SOC 2, and more. Our experienced CISA
                professionals will meticulously assess your systems, processes,
                and controls to identify vulnerabilities and ensure compliance
                with industry regulations. With their in-depth knowledge, they
                provide valuable insights and recommendations for strengthening
                your security measures. But our services don't stop at auditing
                alone. We offer end-to-end implementation solutions, helping you
                implement robust security frameworks tailored to your specific
                needs. From policy development to security awareness training,
                we guide you through the entire process, ensuring a seamless and
                secure environment for your business. Trust our expertise to
                safeguard your sensitive information, mitigate risks, and
                demonstrate compliance with industry standards. Contact us today
                to schedule an Information Security Audit and experience peace
                of mind in the face of evolving cybersecurity challenges.
              </p>
            </Modal>
          </div>
        </div> */}

        {/* <div className=" w-full h-screen relative my-20">
          <div className="relative p-10 flex-col items-center">
            <div className="text-7xl relative sm:text-9xl z-50 text-white font-['Noto Sans SC'] font-semibold pt-10  ">
              Be Secure
              <div>Feel Safe</div>
            </div>
            <div className="text-3xl relative z-50 text-white font-['Noto Sans SC'] mt-10">
              Be an organisation that is secured with an Intenational
              standard....!
            </div>
            <div className="text-1xl relative z-50 text-white md:text-2xl font-['Noto Sans SC'] mt-20  w-full md:pr-96">
              Secure your business with our expert Information Security Audit
              services! Our team of CISAs specializes in conducting audits for
              various compliance standards including ISO 27001, GDPR, SOC 2, and
              more. With years of experience, our audits will ensure that your
              company's sensitive information is protected. Trust us to keep
              your business compliant and secure. Contact us now to schedule an
              audit!
            </div>
          </div>

          <img
            src={bg1}
            className="w-full h-full absolute inset-0  object-cover"
          />
        </div> */}

        <div className="text-white p-10 min-w-screen min-h-screen bg-no-repeat bg-right object-cover bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm7.jpeg')] ">
          <div className="text-7xl sm:text-9xl  font-['Noto Sans SC'] font-semibold pt-20  ">
            Be Secure
            <div>Feel Safe</div>
          </div>
          <div className="text-3xl font-['Noto Sans SC'] mt-10">
            Be an organisation that is secured with an Intenational
            standard....!
          </div>
          <div className="text-1xl md:text-2xl font-['Noto Sans SC'] mt-20  w-full md:pr-96">
            Secure your business with our expert Information Security Audit
            services! Our team of CISAs specializes in conducting audits for
            various compliance standards including ISO 27001, GDPR, SOC 2, and
            more. With years of experience, our audits will ensure that your
            company's sensitive information is protected. Trust us to keep your
            business compliant and secure. Contact us now to schedule an audit!
          </div>
          <div className=" mt-10">
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Open regular modal
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I always felt like I could do anything. That’s the
                          main thing people are controlled by! Thoughts- their
                          perception of themselves! They're slowed down by their
                          perception of themselves. If you're taught you can’t
                          do anything, you won’t do anything. I was taught I
                          could do everything.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        <div className="text-white p-10  bg-no-repeat bg-right  object-cover min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm5.jpeg')] ">
          <div
            className="text-5xl lg:text-6xl xl:text-8xl font-['Noto Sans SC'] font-semibold pt-40 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Thinking of Vulnerability
            <div>testing</div>
          </div>
          <div
            className="text-3xl font-['Noto Sans SC'] mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            With the team of Certified Ethical hackers with immensive
            experiences
          </div>
          <div className="text-1xl md:text-2xl  font-['Noto Sans SC'] mt-20  w-full ">
            Protect your business from cyber threats with our VAPT testing
            services! Our expert team will identify vulnerabilities in your
            systems and provide actionable recommendations to mitigate them.
            Stay secure and stay ahead of the game with our VAPT services.
            Contact us now to schedule a testing!
          </div>
          <div className=" mt-10">
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Open regular modal
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          I always felt like I could do anything. That’s the
                          main thing people are controlled by! Thoughts- their
                          perception of themselves! They're slowed down by their
                          perception of themselves. If you're taught you can’t
                          do anything, you won’t do anything. I was taught I
                          could do everything.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>

        {/* <div class="flex  items-center bg-gray-300">
          <div class=" bg-green-500">
            <div class="flex">
              <img src={bg1} className="absolute" />
              <div className="text-white z-50 p-10 min-w-screen min-h-screen bg-no-repeat bg-right object-contain  ">
                <div className="text-7xl sm:text-9xl  font-['Noto Sans SC'] font-semibold pt-20  ">
                  Be Secure
                  <div>Feel Safe</div>
                </div>
                <div className="text-3xl font-['Noto Sans SC'] mt-10">
                  Be an organisation that is secured with an Intenational
                  standard....!
                </div>
                <div className="text-1xl md:text-2xl font-['Noto Sans SC'] mt-20  w-full md:pr-96">
                  Secure your business with our expert Information Security
                  Audit services! Our team of CISAs specializes in conducting
                  audits for various compliance standards including ISO 27001,
                  GDPR, SOC 2, and more. With years of experience, our audits
                  will ensure that your company's sensitive information is
                  protected. Trust us to keep your business compliant and
                  secure. Contact us now to schedule an audit!
                </div>
                <div className=" mt-10">
                  <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="text-white bg-[#0e1339]  bg-no-repeat bg-left p-10 min-w-screen min-h-screen bg-[url('/Volumes/SIYA/Git/ag/src/Img/bgm1.jpeg')] ">
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
              Information Security and CEH Training, designed to provide
              practical knowledge and skills to protect sensitive information.
              Enroll now and become a certified information security
              professional!!
            </div>
            <div className=" mt-10">
              <button class="bg-black hover:bg-blue-700 text-white font-bold py-5 px-20  rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div> */}

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
