import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 p-5 bg-black">
        <div class="col-span-12 md:col-span-6  flex flex-col rounded-lg p-3  text-lg font-bold text-white shadow-lg">
          Follow us
          <div>
            <InstagramIcon className="mr-2" />
            <TwitterIcon className="mr-2" />
            <YouTubeIcon className="mr-2" />
            <LinkedInIcon className="mr-2" />
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
