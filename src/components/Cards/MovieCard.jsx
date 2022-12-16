import defaultPic from '../../assets/defaultPic.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../../app/features/favoriteSlice';
import { toast } from 'react-toastify';
const MovieCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cardData, setCardData] = useState(null);
    const [fav, setFav] = useState(false);

    // FORMAT RATE
    const countRate = (average) => {
        return Math.trunc(average * 10);
    };

    // HANDLE FAVORITES
    const isFav = [...useSelector((state) => state.favorite.favorites)].some(
        (item) => item.id === props.data.id
    );
    const addToFav = () => {
        setFav(true);
        dispatch(favoriteActions.addToFav(cardData));
        toast.success('Successfully added to favorites');
    };
    const removeFromFav = () => {
        setFav(false);
        dispatch(favoriteActions.removeFromFav(cardData.id));
        toast.error('Item removed successfully!');
    };
    useEffect(() => {
        setCardData(props.data);
        isFav && setFav(true);
    }, [props]);
    return (
        cardData && (
            <div className="card w-36 md:w-48 h-full bg-base border-0 mr-3 sm:mr-5 shrink-0 relative">
                <figure className="mb-2">
                    <img
                        onClick={() => {
                            navigate('/movie-details');
                        }}
                        src={
                            cardData.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${cardData.poster_path}`
                                : defaultPic
                        }
                        alt={cardData.title}
                        className=" h-48 object-cover w-full cursor-pointer"
                    />
                </figure>
                <div className="card-body px-2 py-4">
                    <h3
                        onClick={() => {
                            navigate('/movie-details');
                        }}
                        className="card-title text-sm md:text-lg cursor-pointer"
                    >
                        {cardData.title || cardData.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {cardData.release_date || cardData.first_air_date}
                    </p>
                </div>
                {/* RATE */}
                <div
                    className={`${
                        countRate(cardData.vote_average) >= 50 &&
                        countRate(cardData.vote_average) < 65 &&
                        'text-yellow-500'
                    } ${
                        countRate(cardData.vote_average) >= 65 &&
                        'text-green-500'
                    } ${
                        countRate(cardData.vote_average) < 50 && 'text-red-700'
                    } radial-progress text-xs font-bold bg-base-300 border-2 border-base-300 absolute top-[165px] left-2`}
                    style={{
                        '--value': countRate(cardData.vote_average),
                        '--size': '42px',
                        '--thickness': '3px',
                    }}
                >
                    {countRate(cardData.vote_average)}%
                </div>
                {/* ADD TO FAV */}
                {fav ? (
                    <AiFillHeart
                        onClick={removeFromFav}
                        title="Remove from favorites"
                        className="text-red-700 text-2xl cursor-pointer absolute right-2 top-2"
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={addToFav}
                        title="Add to favorites"
                        className="text-red-700 text-2xl cursor-pointer absolute right-2 top-2"
                    />
                )}
            </div>
        )
    );
};

export default MovieCard;
