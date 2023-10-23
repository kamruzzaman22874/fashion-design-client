import { useEffect, useState } from "react";
const MyProduct = () => {
    const [ products, setProducts] = useState([])
    useEffect(() =>{
        fetch("https://fashion-design-server-fombsp1yl-kamruzzaman22874.vercel.app/classes")
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
    })
  },[])
    return (
        <div className="my-[76px] w-full">
            <div className="grid md:grid-cols-3 gap-5 p-5 text-white">
                {
                    products?.map((product) => <div className="shadow-xl" key={product._id}>
                        <figure><img className="h-[300px] w-full" src={product.image} alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product?.classesName}
                            </h2>
                            <p>Instructor : {product.instructorName}</p>
                            <p>Available Seat : {product.availableSeats}</p>
                            <p>Price : ${product.price}</p>
                            <div className="w-full">
                                <button className="bg-[#a555ad] px-6 py-2 w-full text-white rounded hover:bg-[#73097c]">Select Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProduct;