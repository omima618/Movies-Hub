const Heading = (props) => {
    return (
        <h2 className="relative font-bold text-2xl md:text-3xl p-0 pb-2 mr-0 md:mr-10 transition-500 transition-all">
            <span className="absolute bottom-0 left-1 bg-primary block w-12 h-[3px] rounded-sm"></span>
            {props.title}
        </h2>
    );
};

export default Heading;
