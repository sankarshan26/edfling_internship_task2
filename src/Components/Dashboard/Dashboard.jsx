import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Bank from "../Accounts/BankAccont";
import FT from "../Accounts/FundTransfer";
import Side from "./Sidebar";
import Small_Sidebar from "./Small_Sidebar";
function Dashboard({ isopn, handle_isopn, isSidebarOpen }) {
  const [act_st, setAct_st] = useState("Accounts");
  function handle_act_st(st) {
    setAct_st(st);
  }

  const [act_sub_st, setAct_sub_st] = useState("");
  function handle_sub_act_st(sub_st) {
    setAct_sub_st(sub_st);
  }

  const Wallet = () => {
    return (
      <div className=" rounded-2xl w-full p-5 md:p-8 mt-24 border border-black flex flex-col">
        <ul className="head-sec flex justify-evenly">
          <li className="time">Name</li>
          <li className="time">Amount</li>
          <li className="time">Status</li>
          <li className="time">Note</li>
          <li className="time">Date</li>
        </ul>
        <ul className="flex flex-col  flex-1 py-5">
          <li className="content h-3/5 my-5">&nbsp;</li>
          <li className="content h-3/5 my-5 ">&nbsp;</li>
          <li className="content h-3/5 my-5">&nbsp;</li>
          <li className="content h-3/5 my-5">&nbsp;</li>
          <li className="content h-3/5 my-5">&nbsp;</li>
        </ul>
      </div>
    );
  };
  return (
    <div
      className="main-container mt-12 mx-3 lg:mx-10 flex flex-row  gap-3 h-fit "
      style={{ "min-height": "100vh" }}
    >
      <Side
        act_st={act_st}
        handle_act_st={handle_act_st}
        act_sub_st={act_sub_st}
        handle_sub_act_st={handle_sub_act_st}
      />

      <div className="relative border border-white ">
        {isSidebarOpen && (
          <Small_Sidebar
            act_st={act_st}
            handle_act_st={handle_act_st}
            act_sub_st={act_sub_st}
            handle_sub_act_st={handle_sub_act_st}
            isopn={isopn}
            handle_isopn={handle_isopn}
          />
        )}
      </div>
      <div className="flex-1 flex flex-col " style={{ height: "100%" }}>
        <div
          className="w-full flex justify-between items-center px-8 rounded-xl py-4"
          style={{ background: "rgba(69, 119, 107, 1)" }}
        >
          <div className="text-white font-medium text-xl hidden sm:block whitespace-nowrap">
            {act_sub_st}
          </div>

          <ul className="flex items-center justify-between gap-3 text-white text-sm">
            <li>Dashboard</li>
            <li>
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 13.25V0.75L6.75 7L0.5 13.25Z" fill="white" />
              </svg>
            </li>
            <li>Account</li>
            <li>
              <svg
                width="7"
                height="14"
                viewBox="0 0 7 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 13.25V0.75L6.75 7L0.5 13.25Z" fill="white" />
              </svg>
            </li>
            <li>{act_sub_st}</li>
          </ul>
        </div>

        <div>
          {act_sub_st === "Bank Account" && <Bank />}
          {act_sub_st === "Fund Transfer" && <FT />}
          {act_sub_st === "Wallet Deposit" && <Wallet />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});
export default connect(mapStateToProps)(Dashboard);
