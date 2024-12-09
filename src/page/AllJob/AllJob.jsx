import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJob = () => {
    const [jobData, setJobData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios("https://online-job-bd-server-site.vercel.app/job");
            setJobData(data);
        };
        getData();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredJobs = jobData.filter((job) =>
        job.Job_Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="my-10">
            <div className="w-[800px] mx-auto px-5 my-3">
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </form>
            </div>

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
                                <th className="p-3">Salary range</th>
                                <th className="p-3">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.map((job, idx) => (
                                <tr
                                    key={job._id}
                                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                                >
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
                                        <p>
                                            {job.Minmum} - {job.Mixmum}
                                        </p>
                                    </td>
                                    <td className="text-center p-3">
                                        <Link to={`/viewpage/${job._id}`}>
                                            <button className="btn bg-green-500 text-white flex justify-end">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJob;
