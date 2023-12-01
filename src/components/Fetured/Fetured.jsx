import { Helmet } from "react-helmet";
import SectionTitle from "../../pages/sharedPages/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import Feture from "../Feture/Feture";

const Fetured = () => {

    const [fetured, setFetched] = useState([])



    useEffect(() => {
        fetch("https://fashion-design-server-seven.vercel.app/fetured")
            .then(res => res.json())
            .then(data => {
                setFetched(data);
            })
    }, [])
    return (
        <div>
            <div>
                <SectionTitle
                    title="FEATURED ARTICLE"
                ></SectionTitle>
                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse urna nibh, <br /> viverra non.Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 md:my-16 md:gap-8 gap-10 px-5">
                {
                    fetured?.map(feture => <Feture key={feture._id} feture={feture} />)
                }
            </div>
        </div>
    );
};

export default Fetured;