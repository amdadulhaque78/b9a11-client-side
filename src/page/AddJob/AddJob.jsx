import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { authContext } from "../../auth/AuthProvider";
import Swal from "sweetalert2";

const AddJob = () => {
    const {user} = useContext(authContext);
    const [startDate, setStartDate] = useState(new Date());
    const [secendDate, setSecendDate] = useState(new Date())

    const handleAddJob = async (e) => {
        e.preventDefault();
        const form = e.target;
        const Job_Title = form.jobtitle.value;
        const Job_Banner_Url = form.jobbanner.value;
        const userName = form.username.value;
        const userEmail = form.email.value;
        const Job_Category = form.jobcategory.value;
        const Minmum = form.minmum.value;
        const Mixmum = form.mixmum.value;
        const Job_Description = form.jobdescription.value;
        const Post_Date = startDate;
        const Deadline_date = secendDate;
        const Job_Applicants_Number = form.jobapplicantsnumber.value;
        
           const addJob = {
                Job_Title,
                Job_Banner_Url,
                userName,
                userEmail,
                Job_Category,
                Minmum, Mixmum,
                Job_Description,
                Post_Date,
                Deadline_date,
                Job_Applicants_Number
            }
            try{
                const {data} = await axios.post('https://online-job-bd-server-site.vercel.app/job', addJob)
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Job',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            }
            catch(err){
                console.error(err)
            }

    }
    return (
        <div className="my-10">
            <div className="lg:w-[800px] w-[300px] mx-auto border-2 p-2">
                <form onSubmit={handleAddJob}>
                    {/* fild 1 */}
                    <div className="flex lg:flex-row flex-col justify-center gap-2">
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Job Title</label>
                            <input type="text" name="jobtitle" placeholder="Job Title" id="" className="w-full p-3 border-2" />
                        </div>
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Job Banner Url</label>
                            <input type="url" name="jobbanner" placeholder="Job Banner" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* fild 2  */}
                    <div className="flex lg:flex-row flex-col justify-center gap-2">
                        <div className="lg:w-[400px]">
                            <label htmlFor="">User Name</label>
                            <input type="text" name="username" defaultValue={user?.displayName} placeholder="User Name" id="" className="w-full p-3 border-2" />
                        </div>
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="User Email" id="" className="w-full p-3 border-2" />
                        </div>
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Job Category</label>
                            <select name="jobcategory" id="" className="w-full p-3 border-2">
                                <option value="Select Job Category">Select Job Category</option>
                                <option value="On-Site Job">On-Site Job</option>
                                <option value="Remote Job">Remote Job</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                        </div>
                    </div>

                    {/* fild 3 */}
                    <div className="">
                        <label htmlFor="">Salary Range</label>
                        <div className="flex lg:flex-row flex-col justify-center gap-2">
                            <div className="lg:w-[400px]">
                                <input type="text" name="minmum" placeholder="Min" id="" className="w-full p-3 border-2" />
                            </div>
                            <div className="lg:w-[400px]">
                                <input type="text" name="mixmum" placeholder="Mix" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>

                    {/* fild 4 */}
                    <div>
                        <label htmlFor="">Job Description</label>
                        <div className="w-full">
                            <textarea name="jobdescription" placeholder="Job Description" rows="3" cols="50" id="" className="w-full border-2 p-3" ></textarea>
                        </div>
                    </div>

                    {/* fild 5 */}
                    <div className="flex lg:flex-row flex-col justify-center gap-2">
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Job Posting Date</label>
                            <div className="">
                                <DatePicker className="w-full p-3 border-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="lg:w-[400px]">
                            <label htmlFor="">Application Deadline</label>
                            <div className="">
                                <DatePicker className="w-full p-3 border-2" selected={secendDate} onChange={(date) => setSecendDate(date)} />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Job Applicants Number</label>
                            <input type="text" name="jobapplicantsnumber" placeholder="Job Applicants Number" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>
                    <button className="w-full btn bg-green-500 text-white my-2">Add Job</button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;