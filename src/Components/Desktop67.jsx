import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import "../CSS/Desktop67.css";
import home_icon from "../Utils/Images/home-icon.png";
import arr_icon from "../Utils/Images/arrow_icon.png";
import Side from "./Desktop67_sidebar";
import Small from "./Desktop67_sidebar_small"
import Jisti from "./Modules/Jisti";
import Wallet from "../Components/Accounts/Wallet";
import Profit_loss from "../Components/Accounts/Profitloss";
import IE from "../Components/Accounts/IE";
import Bank from "../Components/Accounts/BankAccont";
import FT from "../Components/Accounts/FundTransfer";
import Updt_sys from "./Settings/UpdateSystem";
import Bckp_st from "./Settings/BackupSettings";
import Lang_set from "./Settings/LanguageSettings";
import { Menu, X } from "lucide-react";

function Desktop67({isopn, handle_isopn, isSidebarOpen}) {
  const [act_st, setAct_st] = useState("Accounts");
  function handle_act_st(st) {
    setAct_st(st);
  }

  const [act_sub_st, setAct_sub_st] = useState("");
  function handle_sub_act_st(sub_st) {
    setAct_sub_st(sub_st);
  }

  
  // 
  return (
    <div className="main-container mt-12 mx-3 lg:mx-10 flex flex-row justify-between gap-3 h-fit ">
      <Side act_st={act_st} handle_act_st={handle_act_st} act_sub_st={act_sub_st} handle_sub_act_st={handle_sub_act_st} />
      <div className=" w-full flex-col ">

        <div className="cont-header rounded-lg flex items-center justify-end p-3 sm:p-4 " >
        
          <div className="flex justify-between items-center gap-2 md:gap-5 pr-3">

            <img src={home_icon} alt="home" className="home-icon inline" />
            <img src={arr_icon} alt="arrow" className="arr-icon inline" />
            <div
              className="Acc inline text-white hover:cursor-pointer"
              onClick={() => {
                handle_act_st("");
                handle_sub_act_st("");
              }}
            >
             {act_st}
            </div>
            <img 
              src={arr_icon}
              alt="arrow"
              className="arr-icon inline"
              style={{ opacity: act_sub_st === "" ? 0 : 1 }}
            />
            <div className="Acc_ inline ">{act_sub_st}</div>
          </div>
        </div>
        <div className="relative">
        {
          isSidebarOpen && <Small act_st={act_st} handle_act_st={handle_act_st} act_sub_st={act_sub_st} handle_sub_act_st={handle_sub_act_st} isopn={isopn} handle_isopn={handle_isopn} /> 
        }</div>

        {act_sub_st === "Jisti" && ( 
          <Jisti />
        )}
        {act_sub_st === "Wallet Deposit" && ( 
          <Wallet />
        )}
        {act_sub_st === "Profit & Loss" && ( 
          <Profit_loss />
        )}
        {act_sub_st === "Income & Expense" && ( 
          <IE />
        )}
        {act_sub_st === "Bank Account" && ( 
          <Bank />
        )}
        {act_sub_st === "Fund Transfer" && ( 
          <FT />
        )}
        {act_sub_st === "Update System" && ( 
          <Updt_sys />
        )}
        {act_sub_st === "Backup Settings" && ( 
          <Bckp_st />
        )}
        {act_sub_st === "Language Settings" && ( 
          <Lang_set />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Desktop67);
