import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex items-end w-full  bg-white">

                <footer className="w-full text-gray-700 bg-gray-100 body-font">
                    <div
                        className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                            <Link to="/">
                                <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                                    <span className="text-green-500">Online Job</span><span className="text-red-500 ml-1">BD</span>
                                </a>
                            </Link>
                            <p className="mt-2 text-sm text-gray-500">Empowering Dreams, Connecting Opportunities: Online Job BD!</p>
                            <div className="mt-4">
                                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                    <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                                        <FaFacebook />
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <FaTwitter></FaTwitter>
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <FaInstagram></FaInstagram>
                                    </a>
                                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                                        <FaLinkedin></FaLinkedin>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                                <nav className="mb-10 list-none">
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                                <nav className="mb-10 list-none">
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                                </h2>
                                <nav className="mb-10 list-none">
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                                <nav className="mb-10 list-none">
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="text-gray-500 cursor-pointer hover:text-gray-900">info@onlinejobbd.com</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <div className="container px-5 py-4 mx-auto">
                            <p className="text-sm text-gray-700 capitalize xl:text-center">© 2024 All rights reserved </p>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;