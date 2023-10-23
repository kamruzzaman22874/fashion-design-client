import { useState } from "react";
import Swal from "sweetalert2";

const Modal =({feedbackId}) =>{
    const [feedback, setFeedback] = useState("");
    const handleFeedback =() =>{
      console.log(feedback, feedbackId)
      fetch(`https://fashion-design-server-fombsp1yl-kamruzzaman22874.vercel.app/classes/feedback/${feedbackId}`,{
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({feedback})
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount > 0){
           setFeedback("")
           Swal.fire(
             'Good job!',
             'Feedback sent successfully!',
           'success'
           )
        }
 
      })
    }
    

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box">
                   <textarea onChange={(e) => setFeedback(e.target.value)} className="p-4" name="" id="" cols="50" rows="5"></textarea>
                    <div className="modal-action">
                    <label onClick={handleFeedback} htmlFor="my_modal_6" className="btn">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;