import useClasses from "../../hooks/useClasses";
import { BiSolidEdit } from 'react-icons/bi';

const MyClasses = () =>{
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div className="w-full">
            <h2 className="text-white">My classes: {classes.length}</h2>
            <div className="overflow-x-auto text-white">
            <table className="table text-white">
                {/* head */}
                <thead>
                <tr className="text-white text-center">
                    <th>SL.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Enrolled Student</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {
                    classes?.map((item, index) => <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="product img" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold"></div>
                        </div>
                    </div>
                    </td>
                    <td>
                    {item?.className}
                    </td>
                    <td>${item.price}</td>
                    <td>
                    <button className="btn btn-ghost btn-xs">
                        {item.status === "approved"? <p className="text-green-500">Approved</p> : "" }
                    </button>
                    </td>
                    <td>
                    <button className="btn btn-ghost btn-xs">
                        <BiSolidEdit className="text-2xl" />
                    </button>
                    </td>
                    <td>
                    <button className="btn btn-ghost btn-xs">{item.enrolledStudent || 0}</button>
                    </td>
                </tr>)
                }
                </tbody>
                
            </table>
            </div>
        </div>
    )
}

export default MyClasses;