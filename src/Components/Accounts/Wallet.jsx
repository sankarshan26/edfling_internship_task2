import React from 'react'
import bottom_arr from "../../Utils/Images/bottom_arrow.png";
function Wallet() {
  return (
            <div className="main-container_ rounded-2xl w-full h-2/4 p-5 md:p-8 mt-24 border border-black">
          <ul className="head-sec flex justify-evenly">
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="down-arrow-icon inline w-3 " />
              Name
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="down-arrow-icon inline w-3 " />
              Amount
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="down-arrow-icon inline w-3 " />
              Status
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="down-arrow-icon inline w-3 " />
              Note
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="down-arrow-icon inline w-3 " />
              Date
            </li>
          </ul>
          <ul className='flex flex-col items-stretch h-full py-5'>
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5 ">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          </ul>
        </div>
      
  )
}

export default Wallet
