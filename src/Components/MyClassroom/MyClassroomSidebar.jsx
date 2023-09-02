import React from 'react';
import ellip from "../../images/Desktop67/Ellipse 218.png";
import Courses from "../MyClassroom/MyClassroom_Images/Courses.png";
import Leaderboard from "../MyClassroom/MyClassroom_Images/Leaderboard.png";
import Course_Pause from "../MyClassroom/MyClassroom_Images/Course_Page.png";
import Ask_Doubts from "../MyClassroom/MyClassroom_Images/Ask_Doubt.png";
import Events from "../MyClassroom/MyClassroom_Images/Events.png";
import Notes from "../MyClassroom/MyClassroom_Images/Notes.png";
import Certificates from "../MyClassroom/MyClassroom_Images/Certificate.png";
import Placed_Edflinger from "../MyClassroom/MyClassroom_Images/Placed_Edflinger.png";
import Sidebar_img from "../MyClassroom/MyClassroom_Images/sidebar-img.png";
import Sidebar_img2 from "../MyClassroom/MyClassroom_Images/sidebar-img2.png";
import { useState } from 'react';
import { connect } from "react-redux" ;

function MyClassroomSidebar({ act_st,  handle_act_st,  act_sub_st,  handle_sub_act_st,}) {
  return (
    <div className='sidebar hidden lg:flex lg:flex-col relative' style={{"max-height":"240vh"}}>
      <div className="sidebar_heading relative w-fit px-4 py-4 mt-4 mx-8">
        <img src={ellip} alt="ellip" className="ellip1 absolute" style={{"width":"40px","height":"40px"}} />
        <img src={ellip} alt="ellip" className="ellip2 absolute" style={{"width":"40px","height":"40px","margin-left":"20px"}} />
        My&nbsp;Classroom
      </div>


      <div className="flex-1 flex flex-col justify-between ml-8">
      <ul className="mt-8 w-fit flex flex-col gap-5">
        <li
          className={
            act_st === "Courses"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Courses");
            handle_sub_act_st("");
          }}
        >
          <img src={Courses} className="inline mr-5 w-5" alt="dashboard" />
          Courses
        </li>
        <li
          className={
            act_st === "Leaderboard"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Leaderboard");
            handle_sub_act_st("");
          }}
        >
          <img src={Leaderboard} className="inline mr-5 w-5" alt="dashboard" />
          Leaderboard
        </li>
        <li
          className={
            act_st === "Course Pause"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Course Pause");
            handle_sub_act_st("");
          }}
        >
          <img src={Course_Pause} className="inline mr-5 w-5" alt="dashboard" />
          Course Pause
        </li>
        <li
          className={
            act_st === "Ask Doubts"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Ask Doubts");
            handle_sub_act_st("");
          }}
        >
          <img src={Ask_Doubts} className="inline mr-5 w-5" alt="dashboard" />
          Ask Doubts
        </li>
        <li
          className={
            act_st === "Events"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Events");
            handle_sub_act_st("");
          }}
        >
          <img src={Events} className="inline mr-5 w-5" alt="dashboard" />
          Events
        </li>
        <li
          className={
            act_st === "Notes"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Notes");
            handle_sub_act_st("");
          }}
        >
          <img src={Notes} className="inline mr-5 w-5" alt="dashboard" />
          Notes
        </li>
        <li
          className={
            act_st === "Certificates"
              ? "siderbar_list_item py-2 px-3 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-2 px-3 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Certificates");
            handle_sub_act_st("");
          }}
        >
          <img src={Certificates} className="inline mr-5  w-5" alt="dashboard" />
          Certificates
        </li>
        <li
          className={
            act_st === "Placed Edflinger"
              ? "siderbar_list_item py-3 px-2 rounded-lg one hover:cursor-pointer"
              : "siderbar_list_item py-3 px-2 rounded-lg hover:cursor-pointer"
          }
          onClick={() => {
            handle_act_st("Placed Edflinger");
            handle_sub_act_st("");
          }}
        >
          <img src={Placed_Edflinger} className="inline mr-5 w-5" alt="dashboard" />
          Placed Edflinger
        </li>
      </ul>
      
      </div>
        <img src={Sidebar_img2} alt="" className='right-0 z-40 absolute bottom-0'/>
        <img src={Sidebar_img} alt="Sidebar_img" className='right-0 absolute bottom-0 z-50 border-6 border-white'/>
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(MyClassroomSidebar) ;
