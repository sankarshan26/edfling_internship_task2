import React from "react";
import { useState } from "react";
import "../CSS/Account.css";
import Desktop67_sidebar from "./Desktop67_sidebar";
import arr_icon from "../Utils/Images/arrow_icon.png";
import home_icon from "../Utils/Images/home-icon.png";
import bottom_arr from "../Utils/Images/bottom_arrow.png";

function Account() {
  const [active, setActive] = useState("");
  function handleClick(active) {
    setActive(active);
  }


  return (
    <div className="Account flex gap-2 justify-between my-8 mx-5 md:mx-10">
      <Desktop67_sidebar handleClick={handleClick} active={active} />
      <div className="cont_container mr-5 md:mr-10  flex flex-col">
        <div className="cont-header rounded-lg flex items-center justify-start md:justify-end px-3 ">
          <div className="flex justify-between items-center w-fit gap-2 md:gap-5">
            <img src={home_icon} alt="home" className="home-icon inline" />
            <img src={arr_icon} alt="arrow" className="arr-icon inline" />
            <div className="Acc inline text-white hover:cursor-pointer" onClick={()=>{handleClick("")}}>Accounts</div>
            <img src={arr_icon} alt="arrow" className="arr-icon inline" style={{opacity: active==="" ? 0 : 1}}/>
            <div className="Acc_ inline ">{active}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
