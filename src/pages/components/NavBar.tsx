import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-5 md:hidden bg-[#a07d56] p-2 font-semibold text-white">
            <Link to="/" className="w-full text-center text-xl list-none">Home</Link>
            <Link to="/codeBox" className="w-full text-center text-xl list-none">Code Box</Link>
        </div>
    )
}

export default NavBar;
