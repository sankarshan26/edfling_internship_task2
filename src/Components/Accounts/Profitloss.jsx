import React from 'react'
import bottom_arr from "../../Utils/Images/bottom_arrow.png";
function Profitloss() {
  return (
    
      <div className="main-container_ rounded-2xl w-full h-2/4 p-5 md:p-8 mt-24 border border-black">
        <ul className="head-sec flex justify-evenly">
          <li className="time">
            <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
            Time
          </li>
          <li className="time">
            <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
            Income
          </li>
          <li className="time">
            <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
            Expense
          </li>
          <li className="time">
            <img src={bottom_arr} alt="btm-arrow" className="inline w-3 mr-2" />
            Profit/Loss
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

export default Profitloss
