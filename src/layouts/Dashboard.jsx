import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';
import AdminNavbar from '../pages/AdminNavbar/AdminNavbar';
import UsersNavbar from '../pages/UsersNavbar/UsersNavbar';
import { FaHome } from 'react-icons/fa';
import useInstructor from '../hooks/useInstructor';
import InstructorNavbar from '../pages/InstructorNavbar/InstructorNavbar';


const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor()
	return (
		<div className='grid md:grid-cols-12 p-2'>
			<div className='h-screen col-span-4 p-3 space-y-2 w-60 border  shadow-2xl ml-24 text-white dark:text-gray-100 sticky top-0'>
				<div className='flex items-center p-2 space-x-4'>
					<img
						src={user ? user?.photoURL : ''}
						alt=''
						className='w-12 h-12 rounded-full dark:bg-gray-500'
					/>
					<div>
						<h2 className='text-lg font-semibold'>{user?.displayName}</h2>
						<span className='flex items-center space-x-1'>
							<a
								rel='noopener noreferrer'
								href='#'
								className='text-xs hover:underline dark:text-gray-400'>
								{user?.email}
							</a>
						</span>
					</div>
				</div>
				<div className='divide-y divide-gray-700 text-white'>
					<ul className='pt-2 pb-4 space-y-1 text-sm'>
                    {isAdmin ?.role ==="admin" ?(<AdminNavbar />): isInstructor?.role ==="instructor" ? (
							<InstructorNavbar />
						) : (
							<UsersNavbar />
						)}
						{/* {isAdmin?.role === "admin" ? <AdminNavbar/> : isInstructor?.role ==="instructor" ? <InstructorNavbar/> : <UsersNavbar/> } */}
					</ul>
					<ul className='pt-4 pb-2 space-y-1 text-sm'>
                    <div className='ml-3'>
                                <p> <Link to="/"><span className='flex items-center gap-2'> <FaHome/>Back to Home</span></Link></p>
                                </div>
						<li>
							<a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center p-2 space-x-3 rounded-md'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
									className='w-5 h-5 fill-current dark:text-gray-400'>
									<path d='M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z'></path>
									<rect width='32' height='64' x='256' y='232'></rect>
								</svg>
								<span>Logout</span>
							</a>
						</li>
                        
					</ul>
				</div>
			</div>
			<div className='col-span-8 flex items-center justify-center'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
