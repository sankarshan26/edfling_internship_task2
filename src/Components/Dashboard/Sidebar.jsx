import React from "react";
import act_dot from "../../Utils/Images/act_dot.png";
import Account from "../../Utils/Images/account.png";
import { connect } from "react-redux";
import arrow_icon from "../../Utils/Images/arrow.png";
import bottom from "../MyClassroom/MyClassroom_Images/sidebar-img.png"

function Sidebar({ act_st, handle_act_st, act_sub_st, handle_sub_act_st }) {
  return (
    <div
      className="hidden lg:flex flex-col relative"
      style={{ background: "rgba(33, 93, 79, 1)" }}
    >
      <ul className=" flex flex-col gap-4 whitespace-nowrap min-w-fit mt-20  px-2">
        <li
          className={
            act_sub_st === "Wallet Deposit"
              ? "text-orange-300 font-medium   hover:cursor-pointer"
              : "text-white font-medium hover:cursor-pointer "
          }
          onClick={() => {
            handle_sub_act_st("Wallet Deposit");
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline mr-3"
          >
            <path
              d="M17.5312 12.375C17.2577 12.375 16.9954 12.4836 16.802 12.677C16.6086 12.8704 16.5 13.1327 16.5 13.4062C16.5 13.6798 16.6086 13.9421 16.802 14.1355C16.9954 14.3289 17.2577 14.4375 17.5312 14.4375H19.5938C19.8673 14.4375 20.1296 14.3289 20.323 14.1355C20.5164 13.9421 20.625 13.6798 20.625 13.4062C20.625 13.1327 20.5164 12.8704 20.323 12.677C20.1296 12.4836 19.8673 12.375 19.5938 12.375H17.5312ZM3.09375 0C2.27324 0 1.48633 0.325948 0.906138 0.906138C0.325948 1.48633 0 2.27324 0 3.09375V19.5938C0 20.9613 0.543246 22.2728 1.51023 23.2398C2.47722 24.2068 3.78873 24.75 5.15625 24.75H20.625C21.719 24.75 22.7682 24.3154 23.5418 23.5418C24.3154 22.7682 24.75 21.719 24.75 20.625V8.25C24.75 7.52593 24.5594 6.81462 24.1973 6.18756C23.8353 5.5605 23.3146 5.03979 22.6875 4.67775V4.125C22.6875 3.03098 22.2529 1.98177 21.4793 1.20818C20.7057 0.434597 19.6565 0 18.5625 0H3.09375ZM3.09375 2.0625H18.5625C19.1095 2.0625 19.6341 2.2798 20.0209 2.66659C20.4077 3.05339 20.625 3.57799 20.625 4.125H3.09375C2.82025 4.125 2.55794 4.01635 2.36455 3.82295C2.17115 3.62956 2.0625 3.36725 2.0625 3.09375C2.0625 2.82025 2.17115 2.55794 2.36455 2.36455C2.55794 2.17115 2.82025 2.0625 3.09375 2.0625ZM3.09375 6.1875H20.625C21.172 6.1875 21.6966 6.4048 22.0834 6.79159C22.4702 7.17839 22.6875 7.70299 22.6875 8.25V20.625C22.6875 21.172 22.4702 21.6966 22.0834 22.0834C21.6966 22.4702 21.172 22.6875 20.625 22.6875H5.15625C4.33574 22.6875 3.54883 22.3616 2.96864 21.7814C2.38845 21.2012 2.0625 20.4143 2.0625 19.5938V6.01219C2.38425 6.12563 2.73281 6.1875 3.09375 6.1875Z"
              fill="#CB8461"
            />
          </svg>
          Wallet Deposit
        </li>
        <li className="text-orange-300 font-medium">
          <span>
            <img
              src={Account}
              alt="account"
              className="inline mr-3"
              width="25"
              height="25"
            />
            Account
          </span>
        </li>
        <li className="min-w-fit">
          <ul className="gap-3 mt-2 whitespace-nowrap min-w-fit">
            <li className={act_sub_st === "Profit & Loss" ? "text-orange-300 font-medium hover:cursor-pointer  py-2 whitespace-nowrap flex flex-row justify-between items-center w-full"
              : "text-white font-medium py-2 hover:cursor-pointer flex flex-row justify-between items-center whitespace-nowrap w-full"} style={{ "border-left": "1px solid orange" }} 
              onClick={() => {
                handle_sub_act_st("Profit & Loss");
              }}><span className="">
              <img src={act_dot} alt="" className={act_sub_st === "Profit & Loss" ? "opacity-1 inline":"opacity-0 inline"} /> Profit{'\u00A0'}&{'\u00A0'}Loss</span>
              <img src={arrow_icon} alt="arrow" className="inline ml-3 " style={{"max-height":"11.68px"}} />
            </li>

            <li className={act_sub_st === "Income & Expense" ? "text-orange-300 min-w-fit font-medium hover:cursor-pointer  py-2 whitespace-nowrap flex flex-row justify-between items-center w-full"
              : "text-white font-medium py-2 min-w-fit hover:cursor-pointer flex flex-row justify-between items-center whitespace-nowrap w-full"} style={{ "border-left": "1px solid orange " }} 
              onClick={() => {
                handle_sub_act_st("Income & Expense");
              }}><span className="min-w-fit">
              <img src={act_dot} alt="" className={act_sub_st === "Income & Expense" ? "opacity-1 inline":"opacity-0 inline"} /> Income{'\u00A0'}&{'\u00A0'}Expense</span>
              <img src={arrow_icon} alt="arrow" className="inline ml-3 " style={{"max-height":"11.68px"}} />
            </li>

            <li className={act_sub_st === "Bank Account" ? "text-orange-300 font-medium hover:cursor-pointer  py-2 whitespace-nowrap flex flex-row justify-between items-center w-full"
              : "text-white font-medium py-2 hover:cursor-pointer flex flex-row justify-between items-center whitespace-nowrap w-full"} style={{ "border-left": "1px solid orange" }} 
              onClick={() => {
                handle_sub_act_st("Bank Account");
              }}><span className="">
              <img src={act_dot} alt="" className={act_sub_st === "Bank Account" ? "opacity-1 inline":"opacity-0 inline"} /> Bank{'\u00A0'}Account</span>
              <img src={arrow_icon} alt="arrow" className="inline ml-3 " style={{"max-height":"11.68px"}} />
            </li>

            <li className={act_sub_st === "Fund Transfer" ? "text-orange-300 font-medium hover:cursor-pointer  py-2 whitespace-nowrap flex flex-row justify-between items-center w-full"
              : "text-white font-medium py-2 hover:cursor-pointer flex flex-row justify-between  items-center whitespace-nowrap w-full"} style={{ "border-left": "1px solid orange" }} 
              onClick={() => {
                handle_sub_act_st("Fund Transfer");
              }}><span className="">
              <img src={act_dot} alt="" className={act_sub_st === "Fund Transfer" ? "opacity-1 inline":"opacity-0 inline"} /> Fund{'\u00A0'}Transfer</span>
              <img src={arrow_icon} alt="arrow" className="inline ml-3 " style={{"max-height":"11.68px"}} />
            </li>
          </ul>
        </li>

      </ul>

      <img src={bottom} alt="sidebar-bottom-design" className="absolute bottom-0 right-0" />

    </div>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Sidebar);
