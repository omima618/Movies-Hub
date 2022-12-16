import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieActions, requests } from '../../app/features/movieSlice';
const TogglerButton = (props) => {
    const dispatch = useDispatch();
    const { opt1, opt2 } = props.options;
    const type = props.section;
    const [activeBtn, setActiveBtn] = useState('');

    // GET DATA
    const sendRequest = (type, activeOpt) => {
        type === 'popular' &&
            dispatch(movieActions.resetPopular()) &&
            dispatch(requests.getPopular({ opt: activeOpt }));
        type === 'trending' &&
            dispatch(movieActions.resetTrending()) &&
            dispatch(requests.getTrending({ time: activeOpt }));
        type === 'top-rated' &&
            dispatch(movieActions.resetTopRated()) &&
            dispatch(requests.getTopRated({ opt: activeOpt }));
        type === 'trailer' &&
            // dispatch(movieActions.resetTopRated()) &&
            dispatch(requests.getIDS({ opt: activeOpt }));
    };

    useEffect(() => {
        if (!activeBtn) setActiveBtn(opt1);
        if (type === 'trending') {
            activeBtn === 'Today' && sendRequest(type, 'day');
            activeBtn === 'This week' && sendRequest(type, 'week');
        } else {
            activeBtn === 'Movies' && sendRequest(type, 'movie');
            activeBtn === 'TV' && sendRequest(type, 'tv');
        }
    }, [activeBtn]);
    return (
        <div className="bg-white border border-primary rounded-full w-fit">
            <button
                className={`${
                    activeBtn === opt1
                        ? `bg-primary text-white`
                        : `bg-transparent text-gray-600`
                } btn-circle btn-sm w-fit px-3 transition-colors transition-500 ease-in`}
                onClick={() => {
                    setActiveBtn(opt1);
                }}
            >
                {opt1}
            </button>
            <button
                className={`${
                    activeBtn === opt2
                        ? `bg-primary text-white`
                        : `bg-transparent text-gray-600`
                } btn-circle btn-sm w-fit px-3 transition-colors transition-500 ease-in`}
                onClick={() => {
                    setActiveBtn(opt2);
                }}
            >
                {opt2}
            </button>
        </div>
    );
};

export default TogglerButton;
