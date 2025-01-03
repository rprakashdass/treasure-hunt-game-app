import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

const BackgroundTemplate = ({ content }: { content: ReactNode }) => {
    const navigate = useNavigate(); // Hook for navigation

    const handleNextCodeBox = () => {
        navigate("/codebox"); // Navigate to the CodeBox page
    };

    return (
        <>
            {/* Banner */}
            <div className="relative h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('./bg.jpg')`,
                    }}
                ></div>

                <div className="relative bg-gray-100 bg-white/30 bg-opacity-70 my-auto h-screen">

                    <div className="flex flex-col justify-center items-center px-5 h-full">
                        <div
                            style={{ backgroundColor: "#fff" }}
                            className="shadow-md p-5 rounded-2xl md:w-[80%] text-md">
                            {content}
                        </div>
                        {/* Next CodeBox Button */}
                        <button
                            onClick={handleNextCodeBox}
                            className="bg-blue-600 hover:bg-blue-700 mt-4 px-6 py-2 rounded-md font-semibold text-white transition"
                        >
                            Next CodeBox
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BackgroundTemplate;
