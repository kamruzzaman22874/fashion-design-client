import { Helmet } from "react-helmet";
import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import Feture from "../Feture/Feture";

const Fetured = () => {

    const [fetured, setFetched] = useState([])



    useEffect(() => {
        fetch("http://localhost:5000/fetured")
            .then(res => res.json())
            .then(data => {
                setFetched(data);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Fashion | Fetured</title>
            </Helmet>
            <div>
                <SectionTitle
                    title="FEATURED ARTICLE"
                ></SectionTitle>
                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse urna nibh, <br /> viverra non.Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 my-16 gap-8">
                {
                    fetured?.map(feture => <Feture key={feture._id} feture={feture} />)
                }
            </div>
        </div>
    );
};

export default Fetured;