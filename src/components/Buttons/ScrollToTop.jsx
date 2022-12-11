import { useEffect } from 'react';
import { ImArrowUp2 } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../app/features/uiSlice';

const ScrollToTop = () => {
    const { showScrollBtn } = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    useEffect(() => {
        // window.addEventListener('scroll', () => {
        //     console.log(showScrollBtn);
        //     if (window.scrollY >= 600) {
        //         // console.log(showScrollBtn);
        //         if (!showScrollBtn) {
        //             dispatch(uiActions.ToggleScrollBtn(true));
        //         }
        //         // console.log(showScrollBtn);
        //     }
        //     // if (window.scrollY < 600) {
        //     //     if (showScrollBtn) dispatch(uiActions.ToggleScrollBtn(false));
        //     //     console.log(showScrollBtn);
        //     // }
        // });
    }, []);
    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0 });
            }}
            className={`btn btn-circle btn-sm border-0 outline-none hover:bg-primary bg-primary ${
                showScrollBtn ? 'fixed' : 'hidden'
            } right-3 bottom-3  cursor-pointer `}
        >
            <ImArrowUp2 className="text-white text-xl" />
        </button>
    );
};

export default ScrollToTop;
