
const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 h-[10rem] text-color'>
            <h1 className='font-bold text-3xl text-center'>Contact</h1>
            <div className="flex flex-row justify-center items-center gap-2 text-md">
                <a href="tel:+917010047730" className="hover:text-blue-500 underline">
                    +91 70100 47730
                </a>
                <span>|</span>
                <a href="tel:+919597915158" className="hover:text-blue-500 underline">
                    +91 95979 15158
                </a>
            </div>
        </div>
    )
}

export default Footer