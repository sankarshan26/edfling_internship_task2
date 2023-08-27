import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Account from "./Components/Account";
import store from "./redux/store";
import { Provider } from "react-redux";
import Desktop67 from "./Components/Desktop67";

function App() {
  const [isopn, setIsopn] = React.useState(false);
  function handle_isopn(){
    setIsopn(!isopn);
    // console.log(isopn);
  }
  return (
    
    <Provider store={store}>
    <Navbar handle_isopn={handle_isopn}/>
     <Desktop67 isopn={isopn} handle_isopn={handle_isopn} />
    <Footer />
    </Provider>
  );
}

export default App;
