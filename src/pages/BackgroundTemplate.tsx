

// import { Link } from "react-router-dom";

import { ReactNode } from "react";

const BackgroundTemplate = ({ content }: { content: ReactNode }) => {

    return (
        <>
            {/* banner */}
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
                    </div>

                </div>

            </div>
        </>
    );
};

export default BackgroundTemplate;
