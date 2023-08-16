import React from 'react'

function BankAccont() {
  return (
    
        <form className="main-container_ rounded-2xl  h-screen min-h-fit  mt-1 flex flex-col justify-evenly px-8">
          <label for="fname" className="w-fit">
            Enter Account Details
          </label>
          <div className="flex flex-col h-4/5 min-h-fit justify-between">
          <div className="w-full flex items-center justify-between">
            <label for="fname" className="w-fit">
              Account Number
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter you account Number"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <label for="lname" className="w-fit">
              Re-Enter Account Number
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Re-enter account Number"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <label for="lname" className="w-fit">
              Bank Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter you Bank Name"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <label for="lname" className="w-fit">
              Branch Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter you Branch Name"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <label for="lname" className="w-fit">
              IFSC Code
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter you IFSC Code"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
    
          <div className="w-full flex items-center justify-between">
            <label for="lname" className="w-fit">
              Recipient Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter recipient name"
              className="border w:2/5 md:w-2/3 p-2 rounded-lg"
            />
          </div>
          <div className="mt-24 text-center sm:text-left">
          <input type="submit" value="Submit" className="btn px-16 py-2 ml-0 sm:ml-44 hover:cursor-pointer " /></div>
          </div>
        </form>
      
  )
}

export default BankAccont
