import { Link } from "react-router-dom";
import logo from "../../../assets/logo/navLogo.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaCartArrowDown } from 'react-icons/fa';
import useProduct from "../../../hooks/useProduct";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [products] = useProduct()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout successfully done',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err));
    }



    const navItems = <>

        {
            user ? <>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/instructor">INSTRUCTORS</Link></li>
                <li><Link to="/classes">CLASSES</Link></li>
                {
                    isAdmin?.role === "admin" ? (<li><Link to="/dashboard/adminhome">DASHBOARD</Link></li>) :
                        isInstructor?.role === "instructor" ? (<li><Link to="/dashboard/instructorhome">DASHBOARD</Link></li>) :
                            (<li><Link to="/dashboard/userhome">DASHBOARD</Link></li>)

                }
                <li className=" px-2 py-1">
                    <Link to="/dashboard/myproduct">
                        <button className="flex justify-center items-center">
                            <FaCartArrowDown className="text-yellow-400" />
                            <div className="badge badge-primary text-white"> +{products?.length || 0}</div>
                        </button>

                    </Link>
                </li>
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

                <>
                    {/* <button onDoubleClick={handleDoubleClick}> <BsToggleOn style={bodyStyles} className="text-3xl" /> </button> */}
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/instructor">INSTRUCTORS</Link></li>
                    <li><Link to="/classes">CLASSES</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                </>
        }


    </>
    return (
        <div className="font-teko font-semibold fixed top-0 z-10 w-full max-w-7xl mx-auto">
            <div className="navbar bg-[#18AB8E] z-10">
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