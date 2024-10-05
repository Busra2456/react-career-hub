import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";



const Root = () => {
      return (
            <div className="max-w-6xl mx-auto" >
               <div>
               <Header></Header>
               <Outlet></Outlet> 
               </div>

             <Footer></Footer>     
            </div>
      );
};

export default Root;
