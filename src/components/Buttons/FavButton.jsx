import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteActions } from '../../app/features/favoriteSlice';
import { toast } from 'react-toastify';
const FavButton = ({ classes, data }) => {
    const dispatch = useDispatch();
    const [fav, setFav] = useState(false);

    // HANDLE FAVORITES
    const isFav = [...useSelector((state) => state.favorite.favorites)].some(
        (item) => item.id === data.id
    );
    const addToFav = () => {
        setFav(true);
        dispatch(favoriteActions.addToFav(data));
        toast.success('Successfully added to favorites');
    };
    const removeFromFav = () => {
        setFav(false);
        dispatch(favoriteActions.removeFromFav(data.id));
        toast.error('Item removed successfully!');
    };
    useEffect(() => {
        isFav && setFav(true);
    }, []);
    return fav ? (
        <AiFillHeart
            onClick={removeFromFav}
            title="Remove from favorites"
            className={`text-red-700 text-2xl cursor-pointer ${classes}`}
        />
    ) : (
        <AiOutlineHeart
            onClick={addToFav}
            title="Add to favorites"
            className={`text-red-700 text-2xl cursor-pointer ${classes}`}
        />
    );
};

export default FavButton;
