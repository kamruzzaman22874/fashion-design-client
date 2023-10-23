const AllInstructorsInfo =({instructor}) =>{
    const {name, email,image} = instructor;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className="h-[300px]"  src={image} alt="innstructor" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>{email}</p>
  </div>
</div>
    )
}

export default AllInstructorsInfo;