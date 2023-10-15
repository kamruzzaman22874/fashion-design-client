import { Link } from "react-router-dom";
import logo from "../../../assets/logo/navLogo.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const navItems = <>

        {
            user ? <> <li><Link to="/">HOME</Link></li>
                <li><Link to="/instructor">INSTRUCTORS</Link></li>
                <li><Link to="/classes">CLASSES</Link></li>
                <div
                    className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
                    data-tip={user.displayName}>
                    <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img src={user.photoURL} />
                    </div>
                </div>
                <li><Link onClick={handleLogout} >
                    LOGOUT
                </Link></li>
            </> 
            :
            
                <> <li><Link to="/">HOME</Link></li>
                    <li><Link to="/instructor">INSTRUCTORS</Link></li>
                    <li><Link to="/classes">CLASSES</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/dashboard">DASHBOARD</Link></li>
                </>
        }


    </>
    return (
        <div className="font-teko font-semibold fixed top-0 z-10 w-full">
            <div className="navbar bg-[#a555ad] z-10">
                <div className="navbar-start px-20">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                            {navItems}
                        </ul>
                    </div>
                    <img className="md:w-40  text-6xl" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl text-white font-serif">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;