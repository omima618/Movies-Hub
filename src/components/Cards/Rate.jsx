const Rate = ({ average, classes }) => {
    const countRate = (average) => {
        return Math.trunc(average * 10);
    };
    return (
        <div
            className={`${
                countRate(average) >= 50 &&
                countRate(average) < 65 &&
                'text-yellow-500'
            } ${countRate(average) >= 65 && 'text-green-500'} ${
                countRate(average) < 50 && 'text-red-700'
            } radial-progress text-xs font-bold bg-base-300 border-2 border-base-300 ${classes}`}
            style={{
                '--value': countRate(average),
                '--size': '42px',
                '--thickness': '3px',
            }}
        >
            {countRate(average)}%
        </div>
    );
};

export default Rate;
