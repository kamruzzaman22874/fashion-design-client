const SingleInstrucor =({instructor}) =>{
    const {image, name,email} = instructor;
    return(
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body text-bottom">
            <h2 className="card-title">Instructor Name: {name}</h2>
            <p>Instructor Email: {email}</p>
        </div>
        </div>
    )
}
export default SingleInstrucor;