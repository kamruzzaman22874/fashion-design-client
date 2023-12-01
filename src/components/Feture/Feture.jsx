import Aos from "aos";

Aos.init();
const Feture = ({ feture }) => {

    const { name, date, image, title, description } = feture
    return (
        <div className="bg-base-100 shadow-xl mb-64 relative">
            <img src={image} alt="fetured" />
            <div className="text-center  w-full h-full bg-slate-500 space-y-5">
                <div data-Aos="fade-up" className="mx-5 rounded space-y-5 bg-slate-200 h-full absolute top-56 p-3">
                    <h2 className="">{name}</h2>
                    <h2 className="">{date}</h2>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feture;