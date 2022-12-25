import { useState, useEffect } from 'react';
import defaultPic from '../../assets/defaultPic.jpg';
const PersonCard = (props) => {
    const [cardData, setCardData] = useState(null);
    useEffect(() => {
        setCardData(props.data);
    }, [props]);
    return (
        cardData && (
            <div className="card w-32 md:w-40 h-full bg-base border-0 mr-3 sm:mr-5 shrink-0 relative">
                <figure className="mb-2">
                    <img
                        // onClick={() => {
                        //     navigate('/movie-details');
                        // }}
                        src={
                            cardData.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${cardData.profile_path}`
                                : defaultPic
                        }
                        alt={cardData.title}
                        className=" h-48 object-cover w-full cursor-pointer"
                    />
                </figure>
                <div className="card-body p-1 mb-3">
                    <h3
                        // onClick={() => {
                        //     navigate('/movie-details');
                        // }}
                        className="card-title text-sm md:text-lg cursor-pointer"
                    >
                        {cardData.name}
                    </h3>
                    {cardData.character && (
                        <span className="opacity-70 text-sm">{cardData.character}</span>
                    )}
                    {!cardData.character && (
                        <p className="text-sm text-gray-500">
                            {cardData.known_for_department}
                        </p>
                    )}
                </div>
            </div>
        )
    );
};

export default PersonCard;
