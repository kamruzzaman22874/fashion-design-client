import { useContext, useState } from "react"
import { AuthContext } from "../../../providers/AuthProviders"
import Swal from "sweetalert2"
import Modal from "../../../components/Modal/Modal"
import { useQuery } from "@tanstack/react-query"

const ManageClasses = () => {
  const { user, loading } = useContext(AuthContext)
  const [feedbackId, setFeedbackId] = useState()


  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await fetch("https://fashion-design-server-seven.vercel.app/classes");
      const data = await res.json();
      return data;
    }
  })


  // useEffect(() =>{
  //     fetch("https://fashion-design-server-seven.vercel.app/classes")
  //     .then(res => res.json())
  //     .then(data =>{
  //         refetch()
  //         console.log(data);
  //         setManageClasses(data)
  //     })
  // },[])

  const handleApproved = (id) => {

    console.log(id)
    fetch(`https://fashion-design-server-seven.vercel.app/classes/approve/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" }

    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire(
            'Good job!',
            'Class approved successfully!',
            'success'
          )
        }
      })
  }


  return (
    <div className="w-full  my-20">
      <h2 className="text-white">Total Classes: {classes.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>SL.</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th className="text-center">Instructor Name</th>
              <th>Instructor Email</th>
              <th className="text-center">Available Seats</th>
              <th>Price</th>
              <th className="text-center">Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody className="text-white">
            {
              classes?.map((item, idx) => <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td className="text-center">{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td className="text-center">{item.availableSeats}</td>
                <td>${item.price}</td>
                {/* <td className="flex items-center mt-3 gap-2">
                        <button className="btn btn-xs">
                          {item.status == "approved"
                            ? "approved"
                            : item.status == "denied"
                            ? "denied"
                            : "pending"}
                        </button>
                  </td> */}
                <td className="space-y-2">
                  <button
                    onClick={() => handleApproved(item._id)}
                    disabled={item.status === 'approved' || item.feedback}
                    className={`btn btn-xs w-full text-white ${item.status === 'approved' ? 'bg-green-500 text-white ' : 'bg-blue-500'}`}
                  // disabled={item?.status === 'approved'|| item?.status === 'denied' && "true"}
                  >
                    {/* {item.status === 'approved' ? 'approved' : 'Approve'} */}
                    Approved
                  </button>
                  <label
                    disabled={item.status === 'approved' || item.feedback}
                    // disabled={item?.status === 'approved'|| item?.status === 'denied' && "true"}
                    htmlFor="my_modal_6" onClick={() => setFeedbackId(item._id)} className=" btn btn-xs w-full">Deny</label>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
      <Modal feedbackId={feedbackId} />
    </div>
  )
}
export default ManageClasses