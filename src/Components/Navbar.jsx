// import React from "react";
// import { useState } from "react";
// import "../CSS/Navbar.css";
// import logo from "../images/navbar/logo.png";
// import { Menu, X } from "lucide-react";
// import profile from "../Utils/Images/Ellipse 215.png";
// import new_ from "../images/navbar/Ellipse 219.png";
// import girl from "../images/navbar/girl.png";
// import group from "../images/navbar/Group.png";

// function Navbar ({handle_isopn}) {
//   const [act, setAct] = useState("Home");

//   const [isopen, setOpen] = useState("false");
//   const togglenavbar = () => {
//     setOpen(!isopen);
//   };

//  const [login, setLogin] = useState(true);
//  function log_status(){
//   setLogin(!login);
//  }

// const [pop_up, set_pop_up] = useState("");
// function hadler_popup(e){
//   set_pop_up(e);
//   console.log(pop_up)
// }

// const profile_ = (
//   <ul className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between " style={{background : "#215d4f"}}>
//     <li className="ite p-1">View Profile</li>
//     <li className="ite p-1">Setting</li>
//     <li className="ite p-1">Logout</li>
//   </ul>
// )

// const notification_ = (
//   <ul className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between outline-none" style={{background : "#215d4f"}}>
//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" /><span className="">We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>

//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>
//     <li className="notifiaction_ite p-1" ><img src={new_} alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li><li className="notifiaction_ite p-1" ><img src={new_} alt="new" className="invisible" /><span >We're excited to announce the launch of our new course, [Course Name]! This course is designed to help you [briefly describe the course objective or outcome].<span className="orange hover:cursor-pointer">View details</span></span></li>

//     <li className="notifiaction_ite p-1 mt-40" style={{background : "#215d4f"}}><img src={girl} alt="girl"  className="absolute left-0 w-full mt-64" style={{background : "#215d4f"}}/>
//     <img src={group} alt="" className="absolute right-0 -mt-2 w-28"/></li>

//   </ul>
// )
//   return (
//     <>
//       <div className="navbar  px-5 md:px-10 sticky top-0 w-full hidden lg:flex  items-center justify-between flex-wrap-reverse pt-2 z-50 lg:flex-wrap bg-white">
//         {/* left portion of navbar  */}
//         <div className="left border-1  w-auto md:w-1/5 ">
//           <img src={logo} alt="logo" className="h-9 hover:cursor-pointer"></img>
//         </div>

