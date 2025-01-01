import { useRef, useState } from "react";
import { riddles } from "../../data/riddles";
// import { Link } from "react-router-dom";

const CodeBox = () => {
    const codeRef = useRef<HTMLInputElement>(null);

    const [showRiddle, setShowRiddle] = useState<boolean>(false);
    const [riddle, setRiddle] = useState<{
        id: number,
        code: string,
        riddle: string,
        answer: string
    } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userInputCode = codeRef.current?.value || "";

        const matchedRiddle = riddles.find((r) => (
            r.code == userInputCode
        ))

        if (matchedRiddle) {
            setRiddle(matchedRiddle);
            setShowRiddle(true);
        } else {
            alert("Try Again! or Enter the Code Properly")
        }
    }

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
                        {
                            !showRiddle
                                ?
                                <div className="bg-white shadow-md p-5 rounded-lg w-[80%] md:w-[40%]">
                                    <form method="post" action="" className="space-y-4" onSubmit={handleSubmit}>
                                        <label htmlFor="code" className="block font-medium text-gray-700 text-lg">
                                            Enter  Code
                                        </label>
                                        <input
                                            id="code"
                                            name="code"
                                            type="text"
                                            placeholder="Enter the code here"
                                            className="border-gray-300 focus:border-amber-500 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 w-full focus:outline-none"
                                            required
                                            ref={codeRef}
                                        />
                                        <button
                                            type="submit"
                                            className="bg-amber-500 hover:bg-amber-600 py-2 rounded-lg w-full font-semibold text-white"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                                :

                                <div
                                    style={{
                                        backgroundColor: `#${riddle?.code}`
                                    }}
                                    className="flex flex-col justify-between items-center shadow-md p-5 rounded-lg w-[80%] min-h-[20%] text-md"
                                >

                                    <p>
                                        {riddle?.riddle}
                                    </p>
                                    <a
                                        href=""
                                        className="bg-blue-500 px-5 py-3 rounded-lg">Enter Next Riddle Code
                                    </a>
                                </div>
                        }
                        {/* <div className="inline-flex relative justify-start items-start my-5 text-left">
                            <Link
                                to="/"
                                className="px-5 py-3 rounded-lg text-black text-xl button"
                            >
                                Home
                            </Link>
                        </div> */}
                    </div>

                </div>

            </div>

        </>
    );
};

export default CodeBox;
