import { useEffect, useState } from "react"
import SingleInstrucor from "./SingleInstructor"

const Instructor = () => {

    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/users/instructor")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data)
            })
    }, [])

    return (
        <div className="my-20">
            <h2>Popular Instructor</h2>
            <div className="grid md:grid-cols-3 gap-8 px-12 py-10">
                {
                    instructors?.map(instructor => <SingleInstrucor
                        key={instructor._id}
                        instructor={instructor}
                    >
                    </SingleInstrucor>)
                }
            </div>
        </div>
    )
}

export default Instructor;