//         {/* center portion of navbar  */}
//         <div className="center w-2/4 hidden lg:flex">
//           <ul className="nav-list flex justify-between items-center  w-full ">
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={() => {
//                 setAct((act) => "Home");
//               }}
//               style={{
//                 color: act === "Home" ? "#215D4F" : "",
//                 opacity: act === "Home" ? "1" : "",
//                 fontWeight: act === "Home" ? "500" : "",
//               }}
//             >
//               Home
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={() => {
//                 setAct((act) => "Why us");
//               }}
//               style={{
//                 color: act === "Why us" ? "#215D4F" : "",
//                 opacity: act === "Why us" ? "1" : "",
//                 fontWeight: act === "Why us" ? "500" : "",
//               }}
//             >
//               Why us
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={() => {
//                 setAct((act) => "Courses");
//               }}
//               style={{
//                 color: act === "Courses" ? "#215D4F" : "",
//                 opacity: act === "Courses" ? "1" : "",
//                 fontWeight: act === "Courses" ? "500" : "",
//               }}
//             >
//               Courses
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={() => {
//                 setAct((act) => "Mentors");
//               }}
//               style={{
//                 color: act === "Mentors" ? "#215D4F" : "",
//                 opacity: act === "Mentors" ? "1" : "",
//                 fontWeight: act === "Mentors" ? "500" : "",
//               }}
//             >
//               Mentors
//             </li>
//             <li
//               className="list-item hover:cursor-pointer opacity-50 font-normal"
//               onClick={() => {
//                 setAct((act) => "Contact us");
//               }}
//               style={{
//                 color: act === "Contact us" ? "#215D4F" : "",
//                 opacity: act === "Contact us" ? "1" : "",
//                 fontWeight: act === "Contact us" ? "500" : "",
//               }}
//             >
//               Contact us
//             </li>
//           </ul>
//         </div>

//         {/* right portion of navbar  */}
//         {!login ? (
//           <div className="right w-1/5 hidden lg:flex  justify-end">
//             <div className="h-full">
//               <a className=" hover:cursor-pointer login h-full">Login</a>
//             </div>
//             <button className="signup py-1 px-3.5 ml-5">Sign Up</button>
//           </div>
//         ) : (
//           <div className="right w-1/5 hidden lg:flex  justify-end gap-7 items-center ">
//             <div className="relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//                 className="notification-circle"
//               >
//                 <circle cx="6" cy="6.98535" r="6" fill="#215D4F" />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="27"
//                 viewBox="0 0 22 27"
//                 fill="none"
//               >
//                 <path
//                   d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
//                   fill="#215D4F"
//                 />
//               </svg>
//             </div>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               viewBox="0 0 25 25"
//               fill="none"
//             >
//               <path
//                 d="M21.9578 0.0994263H2.43976C1.09789 0.0994263 0.0121988 1.19732 0.0121988 2.53919L0 24.497L4.87952 19.6175H21.9578C23.2997 19.6175 24.3976 18.5196 24.3976 17.1777V2.53919C24.3976 1.19732 23.2997 0.0994263 21.9578 0.0994263ZM19.5181 14.738H4.87952V12.2982H19.5181V14.738ZM19.5181 11.0783H4.87952V8.63858H19.5181V11.0783ZM19.5181 7.4187H4.87952V4.97894H19.5181V7.4187Z"
//                 fill="#215D4F"
//               />
//             </svg>
//             <img src={profile} />
//           </div>
//         )}

//         {/* for screen smaller than 768px */}
//         <div className="flex flex-col md:hidden">
//           <button onClick={togglenavbar} className="">
//             {!isopen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {!isopen && (
//           <div className="center w-2/4 flex md:hidden basis-full">
//             <ul className="nav-list flex flex-col justify-between items-center  w-full ">
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={() => {
//                   setAct((act) => "Home");
//                 }}
//                 style={{
//                   color: act === "Home" ? "#215D4F" : "",
//                   opacity: act === "Home" ? "1" : "",
//                   fontWeight: act === "Home" ? "500" : "",
//                 }}
//               >
//                 Home
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={() => {
//                   setAct((act) => "Why us");
//                 }}
//                 style={{
//                   color: act === "Why us" ? "#215D4F" : "",
//                   opacity: act === "Why us" ? "1" : "",
//                   fontWeight: act === "Why us" ? "500" : "",
//                 }}
//               >
//                 Why us
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={() => {
//                   setAct((act) => "Courses");
//                 }}
//                 style={{
//                   color: act === "Courses" ? "#215D4F" : "",
//                   opacity: act === "Courses" ? "1" : "",
//                   fontWeight: act === "Courses" ? "500" : "",
//                 }}
//               >
//                 Courses
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={() => {
//                   setAct((act) => "Mentors");
//                 }}
//                 style={{
//                   color: act === "Mentors" ? "#215D4F" : "",
//                   opacity: act === "Mentors" ? "1" : "",
//                   fontWeight: act === "Mentors" ? "500" : "",
//                 }}
//               >
//                 Mentors
//               </li>
//               <li
//                 className="list-item hover:cursor-pointer opacity-50 font-normal"
//                 onClick={() => {
//                   setAct((act) => "Contact us");
//                 }}
//                 style={{
//                   color: act === "Contact us" ? "#215D4F" : "",
//                   opacity: act === "Contact us" ? "1" : "",
//                   fontWeight: act === "Contact us" ? "500" : "",
//                 }}
//               >
//                 Contact us
//               </li>

//               {!login ? (
//                 <>
//                   <li className="h-full">
//                     <a className=" hover:cursor-pointer login ">Login</a>
//                   </li>
//                   <li>
//                     <button className="signup py-1 px-3.5 ml-0 my-1">
//                       Sign Up
//                     </button>
//                   </li>{" "}
//                 </>
//               ) : (
//                 <>
//                   <button className="signup py-1 px-3.5 ml-0 my-1">
//                     Logout
//                   </button>
//                 </>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="flex lg:hidden flex-row flex-nowrap mt-2 mx-4 justify-between">
//         {/* left portion hamburger menu*/}
//         <div className="left flex items-center">
//         <Menu color="darkgreen" className="lg:hidden" onClick={()=>{
//           handle_isopn();
//         }}/>
//         </div>

//         {/* center logo image  */}
//         <div className=" border-1  w-auto md:w-1/5 flex items-center">
//           <img src={logo} alt="logo" className="h-7 sm:h-9 hover:cursor-pointer" />
//         </div>

//         {/* right side profile image and notification icon  */}
//         <div className="right w-1/5 flex lg:hidden  justify-end gap-2 sm:gap-7 items-center ">
//             <div className="relative">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="12"
//                 height="13"
//                 viewBox="0 0 12 13"
//                 fill="none"
//                 className="notification-circle" >
//                 <circle cx="6" cy="6.98535" r="6" fill="#215D4F"
//                 />
//               </svg>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
//                 height="27"
//                 viewBox="0 0 22 27"
//                 fill="none"
//               >
//                 <path
//                   d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
//                   fill="#215D4F"
//                   onClick={()=>{
//                     pop_up==="notification"? hadler_popup(""):hadler_popup("notification") ;
//                   }}
//                 />
//               </svg>
//             </div>
//             <img src={profile} alt="profile" onClick={()=>{
//              pop_up==="profile"? hadler_popup(""):hadler_popup("profile") ;
//             }}/>
//           </div>
//       </div>
//       <div className="relative">
//         {pop_up==="profile" && profile_}
//         {pop_up==="notification" && notification_}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
// import "../../assets/Header.css";
import "../CSS/Navbar.css";
import { useState } from "react";
import { Menu } from "lucide-react";
import { connect } from "react-redux";
import { openSidebar, closeSidebar } from "../redux/actions/sidebarActions.js";
import profile from "../Utils/Images/Ellipse 215.png";
import new_ from "../images/navbar/Ellipse 219.png";
import girl from "../images/navbar/girl.png";
import group from "../images/navbar/Group.png";


const Header = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
  const [act, setAct] = useState("Home");

  const toggleSidebar = () => {
    console.log("In click");
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };
  let login = true;

  const profile_ = (
    <ul
      className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between z-50"
      style={{ background: "#215d4f" }}
    >
      <li className="ite p-1">View Profile</li>
      <li className="ite p-1">Setting</li>
      <li className="ite p-1">Logout</li>
    </ul>
  );

  const notification_ = (
    <ul
      className="profile absolute right-4 top-0 text-white p-4 flex flex-col justify-between outline-none z-50"
      style={{ background: "#215d4f" }}
    >
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" />
        <span className="">
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" />
        <span className="">
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" />
        <span className="">
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" />
        <span className="">
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>

      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" className="invisible" />
        <span>
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" className="invisible" />
        <span>
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>
      <li className="notifiaction_ite p-1">
        <img src={new_} alt="new" className="invisible" />
        <span>
          We're excited to announce the launch of our new course, [Course Name]!
          This course is designed to help you [briefly describe the course
          objective or outcome].
          <span className="orange hover:cursor-pointer">View details</span>
        </span>
      </li>

      <li
        className="notifiaction_ite p-1 mt-40"
        style={{ background: "#215d4f" }}
      >
        <img
          src={girl}
          alt="girl"
          className="absolute left-0 w-full mt-64"
          style={{ background: "#215d4f" }}
        />
        <img src={group} alt="" className="absolute right-0 -mt-2 w-28" />
      </li>
    </ul>
  );

  const [pop_up, set_pop_up] = useState("");
  function hadler_popup(e) {
    set_pop_up(e);
    console.log(pop_up);
  }

  return (
    <>
      <div className="navbar  sm:px-5  w-full items-center justify-between pt-2 flex flex-wrap bg-white shadow-md font-poppins md:text-sm lg:text-lg">
        {/* left portion of navbar  */}
        <div className="left w-auto md:w-1/5 flex items-center px-2 ">
          {/* for screen smaller than 768px */}
          <div className="flex flex-col lg:hidden">
            <button onClick={toggleSidebar} className="yesterday">
              {<Menu />}
            </button>
          </div>

          <svg
            viewBox="0 0 68 43"
            className="w-9 h-9 am:w-12 sm:h-12 md:w-16 md:h-16 hover:cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.636695 11.3304L34.7232 0L67.1388 11.3304C68.1223 12.4779 68.0514 13.1205 67.1388 14.268L33.5536 26.8573L0.636695 14.268C-0.100874 13.0838 -0.316754 12.4384 0.636695 11.3304Z"
              fill="#215D4F"
            />
            <path
              d="M7.77408 16.9617L9.89439 17.6685L9.64495 34.655C10.6421 35.7845 11.0022 36.4465 11.3079 37.6738V41.6988C8.83424 42.7589 7.77408 42.4055 5.65376 41.6988V37.6737C6.04043 36.549 6.22252 35.924 7.31676 34.655L7.77408 16.9617Z"
              fill="#CB8461"
            />
            <path
              d="M16.2556 22.6169L33.5715 29.6847L51.5942 22.9703C54.0149 25.6228 54.8935 29.218 54.1738 33.4177C43.2477 34.5229 40.2381 37.249 33.9572 42.4066C25.6281 35.5245 21.2144 33.9185 13.6097 33.4177C13.0209 29.9548 14.0312 25.7851 16.2556 22.6169Z"
              fill="#CB8461"
            />
            <path
              d="M7.77492 16.962L28.4529 9.5144L29.9252 10.6615L9.89522 17.6688L7.77492 16.962Z"
              fill="#CB8461"
            />
            <ellipse
              cx="29.6841"
              cy="9.54092"
              rx="2.12032"
              ry="1.76693"
              fill="#CB8461"
            />
          </svg>
          <span className="text-teal-800 text-sm font-semibold sm:text-base md:text-lg">
            Edfling Courses
          </span>
        </div>

        {/* center portion of navbar  */}
        <div className="center w-2/4 hidden lg:flex">
          <ul className="nav-list flex justify-between items-center  w-full ">
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={() => {
                setAct((act) => "Home");
              }}
              style={{
                color: act === "Home" ? "#215D4F" : "",
                opacity: act === "Home" ? "1" : "",
                fontWeight: act === "Home" ? "500" : "",
              }}
            >
              Home
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={() => {
                setAct((act) => "Why us");
              }}
              style={{
                color: act === "Why us" ? "#215D4F" : "",
                opacity: act === "Why us" ? "1" : "",
                fontWeight: act === "Why us" ? "500" : "",
              }}
            >
              Why us
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={() => {
                setAct((act) => "Courses");
              }}
              style={{
                color: act === "Courses" ? "#215D4F" : "",
                opacity: act === "Courses" ? "1" : "",
                fontWeight: act === "Courses" ? "500" : "",
              }}
            >
              Courses
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={() => {
                setAct((act) => "Mentors");
              }}
              style={{
                color: act === "Mentors" ? "#215D4F" : "",
                opacity: act === "Mentors" ? "1" : "",
                fontWeight: act === "Mentors" ? "500" : "",
              }}
            >
              Mentors
            </li>
            <li
              className="list-item hover:cursor-pointer opacity-50 font-normal"
              onClick={() => {
                setAct((act) => "Contact us");
              }}
              style={{
                color: act === "Contact us" ? "#215D4F" : "",
                opacity: act === "Contact us" ? "1" : "",
                fontWeight: act === "Contact us" ? "500" : "",
              }}
            >
              Contact us
            </li>
          </ul>
        </div>

        {/* right portion of navbar  */}
        {!login ? (
          <div className="right  flex  justify-end items-center">
            <button className="text-teal-800 font-semibold ">Login</button>
            <button className="bg-teal-800 rounded-md text-white py-1 px-2 ml-5">
              Sign Up
            </button>
          </div>
        ) : (
          <div className=" flex justify-end gap-3 items-center px-2 ">
            <div className="">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
                  fill="#215D4F"
                  onClick={() => {
                    pop_up === "notification"
                      ? hadler_popup("")
                      : hadler_popup("notification");
                  }}
                />
                <circle cx="21" cy="8.98535" r="6" fill="#215D4F" 
                onClick={() => {
                  pop_up === "notification"
                    ? hadler_popup("")
                    : hadler_popup("notification");
                }} />
                <path
                  d="M19.984 10.7454C20.496 10.3027 20.8987 9.94002 21.192 9.65735C21.4907 9.36935 21.7387 9.07068 21.936 8.76135C22.1333 8.45202 22.232 8.14268 22.232 7.83335C22.232 7.51335 22.1547 7.26268 22 7.08135C21.8507 6.90002 21.6133 6.80935 21.288 6.80935C20.9733 6.80935 20.728 6.91068 20.552 7.11335C20.3813 7.31068 20.2907 7.57735 20.28 7.91335H19.4C19.416 7.30535 19.5973 6.84135 19.944 6.52135C20.296 6.19602 20.7413 6.03335 21.28 6.03335C21.8613 6.03335 22.3147 6.19335 22.64 6.51335C22.9707 6.83335 23.136 7.26002 23.136 7.79335C23.136 8.17735 23.0373 8.54802 22.84 8.90535C22.648 9.25735 22.416 9.57468 22.144 9.85735C21.8773 10.1347 21.536 10.4574 21.12 10.8254L20.76 11.1454H23.296V11.9054H19.408V11.2414L19.984 10.7454Z"
                  fill="white"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M21.9578 0.0994263H2.43976C1.09789 0.0994263 0.0121988 1.19732 0.0121988 2.53919L0 24.497L4.87952 19.6175H21.9578C23.2997 19.6175 24.3976 18.5196 24.3976 17.1777V2.53919C24.3976 1.19732 23.2997 0.0994263 21.9578 0.0994263ZM19.5181 14.738H4.87952V12.2982H19.5181V14.738ZM19.5181 11.0783H4.87952V8.63858H19.5181V11.0783ZM19.5181 7.4187H4.87952V4.97894H19.5181V7.4187Z"
                fill="#215D4F"
              />
            </svg>

            <img
              src={profile}
              alt="profile"
              onClick={() => {
                pop_up === "profile"
                  ? hadler_popup("")
                  : hadler_popup("profile");
              }}
            />
          </div>
        )}
      </div>

      <div className="relative">
        {pop_up === "profile" && profile_}
        {pop_up === "notification" && notification_}{" "}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

const mapDispatchToProps = {
  openSidebar,
  closeSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
