import { useEffect, useState } from "react";
import AllInstructorsInfo from "./AllInstructorsInfo";

const AllInstructor =() =>{
    const [instructors, setInstructors] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/users/instructor")
        .then(res => res.json())
        .then(data => {
            setInstructors(data)
        })
    }, [])
    return (
       <div>
        <h2 className="text-3xl text-white text-center my-8 uppercase">Popular Instructor</h2>
         <div className="my-20 grid md:grid-cols-3 gap-10 px-20">
            {
                instructors.map(instructor => <AllInstructorsInfo
                key={instructor._id}
                instructor={instructor}
                ></AllInstructorsInfo>)
            }
        </div>
       </div>
    )
}

export default AllInstructor;