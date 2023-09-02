import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import Sidebar from "./MyClassroomSidebar.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Small from "./MyClassroomSmallSidebar.jsx"


function MyClassroom({isopn, handle_isopn,isSidebarOpen}) {

    const [act_st, setAct_st] = useState("Leaderboard");
  function handle_act_st(st) {
    setAct_st(st);
  }

  const [act_sub_st, setAct_sub_st] = useState("");
  function handle_sub_act_st(sub_st) {
    setAct_sub_st(sub_st);
  }

  return (
    <div className="main-container mt-12 mx-3 lg:mx-10 flex flex-row justify-between gap-3 h-fit ">
        <Sidebar act_st={act_st} handle_act_st={handle_act_st} act_sub_st={act_sub_st} handle_sub_act_st={handle_sub_act_st} />
        {/* <div className="relative"> */}
        {
          isSidebarOpen && <Small act_st={act_st} handle_act_st={handle_act_st} act_sub_st={act_sub_st} handle_sub_act_st={handle_sub_act_st} isopn={isopn} handle_isopn={handle_isopn} /> 
        }
        {/* </div> */}
        {act_st === "Leaderboard" && <Leaderboard />}
    </div>
  )
}

const mapStateToProps = (state) => ({
    isSidebarOpen: state.sidebar.isSidebarOpen,
  });
export default connect(mapStateToProps)(MyClassroom);

