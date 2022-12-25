import defaultPic from '../../assets/defaultPic.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rate from './Rate';
import FavButton from '../Buttons/FavButton';
const MovieCard = (props) => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState(null);
    useEffect(() => {
        setCardData(props.data);
    }, [props]);
    return (
        cardData && (
            <div className="card w-36 md:w-48 h-full bg-base border-0 mr-3 sm:mr-5 shrink-0 relative">
                <figure className="mb-2">
                    <img
                        onClick={() => {
                            navigate(`/movie-details/${cardData.id}`);
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
                            navigate(`/movie-details/${cardData.id}`);
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
                <Rate
                    average={cardData.vote_average}
                    classes="absolute top-[165px] left-2"
                />
                {/* ADD TO FAV */}
                <FavButton classes="absolute right-2 top-2" data={cardData} />
            </div>
        )
    );
};

export default MovieCard;
