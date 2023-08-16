import React from 'react'

function FundTransfer() {
  return (
    <form className="main-container_ rounded-2xl  h-screen min-h-fit  mt-1 flex flex-col justify-evenly px-8">
      <label for="fname" className="w-fit">
        Enter Benificiary Bank Details
      </label>
      <div className="flex flex-col h-4/5 min-h-fit justify-between">
      <div className="w-full flex items-center justify-between">
        <label for="fname" className="w-fit mr-2">
          Benificiary Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Enter benificiary name"
          className="border w:2/5 md:w-2/3 p-1 md:p-2 rounded-lg"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label for="lname" className="w-fit mr-2">
         Account Number
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter account Number"
          className="border w:2/5 md:w-2/3 p-2 rounded-lg"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label for="lname" className="w-fit mr-2">
          Bank Name
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter you bank Name"
          className="border w:2/5 md:w-2/3 p-2 rounded-lg"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label for="lname" className="w-fit mr-2">
        Transaction Amount
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter transaction amount"
          className="border w:2/5 md:w-2/3 p-2 rounded-lg"
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <label for="lname" className="w-fit mr-2">
          Transaction Type
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter transaction Type"
          className="border w:2/5 md:w-2/3 p-2 rounded-lg"
        />
      </div>

      <div className="w-full flex items-center justify-between">
        <label for="lname" className="w-fit">
          Purpose
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter purpose"
          className="border w:2/5 md:w-2/3 p-2 rounded-lg"
        />
      </div>
      <div className="mt-24 text-center md:text-left">
      <input type="submit" value="Confirm" className="btn px-8 md:px-16 py-2 ml-0 md:ml-44 hover:cursor-pointer" /></div>
      </div>
    </form>
  );
}

export default FundTransfer
