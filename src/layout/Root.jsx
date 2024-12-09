import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar/Navbar";
import Footer from "../page/Shared/Footer/Footer";

const Root = () => { 
    return (
        <div className="container mx-auto">
            {/* nav-bar amd header layout  */}
            <div>
                <Navbar></Navbar>
            </div>
            {/* all layout  */}
            <div>
                <Outlet></Outlet>
            </div> 
            {/* footer layout  */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
