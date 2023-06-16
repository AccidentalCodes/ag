import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 p-5 bg-black">
        <div class="col-span-12 items-center md:col-span-6  flex flex-col rounded-lg p-3  text-lg font-bold text-white shadow-lg">
          Contact Us
          <div>
            <LinkedInIcon className="mr-2" />
            <WhatsAppIcon className="mr-2" />
            <ReactWhatsapp
              number="+91 6383555967"
              message="Hello World!!!"
            ></ReactWhatsapp>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 justify-center text-center flex flex-col rounded-lg p-3   text-white shadow-lg">
          copyright © 2020-22 Dreamplug Technologies Pvt Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
