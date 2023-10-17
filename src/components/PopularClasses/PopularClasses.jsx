import { AiFillStar } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
AOS.init();

const PopularClasses = ({ product }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useProduct()
    const {_id, image, image1, classesName, instructorName, instructorEmail, price, availableSeat, rating } = product;
    const handleAddToCart = (product) => {
        console.log(product);
        if (user && user.email) {
            const productItem = {productId: _id, image, image1, email:user?.email,classesName,instructorName,price,availableSeat,rating}
            fetch("http://localhost:5000/products", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(productItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Purchase successfully done',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Plese login for purchase',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: {from:location}})
                }
            })
        }
    }
    return (
        <div className="bg-transparent opacity-100 border group hover:shadow-xl w-full h-[600px] font-lato">
            <figure data-aos="zoom-in" className="md:px-10 md:pt-10 group-hover:hidden">
                <img src={image} alt="product" className="rounded-xl h-[300px] w-full" />
            </figure>
            <figure data-aos="zoom-in" className="md:px-10 md:pt-10 hidden group-hover:block card_title transition-all duration-200 group-hover:rotatet group-hover:transation-all">
                <img src={image1} alt="product" className="rounded-xl bg-transparent group-hover:h-[300px] group-hover:w-full" />
            </figure>
            <div className="md:p-10 p-5 space-y-2 w-full text-white">
                <h2 className="">Product Name: {classesName}</h2>
                <h2 className="">Instructor Name: {instructorName}</h2>
                <h2 className="">Instructor Email: {instructorEmail}</h2>
                <div className="flex justify-between items-center">
                    <h2 className="">Available Seat: {availableSeat}</h2>
                    <p className="">Price: ${price}</p>
                </div>
                <p className="">
                    <Rating
                        className="text-yellow-400"
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<BsStar />}
                        placeholderSymbol={<BsStarFill />}
                        fullSymbol={<AiFillStar />}
                    />
                </p>
                <div className="w-full">
                    <button onClick={() => handleAddToCart(product)} className="bg-[#a555ad] px-6 py-2 w-full text-white rounded hover:bg-[#73097c]">Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default PopularClasses;