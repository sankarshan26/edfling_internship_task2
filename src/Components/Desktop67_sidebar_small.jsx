import React from "react";
import Academics from "../images/Desktop67/academics.png";
import down_arr from "../images/Desktop67/down-arrow.png";
import Accounts from "../images/Desktop67/Accounts.png";
import Admin from "../images/Desktop67/Admin.png";
import Student from "../images/Desktop67/Student.png";
import Examination from "../images/Desktop67/Examination.png";
import HR from "../images/Desktop67/HR.png";
import Leaves from "../images/Desktop67/Leaves.png";
import Dashboard from "../images/Desktop67/Dashboard.png";
import Utilities from "../images/Desktop67/Utilities.png";
import Reports from "../images/Desktop67/Report.png";
import Settings from "../images/Desktop67/Settings.png";
import Modules from "../images/Desktop67/Modules.png";
import ellip from "../images/Desktop67/Ellipse 218.png";
import boy from "../Utils/Images/boy-photo.png";
import "../CSS/Desktop67_sidebar.css";


function Desktop67_sidebar_small({ act_st,  handle_act_st,  act_sub_st,  handle_sub_act_st,isopn, handle_isopn}) {
  return (
    <div className="sidebar absolute lg:block pl-8 min-w-fit">
      <div className="sidebar_heading relative w-fit px-4 py-4 mt-4">
        <img src={ellip} alt="ellip" className="ellip1 absolute" />
        <img src={ellip} alt="ellip" className="ellip2 absolute" />
        Admin Pannel
      </div>

      <ul className="mt-6 w-fit">
        <li
          className={
            act_st === "Dashboard"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Dashboard");
            handle_sub_act_st("");
            handle_isopn();
          }}
        >
          <img src={Dashboard} className="inline mr-5 w-5" alt="dashboard" />
          Dashboard
        </li>
        <li
          className={
            act_st === "Admin"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Admin");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Admin} className="inline mr-5 w-5" alt="dashboard" />
          Admin
        </li>
        <li
          className={
            act_st === "Academics"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Academics");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Academics} className="inline mr-5 w-5" alt="dashboard" />
          Academics
        </li>
        <li
          className={
            act_st === "Study Material"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Study Material");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Student} className="inline mr-5 w-5" alt="dashboard" />
          Study Material
        </li>
        <li
          className={
            act_st === "Student"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Student");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Student} className="inline mr-5 w-5" alt="dashboard" />
          Student
        </li>
        <li
          className={
            act_st === "Examination"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Examination");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Examination} className="inline mr-5 w-5" alt="dashboard" />
          Examination
        </li>
        <li
          className={
            act_st === "HR"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("HR");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={HR} className="inline mr-5  w-5" alt="dashboard" />
          HR
        </li>
        <li
          className={
            act_st === "Leaves"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Leaves");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Leaves} className="inline mr-5 w-5" alt="dashboard" />
          Leaves
        </li>
        <li
          className={
            act_st === "Accounts"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Accounts");
            handle_sub_act_st("");
          }}
        > 
          <img src={Accounts} className="inline mr-5 w-5" alt="dashboard" />
          Accounts<img src={down_arr} alt="down-arrow" className= {act_st==="Accounts" ? "inline w-3 ml-8" : "hidden"}/>
        </li>
        <li>
          <div className={act_st === "Accounts" ? "block" : "hidden"}>
            <ul className="Account-list pl-8 text-left">
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Wallet Deposit");
                  handle_isopn();
                }}
              >
                <span
                  className={
                    act_sub_st === "Wallet Deposit" ? "opacity-50" : ""
                  }
                >
                  Wallet Deposit
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Income & Expense");handle_isopn();
                }}
              >
                <span
                  className={
                    act_sub_st === "Income & Expense" ? "opacity-50" : ""
                  }
                >
                  I&E
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Profit & Loss");handle_isopn();
                }}
              >
                <span
                  className={act_sub_st === "Profit & Loss" ? "opacity-50" : ""}
                >
                  Profit And Loss
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Bank Account");handle_isopn();
                }}
              >
                <span
                  className={act_sub_st === "Bank Account" ? "opacity-50" : ""}
                >
                  Bank Account
                </span>
              </li>
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Fund Transfer");handle_isopn();
                }}
              >
                <span
                  className={act_sub_st === "Fund Transfer" ? "opacity-50" : ""}
                >
                  Fund Transfer
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={
            act_st === "Utilities"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Utilities");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Utilities} className="inline mr-5 w-5" alt="dashboard" />
          Utilities
        </li>
        <li
          className={
            act_st === "Reports"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Reports");
            handle_sub_act_st("");
            handle_isopn();
          }}
        >
          <img src={Reports} className="inline mr-5 w-5" alt="dashboard" />
          Reports
        </li>
        <li
          className={
            act_st === "Settings"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Settings");
            handle_sub_act_st("");handle_isopn();
          }}
        >
          <img src={Settings} className="inline mr-5 w-5" alt="dashboard" />
          Settings
        </li>
        <li
          className={
            act_st === "Modules"
              ? "siderbar_list_item py-2 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Modules");
            handle_sub_act_st("");
          }}
        >
          <img src={Modules} className="inline mr-5 w-5" alt="dashboard" />
          Modules<img src={down_arr} alt="down-arrow" className= {act_st==="Modules" ? "inline w-3 ml-10" : "hidden"}/>
        </li>
        <li>
          <div className={act_st === "Modules" ? "block" : "hidden"}>
            <ul className="Account-list pl-12 text-left">
              <li
                className="Account-list-item siderbar_list_item py-2 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handle_sub_act_st("Jisti");handle_isopn();
                }}
              >
                <span className={act_sub_st === "Jisti" ? "opacity-50" : ""}>Jisti</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="sidebar-img mt-20">
        <img src={boy} alt="boy" className="h-60"/>

      </div>
    </div>
  );
}

export default Desktop67_sidebar_small;
