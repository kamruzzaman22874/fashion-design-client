import Swal from "sweetalert2";
import useProduct from "../../hooks/useProduct";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserInfo = () => {
    const [products, refetch] = useProduct()
    console.log(products)

    const handleDeleteItem = (id) => {
        console.log("delete item", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="overflow-x-auto my-20 w-full text-white">
            <table className="table">
                <thead className="">
                    <tr className="text-white">
                        <th>SL.</th>
                        <th>image</th>
                        <th>Name</th>
                        <th className="text-center">Price</th>
                        <th>Pay</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item, index) => <tr key={item?._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item?.instructorName}
                            </td>
                            <td className="text-center">${item.price}</td>
                            <td>pending</td>
                            <td>
                                <button onClick={() => handleDeleteItem(item._id)} className="btn btn-ghost btn-xs">
                                    <BsTrash className="text-2xl text-red-600" />
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <div className="flex justify-center bg-blue-500 py-2 rounded">
                <Link to="/dashboard/payment">
                    <button>
                        Payment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserInfo;