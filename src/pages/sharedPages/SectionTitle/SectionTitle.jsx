const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 space-y-3">
            <h2 className="text-center text-3xl text-white">{title}</h2>
            <p className="w-full text-orange-100">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;