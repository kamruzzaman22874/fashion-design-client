const SectionTitle = ({title,subtile}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 space-y-3">
            <h2>{title}</h2>
            <h4>{subtile}</h4>
        </div>
    );
};

export default SectionTitle;