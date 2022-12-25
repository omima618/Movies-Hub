import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requests, movieActions } from '../app/features/movieSlice';
import FavButton from '../components/Buttons/FavButton';
import Rate from '../components/Cards/Rate';
import Layout from '../components/UI/Layout/Layout';
import { FaPlay } from 'react-icons/fa';
import DefaultBD from '../assets/default-bd.jpg';
import defaultPic from '../assets/defaultPic.jpg';
import PersonCard from '../components/Cards/PersonCard';
import HorizontalSlider from '../components/UI/HorizontalSlider';
const MovieDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { movie } = useSelector((state) => state.movies);
    const { cast } = useSelector((state) => state.movies);
    const getYear = (date) => {
        const newDate = new Date(date);
        return newDate.getFullYear();
    };
    const getGenres = (genres) => {
        let allGenres = [];
        genres.forEach((genre) => {
            allGenres.push(genre.name);
        });
        return allGenres.join(', ');
    };
    const getRunTime = (runTime) => {
        const hours = Math.trunc(runTime / 60);
        const mins = runTime % 60;
        return `${hours}h ${mins}m`;
    };
    useEffect(() => {
        dispatch(movieActions.resetMovie());
        dispatch(requests.getMovieDetails({ id: params.id, opt: 'movie' }));
    }, [params]);
    useEffect(() => {
        // movie&&
    }, [movie]);

    return movie ? (
        <>
            <div className="min-h-[90vh] relative">
                <div className="absolute z-[-1] w-full h-full">
                    <img
                        src={`${
                            movie.backdrop_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                : `${DefaultBD}`
                        }`}
                        alt="movie details"
                        className="w-full h-full object-fill"
                    />
                    <div className="overlay absolute inset-0 w-full h-full bg-[#0F1729] opacity-80"></div>
                </div>
                <Layout>
                    <div className="flex flex-col md:flex-row justify-start gap-8 items-start text-white py-12">
                        <div className="w-[80%] mx-auto md-mx-0 md:w-1/2 rounded-xl overflow-hidden">
                            <img
                                src={`${
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                        : `${defaultPic}`
                                } `}
                                alt="movie poster"
                                className="w-full max-h-[400px]"
                            />
                        </div>
                        <div className="w-fit">
                            <h2 className="text-4xl font-bold">
                                {movie.title}
                                <span> ({getYear(movie.release_date)})</span>
                            </h2>
                            <div className="mb-8">
                                <span>{movie.release_date} </span>
                                <span>
                                    ({movie.production_countries[0].iso_3166_1})
                                </span>
                                <span className="px-2 text-2xl font-bold">
                                    .
                                </span>
                                <span>{getGenres(movie.genres)}</span>
                                {movie.runtime !== 0 && (
                                    <>
                                        <span className="px-2 text-2xl font-bold">
                                            .
                                        </span>
                                        <span>{getRunTime(movie.runtime)}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center gap-10 mb-8">
                                <Rate average={movie.vote_average} classes="" />
                                <span className="flex justify-center items-center w-10 h-10 bg-white rounded-[50%]">
                                    <FavButton classes="" data={movie} />
                                </span>
                                <span className="flex justify-center items-center gap-1 text-xl cursor-pointer hover:opacity-70 transition">
                                    <FaPlay className="inline" /> Play Trailer
                                </span>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">
                                    Overview
                                </h3>
                                <p className="w-full lg:w-[70%] opacity-80 leading-7">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="flex items-center gap-10 flex-wrap">
                                {cast.crew.map((person, i) => {
                                    return (
                                        i < 5 && (
                                            <div key={`crew-${i}-${person.id}`}>
                                                <h4 className="font-bold">
                                                    {person.name}
                                                </h4>
                                                <span className="opacity-70">
                                                    {person.job}
                                                </span>
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
            {/* CAST */}
            {cast && (
                <Layout>
                    <div className="flex flex-col lg:flex-row gap-5 items-start my-10 max-w-full">
                        <div className="w-[100%] lg:w-3/4">
                            <h3 className="text-3xl font-bold">
                                Top Billed Cast
                            </h3>
                            <div className=" overflow-hidden">
                                <HorizontalSlider>
                                    {cast.cast.map((person, i) => {
                                        return (
                                            i < 10 && (
                                                <PersonCard
                                                    data={person}
                                                    key={`top-cast-${i}-${person.id}`}
                                                />
                                            )
                                        );
                                    })}
                                </HorizontalSlider>
                            </div>
                        </div>
                        <ul className="px-0 lg:px-4 py-5 lg:py-0 grow shadow-none lg:shadow-lg">
                            <h3 className="text-3xl font-bold mb-8">
                                Extra Details
                            </h3>
                            <li className="mb-3">
                                <h5 className="font-bold text-md">
                                    Original Title
                                </h5>
                                <span className="opacity-70">
                                    {movie.original_title || movie.title}
                                </span>
                            </li>
                            <li className="mb-3">
                                <h5 className="font-bold text-md">
                                    Spoken Language
                                </h5>
                                <span className="opacity-70">
                                    {movie.spoken_languages[0].name || '-'}
                                </span>
                            </li>
                            <li className="mb-3">
                                <h5 className="font-bold text-md">Status</h5>
                                <span className="opacity-70">
                                    {movie.status || '-'}
                                </span>
                            </li>
                            <li className="mb-3">
                                <h5 className="font-bold text-md">Budget</h5>
                                <span className="opacity-70">
                                    {movie.budget || '-'}
                                </span>
                            </li>
                            <li className="mb-3">
                                <h5 className="font-bold text-md">Revenue</h5>
                                <span className="opacity-70">
                                    {movie.revenue || '-'}
                                </span>
                            </li>
                        </ul>
                    </div>
                </Layout>
            )}
        </>
    ) : (
        <div className="text-center p-5">LOADING...</div>
    );
};

export default MovieDetails;
