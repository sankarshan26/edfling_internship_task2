import React from 'react'
import bottom_arr from "../../Utils/Images/bottom_arrow.png";
function IE() {
  return (
        <div className="main-container_ border border-black rounded-2xl w-full h-2/4 p-5 md:p-8 mt-24">
          <ul className="head-sec flex justify-evenly">
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
              Name
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
              Payment
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
              Income/Expense
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
              Amount
            </li>
            <li className="time">
              <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
              Date
            </li>
          </ul>
          <ul className='flex flex-col items-stretch h-full py-5'>
            {/* displaying the data getting delivered from backend  */}
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5 ">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          <div className="content h-1/5">&nbsp;</div>
          </ul>
        </div>
      
  )
}

export default IE
