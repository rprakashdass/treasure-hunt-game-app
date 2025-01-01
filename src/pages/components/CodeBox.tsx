import { useRef } from "react";

const CodeBox = () => {
    const codeRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const levelCode = codeRef.current?.value;
        window.location.href = `lvl/riddle/${levelCode}`;
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

                <div className="relative flex flex-col justify-center items-center bg-gray-100 bg-white/30 bg-opacity-70 px-5 h-full">
                    <div className="bg-white shadow-md p-5 rounded-lg w-80">
                        <form method="post" className="space-y-4" onSubmit={handleSubmit}>
                            <label htmlFor="code" className="block font-medium text-gray-700 text-lg">
                                Enter Your Code
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
                </div>
            </div>

        </>
    );
};

export default CodeBox;
