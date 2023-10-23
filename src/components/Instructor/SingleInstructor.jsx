const SingleInstrucor =({instructor}) =>{
    const {image, name,email} = instructor;
    return(

        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="md:h-[300px] object-fill w-full" src={image} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <p>Instructor Email: {email}</p>
            </div>
            </div>
    )
}
export default SingleInstrucor;