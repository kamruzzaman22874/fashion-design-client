import { useQuery } from "@tanstack/react-query";
import { BsTrash } from "react-icons/bs";
import { FaUserSecret, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const token = localStorage.getItem("access-token")
    const { data: users = [], refetch } = useQuery({
        queryFn: async () => {
            const res = await fetch("https://fashion-design-server-seven.vercel.app/users", {
                headers: { authorization: `bearer ${token}` },
            });
            return res.json()
        }
    })


    const handleMakeAdmin = (user) => {
        fetch(`https://fashion-design-server-seven.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                if (data.modifiedCount > 0) {
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

    const handleMakeInstructor = (user) => {
        fetch(`https://fashion-design-server-seven.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

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
                fetch(`https://fashion-design-server-seven.vercel.app/users/${user?._id}`, {
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
        <div className="h-screen w-full my-10 text-white">
            <h2>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
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
                                    {user?.role === "instructor" ? "instructor" :

                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-xs">
                                            <FaUserSecret className="text-2xl text-green-600" />
                                        </button>}
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