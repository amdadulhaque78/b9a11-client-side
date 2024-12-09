import { useContext } from "react";
import { authContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protect = ({ children }) => {
    const { user, loader } = useContext(authContext);
    const location = useLocation();  
 
    if (loader) {
        return <span className="loading loading-bars loading-lg "></span> 
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Protect;
