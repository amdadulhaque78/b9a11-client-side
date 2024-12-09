import { useLoaderData, useParams } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from "react";
import { authContext } from "../../auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewPage = () => {
    const {user} = useContext(authContext)
    const viewJob = useLoaderData()
    // console.log(viewJob)
    const { id } = useParams()
    const view = viewJob.find(view => view._id === id)
    // console.log(view)
    const { Job_Title, Job_Banner_Url, Job_Description, Minmum, Mixmum, Job_Category, Job_Applicants_Number , userEmail} = view;

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleApply = async (e) => {
        e.preventDefault();
        if(user?.email === userEmail){
            return toast.warn('You cannot add your data')
        }
        const form = e.target;
        const title = Job_Title;
        const job_category = Job_Category;
        const name = form.name.value;
        const email = form.email.value;
        const resumi = form.resumi_link.value;
        const apply = {title, job_category, name, email, resumi}
        console.log(apply)
        try{
            const {data} = await axios.post('https://online-job-bd-server-site.vercel.app/apply', apply)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Apply Job',
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
            <div className="lg:w-[950px] w-[300px] mx-auto border-2 p-2">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div className="lg:w-[500px] w-[300px] p-1">
                        <img src={Job_Banner_Url} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2><span className="text-xl font-medium">Job Title :</span> {Job_Title}</h2>
                        <p><span className="text-xl font-medium">Job Description :</span> {Job_Description}</p>
                        <p><span className="text-xl font-medium">Salary Range :</span> {Minmum} - {Mixmum}</p>
                        <p><span className="text-xl font-medium">Job Applicant No :</span> {Job_Applicants_Number}</p>
                        <div>
                            <button onClick={onOpenModal} className="btn bg-green-500 text-white">Apply</button>
                            <Modal open={open} onClose={onCloseModal} center>
                            <div className="lg:w-[700px] w-[300px] mx-auto border-2 p-2 mt-6">
                                                <form onSubmit={handleApply}>
                                                    {/* fild 1 */}
                                                    <div className="flex lg:flex-row flex-col justify-center gap-2">
                                                        <div className="lg:w-[400px]">
                                                            <label htmlFor="">User Name</label>
                                                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" id="" className="w-full p-3 border-2" />
                                                        </div>
                                                        <div className="lg:w-[400px]">
                                                            <label htmlFor="">User Email</label>
                                                            <input type="email" name="email" defaultValue={user?.email}  placeholder="User Email" id="" className="w-full p-3 border-2" />
                                                        </div>
                                                    </div>
                                                    {/* fild 4 */}
                                                    <div>
                                                        <label htmlFor="">Resume Link</label>
                                                        <div className="w-full">
                                                            <input type="url" placeholder="Resume Link" name="resumi_link" id="" className="w-full p-3 border-2" />
                                                        </div>
                                                    </div>
                                                    <button className="w-full btn bg-green-500 text-white my-2">Submit</button>
                                                </form>
                                            </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPage;