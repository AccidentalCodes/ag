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
          I always felt like I could do anything. That’s the main thing people
          are controlled by! Thoughts- their perception of themselves! They're
          slowed down by their perception of themselves. If you're taught you
          can’t do anything, you won’t do anything. I was taught I could do
          everything.
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
