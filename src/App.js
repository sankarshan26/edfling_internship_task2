import React from "react";

import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Account from "./Components/Account";
import store from "./redux/store";
import { Provider } from "react-redux";
import Desktop67 from "./Components/Desktop67";
import MyClassroom from "./Components/MyClassroom/MyClassroom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [isopn, setIsopn] = React.useState(false);
  function handle_isopn(){
    setIsopn(!isopn);
  }
  return (
    
    <Provider store={store}>
      
    <Navbar  handle_isopn={handle_isopn}/>
    {/* <MyClassroom isopn={isopn} handle_isopn={handle_isopn}/> */}
     {/* <Desktop67 isopn={isopn} handle_isopn={handle_isopn} /> */}
     <Dashboard isopn={isopn} handle_isopn={handle_isopn}/>
    <Footer />
    </Provider>
  );
}

export default App;
