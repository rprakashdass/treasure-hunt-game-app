import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("./bg.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-gray-800 bg-opacity-70 mx-5 md:mx-16 p-10 rounded-lg text-center text-white">
                        <h1 className="font-bold text-4xl md:text-6xl">Rush Hour</h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Get ready for an exciting and mind-bending adventure!
                        </p>
                        <p className="mt-2 text-lg">
                            The Rush Hour is an event where you and your team will race against the clock to solve riddles, complete tasks, and uncover hidden clues scattered around the campus. Are you ready to test your wits and teamwork?
                        </p>
                        {/* code box */}
                        <div className="flex flex-col justify-center items-center py-10">
                            <h2 className="mb-4 font-semibold text-xl">Go To Level Code Page</h2>
                            <div className="inline-flex items-center gap-4">
                                <Link
                                    to="/codeBox"
                                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 shadow-md px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                                    aria-label="Go to Level Code Page"
                                >
                                    Click Here
                                    <span className="ml-2">
                                        <FaArrowRightLong />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Overview Section */}
            <div className="mx-auto px-5 py-10 max-w-4xl">
                <h2 className="font-semibold text-3xl text-amber-600 text-center">Event Overview</h2>
                <p className="mt-4 text-center text-lg leading-relaxed">
                    The Rush Hour is an event where you and your team will race against the clock to solve riddles, complete tasks, and uncover hidden clues scattered around the campus. Are you ready to test your wits and teamwork?
                </p>
            </div>


            {/* How It Works */}
            <div className="bg-amber-50 py-12">
                <div className="mx-auto px-5 max-w-4xl">
                    <h2 className="font-semibold text-3xl text-amber-600 text-center">How It Works</h2>
                    <div className="space-y-6 mt-8">
                        <div className="text-lg">
                            <h3 className="font-semibold">1. Initial</h3>
                            <p>
                                You’ll receive an initial quiz with clues pointing to the first hidden location. Solve the riddle, and you'll get a number that you'll need to enter on our event website.
                            </p>
                        </div>
                        <div className="text-lg">
                            <h3 className="font-semibold">2. Task Stations</h3>
                            <p>
                                Once the correct number is submitted, a new location will appear on the website. At each location, one of our team members will assign you a fun and engaging task. Tasks will range from creative challenges to physical activities that will test your problem-solving and collaboration skills.
                            </p>
                        </div>
                        <div className="text-lg">
                            <h3 className="font-semibold">3. Unlocking the Next Clue</h3>
                            <p>
                                After successfully completing each task, you'll receive the next location, taking you closer to the final treasure. Only the team that solves all six riddles and completes all tasks will be victorious!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rules and Guidelines */}
            <div className="mx-auto px-5 py-12 max-w-4xl">
                <h2 className="font-semibold text-3xl text-amber-600 text-center">Rules & Guidelines</h2>
                <ul className="space-y-3 mt-6 pl-5 text-lg list-disc">
                    <li>Team size: 1 or 2 person.</li>
                    <li>If you have a pair, do you engage with both together, or interact with each individually?</li>
                    <li>Use the website provided to submit numbers and receive clues in real-time.</li>
                    <li>Complete the tasks at each checkpoint before moving on to the next clue.</li>
                    <li>Keep an eye on the clock—this is a race, and the fastest team to finish will win a special prize!</li>
                </ul>
            </div>

            {/* Exclusive Prize Section */}
            <div className="bg-amber-200 py-12">
                <div className="mx-auto px-5 max-w-4xl text-center">
                    <h2 className="font-semibold text-3xl text-amber-600">Exclusive Prize!</h2>
                    <p className="mt-4 text-lg">
                        The treasure hunt isn't just about the thrill of the game—there's a special prize waiting for the team that finishes first!
                    </p>
                    <p className="mt-4 font-semibold text-xl">
                        But here’s the catch: The prize will only be revealed during the event, so get ready for an exciting surprise!
                    </p>
                    <p className="mt-6 text-lg italic">
                        Make sure to race against time, solve all the riddles, complete all the tasks, and claim the exclusive prize that awaits you. Only the fastest team will win this ultimate reward!
                    </p>
                </div>
            </div>

            {/* Final Message Section */}
            <div className="bg-amber-200 py-12">
                <div className="mx-auto px-5 max-w-4xl text-center">
                    <h2 className="font-semibold text-3xl text-amber-600">Are You Ready?</h2>
                    <p className="mt-4 text-lg">
                        Don't forget to bring your thinking caps and a spirit of adventure! This is not just about finding clues, it’s about teamwork, creativity, and most importantly, having fun. We can’t wait to see you there!
                    </p>
                    <p className="mt-6 font-bold text-xl">See you on January 4th for an unforgettable adventure!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
