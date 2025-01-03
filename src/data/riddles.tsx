import Questions from "../pages/Questions";

export const riddles: {
    id: number;
    code: string;
    riddle: string | JSX.Element;
    answer: string;
    redirect: string;
}[] = [
        {
            id: 1,
            code: "FF€8DC",
            riddle: "I’m a space you need to find, For your car to rest and unwind. Sometimes tricky, sometimes free, What am I? Can you guess me? [37DM4034]",
            answer: "Parking",
            redirect: ""
        },
        {
            id: 2,
            code: "FAF0E6",
            riddle: <Questions riddle="I’m made of stone, not wood or metal, I’m a place to sit, calm and settle. I’m outdoors, strong and wide, What am I, where you can rest and hide?" />,
            answer: "A stone bench",
            redirect: ""
        },
        {
            id: 3,
            code: "D2B48C",
            riddle: "I have lines, but no goals to score, A raider comes and tries to explore. I’m where teams play with breath held tight, What am I, where the battle’s in sight?",
            answer: "A Kabaddi court",
            redirect: ""
        },
        {
            id: 4,
            code: "FFF5EE",
            riddle: "I smell so sweet, with treats galore, juices, ice cream and sandwich, who could ask for more? People come here to buy and bake, What am I, where you find a tasty cake?",
            answer: "Food Court",
            redirect: ""
        },

        {
            id: 5,
            code: "8B4513",
            riddle:
                <div className="flex flex-col justify-center items-center gap-5 text-white">
                    <div className="bg-black w-80 h-52">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <h3 className="text-xl">Find this Object in the riddles place</h3>
                    <p className="text-center">
                        I’m made of metal has net on top With a stone bench, perfect to seat. Small and sturdy, I’m built to last, What am I, where you can relax and rest fast?
                    </p>
                </div>,
            answer: "A hut",
            redirect: ""
        },
        {
            id: 6,
            code: "A0522D",
            riddle: "I’m where newcomers start their quest, In me, you’ll find your very best. The first step in a journey long, What am I, where students belong?",
            answer: "1st year block",
            redirect: ""
        },
    ];
