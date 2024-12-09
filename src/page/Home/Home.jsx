import Silder from "../../components/Slider/Silder";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [jobData, setJobData] = useState([])
    console.log(jobData)
    useEffect(()=>{
        const getData = async() => {
            const {data} = await axios('https://online-job-bd-server-site.vercel.app/job')
            setJobData(data)
        } 
        getData()
    },[])
    return (
        <div>
            {/* this is slider  */}
            <div>
                <Silder></Silder>
            </div>

            {/* this is Job by category tab */}
            <div className="mt-10">
                <div className="text-center my-3 space-y-1">
                    <h2 className="text-3xl font-bold">Job By Category</h2>
                    <p className="text-base font-semibold">Diverse Paths, One Destination: Find Your Dream Job by Category!</p>
                </div>
                <div className="text-center my-3">
                    <Tabs>
                        <TabList>
                            <Tab>All Job</Tab>
                            <Tab>On-Site Job</Tab>
                            <Tab>Remote Job</Tab>
                            <Tab>Hybrid</Tab>
                            <Tab>Part-Time</Tab>
                        </TabList>

                        <div className="my-10">
                            <TabPanel>
                                <div className=" flex flex-wrap gap-5 px-2">
                                    {
                                        jobData.map(job =>  <div key={job._id} className="w-[600px] border-2 p-1 space-y-3">
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3 ">
                                            <h2 className="text-base "><span className="text-base font-medium">Name of Job Advertiser :</span> {job.User_Name}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Title :</span> {job.Job_Title}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium">Job Posting Date :</span> {new Date(job.Post_Date).toLocaleDateString()}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Application Deadline :</span> {new Date(job.Deadline_date).toLocaleDateString()}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium"> Salary Range :</span> {job.Minmum} - {job.Mixmum}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Applicants Number :</span> {job.Job_Applicants_Number}</h2>
                                        </div>
                                        <Link to={`/viewpage/${job._id}`}><button className="btn bg-green-500 text-white flex justify-end">View Details</button></Link>
                                    </div>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className=" flex flex-wrap gap-5 px-2">
                                    {
                                        jobData.filter(j => j.Job_Category === 'On-Site Job').map(job =>  <div key={job._id} className="w-[600px] border-2 p-1 space-y-3">
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3 ">
                                            <h2 className="text-base "><span className="text-base font-medium">Name of Job Advertiser :</span> {job.User_Name}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Title :</span> {job.Job_Title}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium">Job Posting Date :</span> {new Date(job.Post_Date).toLocaleDateString()}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Application Deadline :</span> {new Date(job.Deadline_date).toLocaleDateString()}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium"> Salary Range :</span> {job.Minmum} - {job.Mixmum}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Applicants Number :</span> {job.Job_Applicants_Number}</h2>
                                        </div>
                                        <Link to={`/viewpage/${job._id}`}><button className="btn bg-green-500 text-white flex justify-end">View Details</button></Link>
                                    </div>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className=" flex flex-wrap gap-5 px-2">
                                    {
                                        jobData.filter(j => j.Job_Category === 'Remote Job').map(job =>  <div key={job._id} className="w-[600px] border-2 p-1 space-y-3">
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3 ">
                                            <h2 className="text-base "><span className="text-base font-medium">Name of Job Advertiser :</span> {job.User_Name}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Title :</span> {job.Job_Title}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium">Job Posting Date :</span> {new Date(job.Post_Date).toLocaleDateString()}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Application Deadline :</span> {new Date(job.Deadline_date).toLocaleDateString()}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium"> Salary Range :</span> {job.Minmum} - {job.Mixmum}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Applicants Number :</span> {job.Job_Applicants_Number}</h2>
                                        </div>
                                        <Link to={`/viewpage/${job._id}`}><button className="btn bg-green-500 text-white flex justify-end">View Details</button></Link>
                                    </div>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className=" flex flex-wrap gap-5 px-2">
                                    {
                                        jobData.filter(j => j.Job_Category === 'Hybrid').map(job =>  <div key={job._id} className="w-[600px] border-2 p-1 space-y-3">
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3 ">
                                            <h2 className="text-base "><span className="text-base font-medium">Name of Job Advertiser :</span> {job.User_Name}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Title :</span> {job.Job_Title}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium">Job Posting Date :</span> {new Date(job.Post_Date).toLocaleDateString()}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Application Deadline :</span> {new Date(job.Deadline_date).toLocaleDateString()}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium"> Salary Range :</span> {job.Minmum} - {job.Mixmum}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Applicants Number :</span> {job.Job_Applicants_Number}</h2>
                                        </div>
                                        <Link to={`/viewpage/${job._id}`}><button className="btn bg-green-500 text-white flex justify-end">View Details</button></Link>
                                    </div>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className=" flex flex-wrap gap-5 px-2">
                                    {
                                        jobData.filter(j => j.Job_Category === 'Part-Time').map(job =>  <div key={job._id} className="w-[600px] border-2 p-1 space-y-3">
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3 ">
                                            <h2 className="text-base "><span className="text-base font-medium">Name of Job Advertiser :</span> {job.User_Name}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Title :</span> {job.Job_Title}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium">Job Posting Date :</span> {new Date(job.Post_Date).toLocaleDateString()}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Application Deadline :</span> {new Date(job.Deadline_date).toLocaleDateString()}</h2>
                                        </div>
                                        <div className="flex lg:flex-row flex-col items-center gap-2 px-1 space-y-3">
                                            <h2 className="text-base "><span className="text-base font-medium"> Salary Range :</span> {job.Minmum} - {job.Mixmum}</h2>
                                            <h2 className="text-base "><span className="text-base font-medium">Job Applicants Number :</span> {job.Job_Applicants_Number}</h2>
                                        </div>
                                        <Link to={`/viewpage/${job._id}`}><button className="btn bg-green-500 text-white flex justify-end">View Details</button></Link>
                                    </div>)
                                    }
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>


            {/* extera section 1  */}
            <div className="my-10">
                <div className="text-center my-3 space-y-1">
                    <h2 className="text-3xl font-bold">Online Job BD Team</h2>
                    <p className="text-base font-semibold">Empowering Careers, Building Futures: Together, Were Online Job BD Team!</p>
                </div>
                <div className="my-3">
                    <div className="grid lg:grid-cols-3 grid-cols-1 space-y-2">
                        <div className="lg:w-[450px] w-[300px] mx-auto border-2">
                            <img src="https://i.ibb.co/FgwSXF5/team1.jpg" alt="" />
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-semibold">John Smith</h2>
                                <p className="text-base font-medium">CEO</p>

                                <div className="text-center flex justify-center items-center gap-5 my-2">
                                    <FaFacebook className="text-2xl font-semibold cursor-pointer"></FaFacebook>
                                    <FaInstagram className="text-2xl font-semibold cursor-pointer"></FaInstagram>
                                    <FaLinkedin className="text-2xl font-semibold cursor-pointer"></FaLinkedin>
                                    <FaTwitter className="text-2xl font-semibold cursor-pointer"></FaTwitter>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[450px] w-[300px] mx-auto border-2">
                            <img src="https://i.ibb.co/tX8dc4P/team3.jpg" alt="" />
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-semibold">Michael Williams</h2>
                                <p className="text-base font-medium">CEO</p>

                                <div className="text-center flex justify-center items-center gap-5 my-2">
                                    <FaFacebook className="text-2xl font-semibold cursor-pointer"></FaFacebook>
                                    <FaInstagram className="text-2xl font-semibold cursor-pointer"></FaInstagram>
                                    <FaLinkedin className="text-2xl font-semibold cursor-pointer"></FaLinkedin>
                                    <FaTwitter className="text-2xl font-semibold cursor-pointer"></FaTwitter>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[450px] w-[300px] mx-auto border-2">
                            <img src="https://i.ibb.co/wM2Gm3g/team2.jpg" alt="" />
                            <div className="text-center mt-2">
                                <h2 className="text-2xl font-semibold">Charles Garcia</h2>
                                <p className="text-base font-medium">CEO</p>

                                <div className="text-center flex justify-center items-center gap-5 my-2">
                                    <FaFacebook className="text-2xl font-semibold cursor-pointer"></FaFacebook>
                                    <FaInstagram className="text-2xl font-semibold cursor-pointer"></FaInstagram>
                                    <FaLinkedin className="text-2xl font-semibold cursor-pointer"></FaLinkedin>
                                    <FaTwitter className="text-2xl font-semibold cursor-pointer"></FaTwitter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* extera section 2  */}
            <div className="my-10">
                <div className="text-center my-3 space-y-1">
                    <h2 className="text-3xl font-bold">Online Job BD Customer</h2>
                    <p className="text-base font-semibold">Your Success, Our Priority: Welcome to Online Job BD, Where Opportunities Await!</p>
                </div>

                <div className="my-3">
                    <div className="grid lg:grid-cols-3 grid-cols-1 space-y-2">
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-600">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-600">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-between p-4">
                                <div className="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-600">2 days ago</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;