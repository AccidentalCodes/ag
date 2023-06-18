import React from "react";

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white ">
      <div
        className="flex 
     items-center justify-end text-4xl mt-10 mr-10"
      >
        <div
          onClick={onClose}
          className="text-black cursor-pointer hover:text-red-500"
        >
          x
        </div>
      </div>

      <div
        className="p-8 h-full rounded flex flex-col 
     items-center justify-center "
      >
        <div
          className="text-slate-500 text-1xl md:text-3xl p-4 font-['Poppins']  "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
       
Supercharge your organization's security and ensure seamless compliance with our cutting-edge Infosec Audit Services. Unleash the power of our elite team of CISA auditors, armed with External Audit Training, Audit Support, Evidence Audit, Readiness Audit, and Security Maturity Audit. Stay one step ahead of the ever-evolving cyber threats with our intensive training sessions, equipping your internal audit teams with the latest industry insights and best practices. Experience unparalleled support as our auditors navigate the complex audit process, meticulously examining your security controls and policies to unearth vulnerabilities and fortify your defenses. Our comprehensive readiness assessment will prepare you to ace official audits, ensuring you shine in the spotlight. And now, our newly introduced Security Maturity Audit will assess your organization's security maturity level, providing a roadmap for continuous improvement and resilience against emerging threats. Embrace the future of security with our Infosec Audit Services, your ultimate shield against data breaches. Don't wait, seize the opportunity for a safer and more secure tomorrow. Contact us now to embark on this exhilarating journey.
        </div>

        {/* <div>
          <button
            onClick={onClose}
            class="bg-gray-700 hover:bg-blue-700  text-white font-bold py-5 px-20 rounded"
          >
            close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
