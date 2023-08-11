import React from "react";
import { useState } from "react";
import "../CSS/Desktop67.css";
import home_icon from "../Utils/Images/home-icon.png";
import arr_icon from "../Utils/Images/arrow_icon.png";
import Side from "./Desktop67_sidebar";
import Jisti from "./Modules/Jisti";
import Wallet from "../Components/Accounts/Wallet";
import Profit_loss from "../Components/Accounts/Profitloss";
import IE from "../Components/Accounts/IE";
import Bank from "../Components/Accounts/BankAccont";
import FT from "../Components/Accounts/FundTransfer";

function Desktop67() {
  const [act_st, setAct_st] = useState("Accounts");
  function handle_act_st(st) {
    setAct_st(st);
  }

  const [act_sub_st, setAct_sub_st] = useState("");
  function handle_sub_act_st(sub_st) {
    setAct_sub_st(sub_st);
  }
  
  return (
    <div className="mt-12 mx-5 md:mx-10 flex flex-row gap-8">
      <Side act_st={act_st} handle_act_st={handle_act_st} act_sub_st={act_sub_st} handle_sub_act_st={handle_sub_act_st} />
      <div className="cont_container flex flex-col grow ">

        <div className="cont-header rounded-lg flex items-center justify-start md:justify-end p-8 ">
          <div className="flex justify-between items-center w-fit gap-2 md:gap-5 pr-3">
            <img src={home_icon} alt="home" className="home-icon inline" />
            <img src={arr_icon} alt="arrow" className="arr-icon inline" />
            <div
              className="Acc inline text-white hover:cursor-pointer"
              onClick={() => {
                handle_act_st("");
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
      </div>
    </div>
  );
}

export default Desktop67;
