import { useState } from "react";
import { questions } from "../data/questions";
import randomGenerator from "./randomGenerator";

const Questions = ({ riddle }: { riddle: string }) => {
    const randomIndexes = new Set<number>();

    while (randomIndexes.size < 5) {
        const index = randomGenerator(questions.length);
        randomIndexes.add(index);
    }

    const initialGeneratedQuestions = Array.from(randomIndexes).map((index) => ({
        ...questions[index],
        isCorrect: false,
    }));

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [generatedQuestions] = useState(initialGeneratedQuestions);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const handleAnswerSelect = (option: string) => {
        if (selectedOption) return;

        setSelectedOption(option);

        if (option === generatedQuestions[currentIndex].correct) {
            setCorrectAnswers((prev) => prev + 1);
        }

        setTimeout(() => {
            if (currentIndex < generatedQuestions.length - 1) {
                setCurrentIndex((prev) => prev + 1);
                setSelectedOption(null);
            } else {
                setIsFinished(true);
            }
        }, 0);
    };

    if (isFinished) {
        return (
            <div className="flex flex-col items-center">
                <h1 className="mb-4 font-bold text-2xl">
                    {correctAnswers >= 3
                        ? "Congrats!! Here is the next riddle"
                        : "You haven't completed the quiz!"}
                </h1>
                <p className="mb-4 text-center text-lg">
                    {correctAnswers >= 3
                        ? ``
                        : `You need at least 3 points to unlock the next level! You can try again with a +3 minute penalty.`}
                    <br></br>
                    {correctAnswers < 3
                        ? ``
                        : `${riddle}`
                    }
                </p>
            </div >
        );
    }

    return (
        <div className="flex flex-col items-center">
            <form className="w-full max-w-md">
                <h1 className="mb-4 font-bold text-2xl text-center">
                    Question {currentIndex + 1} of {generatedQuestions.length}
                </h1>
                <p className="mb-6 text-center text-gray-800 text-lg">
                    {generatedQuestions[currentIndex].question}
                </p>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    {generatedQuestions[currentIndex].options.map((option, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleAnswerSelect(option)}
                            disabled={selectedOption !== null}
                            className={`px-4 py-2 rounded-md w-full font-semibold text-white transition duration-300 ${selectedOption === option
                                ? "bg-amber-600"
                                : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default Questions;