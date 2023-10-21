import useClasses from "../../hooks/useClasses";

const MyClasses = () =>{
    const [classes] = useClasses()
    return (
        <div className="w-full">
            <h2 className="text-white">My classes: {classes.length}</h2>
            <div className="overflow-x-auto text-white">
            <table className="table text-white">
                {/* head */}
                <thead>
                <tr className="text-white">
                    <th>SL.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    classes?.map((item, index) => <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                    <div className="flex items-center space-x-3">
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
                    {item?.classesName}
                    </td>
                    <td>${item.price}</td>
                    <td>
                    <button className="btn btn-ghost btn-xs">Update</button>
                    </td>
                    <td>
                    <button className="btn btn-ghost btn-xs">Approved/Deny</button>
                    </td>
                    <td>
                    <button className="btn btn-ghost btn-xs">Delete</button>
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