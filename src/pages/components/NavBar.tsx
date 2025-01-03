import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-5 md:hidden bg-gray-100 p-2 font-semibold text-black">
            <Link to="/" className="w-full text-center text-xl list-none">Home</Link>
            <a href="#contact" className="w-full text-center text-xl list-none">Contact</a>
            <Link to="/codeBox" className="w-full text-center text-xl list-none">Code Box</Link>
        </div>
    )
}

export default NavBar;
