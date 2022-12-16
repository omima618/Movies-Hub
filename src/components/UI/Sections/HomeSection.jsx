import Layout from '../Layout/Layout';
import Heading from '../Heading';
import ToggolerButton from '../../Buttons/TogglerButton';
import HorizontalSlider from '../HorizontalSlider';
import MovieCard from '../../Cards/MovieCard';
import TrailerCard from '../../Cards/TrailerCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requests, movieActions } from '../../../app/features/movieSlice';
const HomeSection = (props) => {
    const dispatch = useDispatch();
    const { title, options, data: moviesData, section: sectionType } = props;
    const { trailers } = useSelector((state) => state.movies);
    useEffect(() => {
        if (
            sectionType &&
            sectionType === 'trailer' &&
            moviesData.keys.length > 0
        ) {
            dispatch(movieActions.resetTrailers());
            moviesData.keys.forEach((key) => {
                dispatch(
                    requests.getTrailer({
                        id: key,
                        opt: moviesData.opt,
                    })
                );
            });
        }
    }, [moviesData]);
    return (
        <section className="py-5 md:py-10">
            <Layout>
                <div className="flex justify-between md:justify-start items-center">
                    <Heading title={title} />
                    <ToggolerButton options={options} section={sectionType} />
                </div>
                {moviesData && (
                    <HorizontalSlider>
                        {/* RENDER TRAILERS CARDS */}
                        {title === 'Latest Trailers' &&
                            trailers.length > 0 &&
                            trailers.map((trailerId) => (
                                <TrailerCard key={trailerId} data={trailerId} />
                            ))}
                        {/* RENDER MOVIES CARDS */}
                        {title !== 'Latest Trailers' &&
                            moviesData.map((movieData) => (
                                <MovieCard
                                    key={movieData.id}
                                    data={movieData}
                                />
                            ))}
                    </HorizontalSlider>
                )}
            </Layout>
        </section>
    );
};

export default HomeSection;
