
const SliderPicture = () => {
    return (
        <div> 
            <div
                className='w-full bg-center bg-cover h-[38rem]'
                style={{
                    backgroundImage: `url("https://i.ibb.co/C1NfysR/slider1.jpg")`,
                }}
            >
                <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-green-500 lg:text-4xl'>
                            Build your new <span className='text-red-500'>React Js</span> Project
                        </h1>
                        <p className="text-base font-semibold text-white mt-2 lg:w-[500px]">Elevating Digital Experiences,
                            Where React Meets Next.js,
                            We Pave the Path to Tomorrows Web,
                            Innovating, Connecting, Inspiring,
                            Welcome to Our World of Endless Possibilities!</p>
                        <br />
                        <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-gray-500'>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderPicture;
