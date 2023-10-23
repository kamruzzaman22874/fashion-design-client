import { Link } from 'react-router-dom';
import { BiUserCheck, BiAlignJustify } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
const AdminNavbar = () => {
    
    return (
        <div className='h-full'>
            <Link to="/dashboard/adminhome"><h2 className='mb-3 flex items-center gap-2 ml-6'> <AiFillHome /> Admin Home</h2></Link>
            <li className=' px-4 py-1 mb-3 w-full text-center rounded  hover:border-b-orange-400'>
                <a
                    rel='noopener noreferrer'
                    href='#'
                    className='flex items-center p-2 space-x-3 rounded-md'>
                    <BiAlignJustify />
                    <Link className='' to='/dashboard/manageclasses'>
                        Manage Classes
                    </Link>
                </a>
            </li>
            <li className=' px-4 py-1 w-full text-center rounded   hover:border-b-orange-400'>
                <a
                    rel='noopener noreferrer'
                    href='#'
                    className='flex items-center p-2 space-x-3 rounded-md'>
                    <BiUserCheck className='text-xl' />
                    <Link to='/dashboard/manageusers'>Manage Users</Link>
                </a>
            </li>

            <br />
        </div>
    );
};

export default AdminNavbar;