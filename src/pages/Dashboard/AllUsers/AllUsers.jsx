import { useQuery } from "@tanstack/react-query";
import { BsTrash } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json()
        }
    })

    const handleDeleteItem = (user) => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
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


    const handleMakeAdmin =(user) =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
            if (data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user?.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }


    return (
        <div className="h-screen w-full my-10">
            <h2>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>
                                    {user.role === "admin" ? "admin" :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs">  
                                     <FaUserShield className="text-2xl text-green-600" />
                                    </button>
                                     } 
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(user)} className="btn btn-ghost btn-xs">
                                        <BsTrash className="text-2xl text-red-600" />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;