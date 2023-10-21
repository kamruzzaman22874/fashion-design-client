import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAdminPanelSettings, MdOutlineClass } from "react-icons/md"
const UsersNavbar = () => {
    return (
        <div className="">
            <h2 className="flex items-center ml-4 gap-2 text-md mb-3">
                <FaHome /> User Home
            </h2>
            <li className="">
                <div className="px-4 py-2 text-center rounded ">
                    <Link className="flex items-center gap-2" to="/dashboard/myproduct"> <MdOutlineClass /> My Selected Classes</Link>
                </div>
                <br />
                <div className="mb-2 px-4 py-2 text-center rounded">
                    <Link className="flex items-center gap-2" to="/dashboard/enroll"> <MdAdminPanelSettings /> My Enrolled Classes</Link>
                </div>
                <div className="mb-2 px-4 py-2 text-center rounded">
                    <Link className="flex items-center gap-2" to="/dashboard/payment/history"> <MdAdminPanelSettings /> Payment History</Link>
                </div>
            </li>
            {/* <div className="divider">OR</div>
            <div>
            <Link to="/">
                    <button className="flex items-center gap-5">
                        <FaHome/>
                        <p>Back to Home</p>
                    </button>
                    </Link>
            </div> */}
        </div>
    );
};

export default UsersNavbar;