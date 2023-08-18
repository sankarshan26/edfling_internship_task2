import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Account from "./Components/Account";
import Desktop67 from "./Components/Desktop67";

function App() {
  const [isopn, setIsopn] = React.useState(false);
  function handle_isopn(){
    setIsopn(!isopn);
    // console.log(isopn);
  }
  return (
    
    <>
    <Navbar handle_isopn={handle_isopn}/>
     <Desktop67 isopn={isopn} handle_isopn={handle_isopn} />
    <Footer />
    </>
  );
}

export default App;
