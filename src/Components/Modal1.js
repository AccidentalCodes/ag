import React from 'react';

const Modal1 = ({visible, onClose}) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white ">
      <div
        className="flex 
     items-center justify-end text-4xl mt-10 mr-10">
        <div
          onClick={onClose}
          className="text-black cursor-pointer hover:text-red-500">
          x
        </div>
      </div>

      <div
        className="p-8 h-full rounded flex flex-col 
     items-center justify-center ">
        <div
          className="text-slate-500 text-sm md:text-1xl px-4 font-['Poppins']  "
          data-aos="fade-right"
          data-aos-duration="1000">
          Harness the expertise of our highly skilled and experienced team of
          Certified Ethical Hackers (CEH) to fortify your web application's
          security with our cutting-edge Vulnerability Assessment and
          Penetration Testing (VAPT) services. Our CEH-certified professionals
          possess a deep understanding of the latest hacking techniques,
          methodologies, and defensive strategies, ensuring a comprehensive
          evaluation of your web application's security. With thorough
          vulnerability assessments and rigorous penetration testing, we
          actively identify vulnerabilities, misconfigurations, and weaknesses,
          providing you with detailed reports and actionable insights to fortify
          your security posture. Our CEH-backed VAPT services offer ongoing
          support and remediation, ensuring critical security gaps are
          addressed, and your compliance requirements are met. Trust in the
          expertise of our CEH-certified team to safeguard your valuable assets
          and gain peace of mind. Contact us today to schedule a consultation
          and experience the unparalleled benefits of our VAPT services.
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

export default Modal1;
