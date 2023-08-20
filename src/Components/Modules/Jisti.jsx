import React,{useRef} from 'react';
import "../../CSS/Modules/Jisti.css";
import save from "../../images/Desktop67/save.png"
function Jisti() {

    const data =[{ id : 1, Class :"one",  clsec:"All Sections" ,mid:"23071680", tpc:"C1#", date: "07/16/2023", duration:"4 Min", stj:"10 Min", stjb : (<button className="text-sm btn-search px-3 py-1 rounded-lg">Closed</button>) },

{ id : 2, Class :"one", clsec:"All Sections" ,mid:"23071681", tpc:"C2#", date: "06/24/2023", duration:"30 Min", stj:"10 Min", stjb : (<button className="text-sm btn-search px-3 py-1 rounded-lg">Closed</button>) },
]

const hiddenFileInput = useRef(null);

const click_handler = event => {
  hiddenFileInput.current.click();
};
const handleChange = event => {
  const fileUploaded = event.target.files[0];
};

return (
<div className="flex flex-col mt-12 pl-8">
        <div className="cont-header rounded-lg text-white flex p-6 md:p-8 md:px-6 items-center text-sm md:text-xl font-medium vclass">
          Virtual Class
        </div>
        <div className=" w-full justify-evenly detailed flex flex-wrap flex-row md:flex-row mt-6 ">
          <div className="AddClass flex-wrap flex-col flex  xl:flex-nowrap  mr-4 p-4 h-full w-4/5 2xl:w-fit">
            <div className="heading_ font-medium text-center text-xl">
              Add Virtual Class
            </div>
            
              <ul className="details_list1 border border-black  rounded-xl w-full mt-4 pl-6 py-4 grow">
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading"> Select Class</label>
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/>
                </li>

                <li className="my-3 flex-col flex">
                  <label className="list-item-heading"> Select Section</label>
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/>
                </li>

                <li className="my-3 flex-col flex">
                  <label className="list-item-heading"> Teacher</label>
                  <div className="mt-1">
                  <input type="radio" value="Teacher1" name="Teacher"/>Teacher 1</div>
                  <div className="mt-1">
                  <input type="radio" value="Teacher2" name="Teacher"/>Teacher 2</div>
                  <div className="mt-1">
                  <input type="radio" value="Teacher3" name="Teacher"/>Teacher 3</div>
                  <div className="mt-1">
                  <input type="radio" value="Teacher4" name="Teacher" />Teacher 4</div>
                </li>
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Topic</label>
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/>
                </li>
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Description</label>
                  <input type="text-box" className="w-4/5 h-20 border border-black rounded-lg mt-1" />
                </li>

                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Date of Meeting</label>
                  <input type="date" className="w-4/5 h-7 border border-black rounded-lg mt-1 p-1" />
                </li>
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Meeting Time</label>
                  <input type="time" className="w-4/5 h-7 border border-black rounded-lg mt-1 p-1" />
                </li>

                <li className=' my-3 '>
                    <span className='list-item-heading'> Attach file
                  <div className="w-4/5 flex justify-end items-center border border-black rounded-2xl h-7" ><button onClick={click_handler} className='browse-btn'>
                    Browse
                  </button></div></span>
                    <input type="file" style={{display : 'none'}} ref={hiddenFileInput}
                    onChange={handleChange}/>
                  </li>
              </ul>
           
          </div>
          <div className="VirtualClass flex flex-col ">
            <div className="heading_ font-medium flex justify-between text-xl"><span>Virtual Class List</span><button className="text-sm btn-search px-4 rounded-lg">Search</button></div>

            <div className="my-8  border border-black rounded-xl">
        <table className='w-full '>
            
              
              <tr>
                <th className='font-normal small_font'>#</th>
                <th className='font-normal small_font'>Class</th>
                <th className='font-normal displayno'>Class(Sec)</th><th className='font-normal displayno'>Meeting Id</th>
                <th className='font-normal small_font'>Topic</th>
                <th className='font-normal small_font'>Date</th> <th className='font-normal small_font'>Duration</th> <th className='font-normal _displayno_'>Start/Join</th> <th className='font-normal displayno_'>Start/Join Before</th></tr>
            
            <tbody>
            {data.map((val, key) => {
                return (
                    <tr className='tr_' key={key}>
                        <td className='text-center font-normal py-2 px-2 small_font'>{val.id}</td>
                        <td className='text-center font-normal py-2 px-2 small_font'>{val.Class}</td>
                        <td className='text-center font-normal py-2 px-2 displayno'>{val.clsec}</td>
                        <td className='text-center font-normal py-2 px-2 displayno'>{val.mid}</td>
                        <td className='text-center font-normal py-2 px-2 small_font'>{val.tpc}</td>
                        <td className='text-center font-normal py-2 px-2 small_font'>{val.date}</td>
                        <td className='text-center font-normal py-2 px-2 small_font'>{val.duration}</td>
                        <td className='text-center font-normal py-2 px-2 _displayno_'>{val.stj}</td>
                        <td className='text-center font-normal py-2 px-2 displayno_'>{val.stjb}</td>
                    </tr>)
            })}
            </tbody>
        </table>
    </div>
   

            <div className="heading_ font-medium text-left text-xl my-4">
              Add Meeting
            </div>
            <div className='border border-black rounded-xl flex flex-col h-full'>
            <div className="flex justify-between flex-row flex-wrap h-full mt-6  p-4">
                <div className="flex flex-col justify-between">
                    <div>
                <label className="list-item-heading my-3">Member Type</label>
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/> </div>
                  <div>
                <label className="list-item-heading my-3">Topic</label> <br />
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/> </div>
                  
                  <div>
                <label className="list-item-heading my-3">Date of Meeting</label>
                  <input type="date" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/> </div>

                  <div>
                <label className="list-item-heading my-3">Meeting Time</label>
                  <input type="time" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/> </div>

                  <div>
                <label className="list-item-heading my-3">Meeting Duration</label>
                  <input type="text" className="w-4/5 border border-black rounded-xl mt-1 h-7 p-2"/> </div>

                  <div>
                    <span className='list-item-heading'> Attach file
                  <div className="w-4/5 flex justify-end items-center border border-black rounded-2xl h-7" ><button onClick={click_handler} className='browse-btn'>
                    Browse
                  </button></div></span>
                    <input type="file" style={{display : 'none'}} ref={hiddenFileInput}
                    onChange={handleChange}/>
                  </div>

                </div>
                <div className="flex flex-col lg:w-2/6 ">
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Member</label>
                  <input type="text" className=" border border-black rounded-xl mt-1 h-7 p-2"/>
                </li>
                <li className="my-3 flex-col flex">
                  <label className="list-item-heading">Description</label>
                  <input type="text-box" className="h-20 border border-black rounded-lg mt-1" />
                </li>
                </div>
                      
            </div>
            <div className='text-center w-full'>            <button className='save-btn mt-24 mb-10'><img src={save} alt="save" className='inline mr-2 w-5'/>Save</button></div>

            </div>
            
            
          </div>
        </div>
      </div>
)
}

export default Jisti
