import React from "react";
import "../../CSS/Settings/LanguageSettings.css";
import data from "../Data/Language_List";
import search from "../../Utils/Images/search.png";
import down_arrow from "../../Utils/Images/Down_Arrow.png";
import default_ from "../../images/Settings/default_.jpg";
import setup from "../../images/Settings/setup.png";
import export_ from "../../images/Settings/export.png";
import upload_ from "../../images/Settings/upload.png";
import remove_ from "../../images/Settings/remove.png";
import { PanelBottom } from "lucide-react";

function Language_list() {
  return (
    <div className="flex flex-col px-3 ">
      <div className="top-heading mt-6 mb-2">Add Language</div>
      <div className="upload_file_content  flex flex-col">
        <div className="flex flex-col justify-center gap-2 sm:gap-0 sm:flex-row sm:justify-between items-center  border border-black px-4 py-2 rounded-xl">
          <div className="border border-black rounded-2xl  px-4 py-1">
            <select
              id="cars"
              placeholder="Select Language"
              className="w-44 focus:outline-none"
            >
              <option value="Select Language" selected>
                Select Language
              </option>
              <option value="Langauge 1">Language 1</option>
              <option value="Language 2">Language 2</option>
              <option value="Langauge 3">Language 3</option>
              <option value="Language 4">Language 4</option>
            </select>
          </div>

          <div className="text-center">
            {" "}
            <button className="save-file-btn" style={{ color: "white" }}>
              Save{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="top-heading mb-2 mt-6 flex justify-between items-center">
        {/* {" "} */}
        <div>Language List</div>
        <div className=" border-b-2 border-black w-2/6 flex flex-row justify-betweeen items-center">
          <div>
            <img src={search} alt="search-img" className="rounded-xls" />
          </div>
          <div
            className="flex-1 text-center"
            style={{ color: "grey", "font-size": "16px" }}
          >
            Search
          </div>
        </div>
      </div>

      <div className=" relative overflow-x-auto border-2 border-black rounded-xl p-4">
        <table className="w-full table-auto">
          <thead className="w-full border border-black" >
            <tr
              className=""
              style={{ background: "rgba(33, 93, 79, 1)", width: "100%" }}
            >
              <th className="px-2 text-center ">
                LANGUAGE
                <img src={down_arrow} alt="" className="inline" />
              </th>
              <th className="px-2 text-center">
                NATIVE
                <img src={down_arrow} alt="" className="inline" />
              </th>
              <th className="px-2 text-center">
                UNIVERSAL
                <img src={down_arrow} alt="" className="inline" />
              </th>
              <th className="px-2 text-center">
                STATUS
                <img src={down_arrow} alt="" className="inline" />
              </th>
              <th className="px-2 text-center">
                ACTION
                <img src={down_arrow} alt="" className="inline" />
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data.map((val, key) => {
              return (
                <tr className="border border-black" key={key}>
                  <td className="text-center font-normal py-2 px-2 small_font ">
                    {val.Language}
                  </td>
                  <td className="text-center font-normal py-2 px-2 small_font">
                    {val.Native}
                  </td>
                  <td className="text-center font-normal py-2 px-2">
                    {val.Universal}
                  </td>
                  <td className="text-center font-normal py-2 px-2 ">
                    {val.Status}
                  </td>

                  <td className="text-center font-normal py-2 px-2 flex flex-col min-w-fit overflow-x-auto gap-2">
                    {!val.Default && (
                      <button className="border border-black rounded-xl text-sm font-medium px-2 py-1 w-full">
                        MARK&nbsp;AS&nbsp;DEFAULT
                      </button>
                    )}

                    {val.Default && (
                      <>
                        <div
                          className="flex justify-between min-w-fit gap-3"
                          style={{ "font-size": "14px" }}
                        >
                          <button
                            style={{ background: "rgba(33, 93, 79, 1)" }}
                            className="flex items-center justify-center rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit gap-2 font-semibold"
                          >
                            <img
                              src={default_}
                              alt="default"
                              className="inline"
                              style={{ width: "24px", height: "15px" }}
                            />{" "}
                            DEFAULT
                          </button>

                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={setup}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />{" "}
                            SETUP
                          </button>
                        </div>
                        <div
                          className="flex justify-between min-w-fit gap-3"
                          style={{ "font-size": "14px" }}
                        >
                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={export_}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />
                            EXPORT
                          </button>

                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={upload_}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />
                            UPLOAD
                          </button>
                        </div>
                      </>
                    )}

{!val.Default && (
                      <>
                        <div
                          className="flex justify-between min-w-fit gap-3"
                          style={{ "font-size": "14px" }}
                        >

                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={setup}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />{" "}
                            SETUP
                          </button>
                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={export_}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />
                            EXPORT
                          </button>
                        </div>
                        <div
                          className="flex justify-between min-w-fit gap-3"
                          style={{ "font-size": "14px" }}
                        >
                          

                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={upload_}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />
                            UPLOAD
                          </button>

                          <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden px-2 border border-black w-2/5 min-w-fit font-semibold">
                            <img
                              src={remove_}
                              alt="default"
                              className="inline rounded-xl"
                              style={{ width: "24px", height: "15px" }}
                            />
                            REMOVE
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="border border-black rounded-xl flex justify-center flex-col pl-2 sm:pl-10 pt-4">
        <div
          className="heading w-full "
          style={{ color: "black", "font-weight": "800" }}
        >
          System Info
        </div>

        <ul className="w-full mt-4 sm:w-4/5 lg:w-3/5 flex flex-col pr-8 sm:pr-0 sm:pl-8 gap-3">
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between">
            <span>Software Version</span>
            <span>123</span>
          </li>
          <li className="flex w-full justify-between mb-2">
            <span>Software Version</span>
            <span>123</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Language_list;
