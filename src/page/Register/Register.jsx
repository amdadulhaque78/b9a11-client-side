import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../auth/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { handleUserRegister, handleUpdateProfile, handleUserLogout } = useContext(authContext);
    const naviget = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        if (!/@gmail\.com$/.test(email)) {
            toast('Email must end with @gmail.com');
            return;
        }
        if (password.length < 6) {
            toast('Password should be at least 6 characters');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast('Your password must contain at least one uppercase letter');
            return;
        }

        handleUserRegister(email, password)
            .then((result) => {
                console.log(result.user);
                toast('Your sign-up successful');

                handleUserLogout()
                    .then(() => {
                        console.log('Log out');
                        naviget('/login')
                    })
                    .catch((error) => {
                        console.error(error);
                    })

                handleUpdateProfile(name, photo)
                    .then((result) => {
                        console.log(result.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch((error) => {
                console.error(error);
                toast('Email already use')
            })
    }
    return (
        <div className="my-10 px-2">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto">
                    <h2><span className="text-green-500">Online Job</span><span className="text-red-500 ml-1">BD</span></h2>
                </div>

                <form onSubmit={handleRegister} className="mt-6">
                    <div>
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                        <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Name" />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                        <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Email" />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm text-gray-800 dark:text-gray-200">Photo Url</label>
                        <input type="url" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Url" />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            {/* <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a> */}
                        </div>

                        <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Password" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>
                <Link to="/login"> <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <button className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</button></p></Link>
            </div>
        </div>
    );
};

export default Register;