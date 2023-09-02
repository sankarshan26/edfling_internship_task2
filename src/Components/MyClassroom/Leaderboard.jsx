import React from "react";
import { useState } from "react";
import leadermain from "./MyClassroom_Images/Leaderboard_main.png";
import top from "./MyClassroom_Images/top-position.png";
import "../../CSS/MyClassroom/Leaderboard.css";
import topcenter from "./MyClassroom_Images/LeaderboardCenter/top-center.png";
import lf from "./MyClassroom_Images/LeaderboardCenter/left-flap.png";
import rf from "./MyClassroom_Images/LeaderboardCenter/right-flap.png";
import Student1 from "./MyClassroom_Images/toppersbanner/student1.png";
import msg from "./MyClassroom_Images/message.png"
import topprboard from "./MyClassroom_Images/toppersbanner/topprboard.png"
import rowarr from "./MyClassroom_Images/rowarrow.png"



function Leaderboard() {
  const [act_cat, setAct_cat] = useState("Intro to Python");
  function handl(e) {
    setAct_cat(e);
  }
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className="rounded-xl pl-2 sm:pl-12 relative"
        style={{
          background:
            "linear-gradient(93.39deg, #2C9D82 -8.08%, #FFFF1C 139.96%)",
        }}
      >
        <div
          className="heading py-3 z-20 mt-2"
          style={{ color: "white", "font-weight": "500", "font-size": "24px" }}
        >
          Leaderboard
        </div>

        <div
          className="opacity-70 z-20"
          style={{ color: "white", "font-size": "18px", "line-height": "30px" }}
        >
          Compare with your batchmates and get a chance to emerge on top of our
          leaderboard
        </div>

        <div className="text-white text-2xl font-medium py-3 z-20">
          Guidelines
        </div>
        <ul className="flex flex-row text-white ml-4 mb-4 z-20 gap-10 sm:gap-32">
          <li>
            <ul
              className="list-disc font-"
              style={{ "font-size": "18px", "line-height": "1.8" }}
            >
              <li className="z-20 relative">Feedback and Transparency</li>
              <li className="z-20 relative">Privacy</li>
              <li className="z-20 relative">Consistency</li>
            </ul>
          </li>
          <li>
            <ul
              className="list-disc"
              style={{ "font-size": "18px", "line-height": "1.8" }}
            >
              <li className="z-20 relative">Fairness and equality</li>
              <li className="z-20 relative">Points Calculation</li>
              <li className="z-20 relative">Clear Rules and Guidelines</li>
            </ul>
          </li>
        </ul>

        <img
          src={leadermain}
          alt="leader-main"
          className="absolute right-10  z-10 opacity-60 md:opacity-100"
          style={{ bottom: "0rem" }}
        />
        <img
          src={top}
          alt="leader-main-top"
          className="absolute z-10 opacity-60 md:opacity-100"
          style={{ bottom: "7.4rem", right: "2.85rem" }}
        />
      </div>

      <div
        style={{ "font-family": "Poppins", "font-size": "20px" }}
        className="text-center sm:text-left"
      >
        Select Module to Check Leaderboard
      </div>

      <ul
        className="flex flex-wrap flex-row whitespace-nowrap"
        style={{ gap: "10px" }}
      >
        <li
          className={act_cat === "Intro to Python" ? "actv" : "not_actv"}
          onClick={() => {
            handl("Intro to Python");
          }}
        >
          Intro to Python
        </li>
        <li
          className={
            act_cat === "Python function & loops" ? "actv" : "not_actv"
          }
          onClick={() => {
            handl("Python function & loops");
          }}
        >
          Python function & loops
        </li>
        <li
          className={act_cat === "Project1" ? "actv" : "not_actv"}
          onClick={() => {
            handl("Project1");
          }}
        >
          Project1
        </li>
        <li
          className={act_cat === "Project2" ? "actv" : "not_actv"}
          onClick={() => {
            handl("Project2");
          }}
        >
          Project2
        </li>
      </ul>

      <div className="relative mt-4">
        <div className="flex justify-center">
          <img src={topcenter} alt="topcenter" />
        </div>

        <div className="flex justify-center mt-4 ">
          <img src={lf} alt="left-flap" width={"100px"} />
          <span
            className="font-medium px-6 md:px-32 py-3 rounded-2xl whitespace-nowrap absolute"
            style={{
              background: "rgba(255, 204, 91, 1)",
              color: "rgba(33, 93, 79, 1)",
              "font-family": "Poppins",
            }}
          >
            Our Top Performer
          </span>
          <img src={rf} alt="right-flap" width={"100px"}  className=" ml-12 md:ml-64 -mt-0" />
        </div>

        {/* Top Performers Banner  */}

        <div className="flex justify-center text-center">
            <img src={topprboard} alt="banner" className="w-full" style={{"max-width":"928px"}} />
        </div>
      </div>

      <div className="relative w-full overflow-x-auto">
        <table className="border-spacing-1.5 w-full" >
            <thead style={{"background":"rgba(33, 93, 79, 1)", "color":"white"}} className="w-full">
              <th className="font-light" >Rank</th>
              <th className="font-light" style={{"padding":"1rem 20px"}}>Name</th>
              <th className="font-light" style={{"padding":"1rem 20px"}}>College</th>
              <th className="font-light" style={{"padding":"1rem 20px"}}>Score</th>
              <th className="font-light" style={{"padding":"1rem 20px"}}>{"  "}</th>
            </thead>

            <tbody>
              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>4<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>5<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>6<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>7<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>8<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>9<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>10<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>11<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>12<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

              <tr>
                <td className="text-center font-bold text-3xl">
                  <span style={{"color":"rgba(33, 93, 79, 1)"}}>13<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span ><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>

            
              <tr style={{"line-height":"30px"}}>
                <td className="text-center font-bold text-3xl">
                  
                  <span style={{"color":"rgba(33, 93, 79, 1)"}} className="whitespace-nowrap"><img src={rowarr} alt="row-arrow" className="inline w-4" />80<sub>th</sub></span></td>
                <td style={{"padding":"1rem 20px"}} className="text-center">
                  <span className=""><img src={Student1} alt="Student's Image" className="inline w-12 rounded-3xl" /> <span>Mujeeb</span></span>
                </td>

                <td  className="text-center">
                  <span>AKGEC,GZB</span>
                </td>

                <td  className="text-center">
                  <span>2650</span>
                </td>
                <td  >
                  <div className="flex justify-center items-center">
                  <img src={msg} alt="message-icon" /></div>
                </td>
              </tr>
            </tbody>
        </table>
      </div>

      <div className="flex justify-center " style={{"color":"rgba(33, 93, 79, 1)"}}> 
      <span className="font-medium" style={{"font-family":"Poppins"}}>*Note{'\u00A0'}:</span><span className="font-normal ">{'\u00A0'}"The difference between ordinary and extraordinary is that litle extra." -{'\u00A0'}Jimmy{'\u00A0'}Johnson</span>

      </div>
    </div>
  );
}

export default Leaderboard;
