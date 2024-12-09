import { useContext, useEffect, useState } from "react";
import { authContext } from "../../auth/AuthProvider";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ApplyJob = () => {
    const { user } = useContext(authContext);
    const [apply, setApply] = useState([])
    console.log(apply)
    useEffect(() => {
        fetch(`https://online-job-bd-server-site.vercel.app/applys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setApply(data)
            })
    }, [user])

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleFilter = filter => {
        console.log(filter)
        // let filterData = [];
        // if(filter === 'On-Site Job'){
        //     filterData = apply.filter(job => job.Job_Category === 'On-Site Job');
        // }
        // else if(filter === 'Remote Job'){
        //     filterData = apply.filter(job => job.Job_Category === 'Remote Job');
        // }
        // else if(filter === 'Hybrid'){
        //     filterData = apply.filter(job => job.Job_Category === 'Hybrid');
        // }
        // else if(filter === 'Part-Time'){
        //     filterData = apply.filter(job => job.Job_Category === 'Part-Time');
        // }
        // setFilter(filterData)
    }

    return (
        <div className="my-10">
            <details className="dropdown px-2">
                <summary className="m-1 btn bg-green-500 text-white">Filter </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('On-Site Job')}><a>On-Site Job</a></li>
                    <li onClick={() => handleFilter('Remote Job')}><a>Remote Job</a></li>
                    <li onClick={() => handleFilter('Hybrid')}><a>Hybrid</a></li>
                    <li onClick={() => handleFilter('Part-Time')}><a>Part-Time</a></li>
                </ul>
            </details>
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
                                <th className="p-3">User Name</th>
                                <th className="p-3">User Email</th>
                                <th className="p-3">Resumi Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apply.map((Job, idx) => <tr key={Job._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="text-center p-3">
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>{Job.title}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>{Job.name}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <p>{Job.email}</p>
                                    </td>
                                    <td className="text-center p-3">
                                        <a href={Job.resumi}>{Job.resumi}</a>
                                    </td>
                                    <td className="text-center p-3">
                                        <button onClick={onOpenModal} className="btn bg-green-500 text-white">View Details</button>
                                        <Modal open={open} onClose={onCloseModal} center>
                                            <div className="space-y-5 border-2 p-5 my-6">
                                                <p><span>Job Title :</span> {Job.title}</p>
                                                <p><span>User Name :</span> {Job.name}</p>
                                                <p><span>User Email :</span> {Job.email}</p>
                                                <p><span>Resumi Link :</span> <a href={Job.resumi}> {Job.resumi}</a></p>
                                            </div>
                                        </Modal>
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

export default ApplyJob;


