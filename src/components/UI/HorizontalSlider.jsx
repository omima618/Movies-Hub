const HorizontalSlider = (props) => {
    return (
        <div className="flex justify-between overflow-x-auto pt-10 min-h-[300px]">
            {props.children}
        </div>
    );
};

export default HorizontalSlider;
