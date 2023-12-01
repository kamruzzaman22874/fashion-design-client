import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import "./NewArrival.css"
import { useEffect, useState } from "react";
import PopularClasses from "../PopularClasses/PopularClasses";

const NewArrival = () => {

    const [products, setProducts] = useState([])
    // const newProducts = products.slice(0, 3)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };



    return (
        <div>
            <SectionTitle
                title="NEW ARRIVALS"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:my-10 md:px-20 card-bg">
                {productsToDisplay.map((product, idx) => (
                    <PopularClasses key={idx} product={product} />
                ))}
            </div>
            <div className="pagination">
                <div className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrival;




