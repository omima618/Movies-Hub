import { useState, useEffect } from 'react';
import defaultPic from '../../assets/defaultPic.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../../app/features/favoriteSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const FavCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cardData, setCardData] = useState(null);
    const removeFromFav = () => {
        dispatch(favoriteActions.removeFromFav(cardData.id));
        toast.error('Item removed successfully!');
    };
    useEffect(() => {
        setCardData(props.data);
    }, [props]);
    return (
        cardData && (
            <div className="card w-60 h-full bg-base border-0 mr-3 sm:mr-5 mb-5 shrink-0 relative">
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
                <AiFillHeart
                    onClick={removeFromFav}
                    title="Remove from favorites"
                    className="text-red-700 text-2xl cursor-pointer absolute right-2 top-2"
                />
            </div>
        )
    );
};

export default FavCard;
