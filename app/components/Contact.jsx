"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

const Contact = () => {
  // useClient();
  return (
    // <div className="container-none h-48 mx-auto flex flex-col justify-between items-center px-6 bg-caribbean text-white sm:flex-row sm:space-y-0 md:h-24">
    <div className="container-none h-44 py-2 mx-auto flex flex-col justify-between items-center px-6 bg-caribbean text-white text-xs sm:space-y-0 md:text-base sm:flex-row sm:h-24">
      <a className="flex gap-2" href="mailto:a.c.a.montagny60240@gmail.com">
        <div className="w-6 h-10 flex items-center">
          <MailOutlineIcon />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ fill: "#ffffff" }}
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg> */}
        </div>
        <div className="flex items-center">@acam</div>
      </a>
      <a
        className="flex gap-2"
        href="https://m.facebook.com/people/ACAM-Montagny/100063693005219/"
      >
        <div className="w-6 h-10 flex items-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ fill: "#ffffff" }}
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg> */}
          <FacebookIcon />
        </div>
        <div className="flex items-center">Facebook</div>
      </a>
      <a className="flex gap-2" href="tel:0344499807">
        <div className="w-6 h-10 flex items-center">
          <PhoneIcon />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ fill: "#ffffff" }}
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
          </svg> */}
        </div>
        <div className="flex items-center">0344499807</div>
      </a>
      <a className="flex gap-2" href="https://goo.gl/maps/A5vKhbrMamkwFPz76">
        <div className="w-6 h-10 flex items-center">
          <PlaceIcon />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={{ fill: "#ffffff" }}
          >
            <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
          </svg> */}
        </div>
        <div className="flex items-center">3 Rue de la Molière</div>
      </a>
    </div>
  );
};

export default Contact;
