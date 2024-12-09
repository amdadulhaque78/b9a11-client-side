import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../auth/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from "sweetalert2";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const MyJob = () => {
    const { user } = useContext(authContext);
    const [jobData, setJobData] = useState([]);

    const [startDate, setStartDate] = useState(new Date());
    const [secendDate, setSecendDate] = useState(new Date())

    const [open, setOpen] = useState(false);
    const [jobId, setJobId] = useState(null);


    const onOpenModal = (id) =>  {
        setOpen(true)
        setJobId(id);
    };
    const onCloseModal = () => setOpen(false);

    console.log(jobData)
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://online-job-bd-server-site.vercel.app/jobs?userEmail=${user.email}`);
            setJobData(data);
        };
        getData();
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://online-job-bd-server-site.vercel.app/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = jobData.filter(j => j._id !== id)
                        setJobData(remaining)
                    })
            }
        });
    }

    const handleUpdateJob = async (e) => {
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

        const updateJob = {
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
        fetch(`https://online-job-bd-server-site.vercel.app/jobs/${jobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Update Job',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (
        <div className="my-10">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-center">
                                <th className="p-3">#</th>
                                <th className="p-3">Job Title</th>
                                <th className="p-3">Job Posting Date</th>
                                <th className="p-3">Application Deadline</th>
                                <th className="p-3">Update Action</th>
                                <th className="">Delete Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobData.map((job, idx) => <tr key={job._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="text-center p-3">
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>{job.Job_Title}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>
                                            {new Date(job.Post_Date).toLocaleDateString()}
                                        </p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>
                                            {new Date(job.Deadline_date).toLocaleDateString()}
                                        </p>
                                    </td>
                                    <td className="text-center p-3">
                                        <button onClick={() => onOpenModal(job._id)} className="btn bg-green-500 text-white">Update</button>
                                        <Modal open={open} onClose={onCloseModal} center>
                                            <div className="lg:w-[700px] w-[300px] mx-auto border-2 p-2 mt-6">
                                                <form onSubmit={handleUpdateJob}>
                                                    {/* fild 1 */}
                                                    <div className="flex lg:flex-row flex-col justify-center gap-2">
                                                        <div className="lg:w-[400px]">
                                                            <label htmlFor="">Job Title</label>
                                                            <input type="text" name="jobtitle" defaultValue={job.Job_Title} placeholder="Job Title" id="" className="w-full p-3 border-2" />
                                                        </div>
                                                        <div className="lg:w-[400px]">
                                                            <label htmlFor="">Job Banner Url</label>
                                                            <input type="url" name="jobbanner" defaultValue={job.Job_Banner_Url} placeholder="Job Banner" id="" className="w-full p-3 border-2" />
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
                                                                <input type="text" name="minmum" defaultValue={job.Minmum} placeholder="Min" id="" className="w-full p-3 border-2" />
                                                            </div>
                                                            <div className="lg:w-[400px]">
                                                                <input type="text" name="mixmum" defaultValue={job.Mixmum} placeholder="Mix" id="" className="w-full p-3 border-2" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* fild 4 */}
                                                    <div>
                                                        <label htmlFor="">Job Description</label>
                                                        <div className="w-full">
                                                            <textarea name="jobdescription" defaultValue={job.Job_Description} placeholder="Job Description" rows="3" cols="50" id="" className="w-full border-2 p-3" ></textarea>
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
                                                            <input type="text" name="jobapplicantsnumber" defaultValue={job.Job_Applicants_Number} placeholder="Job Applicants Number" id="" className="w-full p-3 border-2" />
                                                        </div>
                                                    </div>
                                                    <button className="w-full btn bg-green-500 text-white my-2">Update Job</button>
                                                </form>
                                            </div>
                                        </Modal>
                                    </td>
                                    <td className="text-center p-3">
                                        <button onClick={() => handleDelete(job._id)} className="btn bg-red-500 text-white">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJob;