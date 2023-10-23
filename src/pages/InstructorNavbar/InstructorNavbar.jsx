import { FaHome } from 'react-icons/fa';
import { MdHotelClass, MdOutlineLibraryAddCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';
const InstructorNavbar = () => {
    return (
        <div className='mt-8  text-white  p-8 h-full w-full shadow-2xl'>
            <Link to="/dashboard/instructorhome">
                <h2 className="flex items-center gap-2 text-md font-lato ml-3 mb-8"> <FaHome /> Instructor Home</h2>
            </Link>
            <div className='mb-2 px-4 py-2 text-center rounded shadow-2xl'>
                <Link
                    className='text-md font-semibold flex items-center gap-2'
                    to='/dashboard/addclass'>
                    <MdOutlineLibraryAddCheck /> Add a Class
                </Link>
            </div>
            <br />
            <div className=' px-4 py-2 w-full text-center rounded shadow-2xl'>
                <Link to='/dashboard/myclasses' className='text-md font-semibold flex items-center gap-2'>
                    <MdHotelClass />My Class
                </Link>
            </div>
            <br />
        </div>
    );
};

export default InstructorNavbar;