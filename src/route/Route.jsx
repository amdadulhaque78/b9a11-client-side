import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import NotFound from "../page/Shared/Not Found/NotFound";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";  
import AddJob from "../page/AddJob/AddJob";
import AllJob from "../page/AllJob/AllJob"; 
import ApplyJob from "../page/ApplyJob/ApplyJob";
import MyJob from "../page/MyJob/MyJob";
import Blog from "../page/Blog/Blog";
import ViewPage from "../page/ViewPage/ViewPage";
import Protect from "../protect/Protect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addjob",
                element: <Protect>
                    <AddJob></AddJob>
                </Protect>,
            },
            {
                path: "/alljob",
                element: <AllJob></AllJob>,
            },
            {
                path: "/applyjob",
                element: <Protect>
                    <ApplyJob></ApplyJob>
                </Protect>,
                loader: () => fetch(`https://online-job-bd-server-site.vercel.app/applys`)
            },
            {
                path: "/myjob",
                element: <Protect>
                    <MyJob></MyJob>
                </Protect>,

            },
            {
                path: "/viewpage/:id",
                element: <Protect>
                    <ViewPage></ViewPage>
                </Protect>,
                loader: () => fetch(`https://online-job-bd-server-site.vercel.app/job`)
            },
            {
                path: "/blog",
                element: <Protect>
                    <Blog></Blog>
                </Protect>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
        ]
    },
]);

export default router;
