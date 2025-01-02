
const NavBar = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-5 md:hidden bg-[#a07d56] p-2 font-semibold text-white">
            <a href="/" className="w-full text-center text-xl list-none">Home</a>
            <a href="/codeBox" className="w-full text-center text-xl list-none">Code Box</a>
        </div>
    )
}

export default NavBar