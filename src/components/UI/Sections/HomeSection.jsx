import Layout from '../Layout/Layout';
import Heading from '../Heading';
import ToggolerButton from '../../Buttons/TogglerButton';
import HorizontalSlider from '../HorizontalSlider';
import MovieCard from '../../Cards/MovieCard';
import TrailerCard from '../../Cards/TrailerCard';
const HomeSection = (props) => {
    const { title, options, data: MoviesData, section: sectionType } = props;
    return (
        <section className="py-5 md:py-10">
            <Layout>
                <div className="flex justify-between md:justify-start items-center">
                    <Heading title={title} />
                    <ToggolerButton options={options} section={sectionType} />
                </div>
                {MoviesData && (
                    <HorizontalSlider>
                        {/* RENDER TRAILERS CARDS */}
                        {title === 'Latest Trailers' &&
                            MoviesData.map((movieData) => (
                                <TrailerCard
                                    key={movieData.id}
                                    data={movieData}
                                />
                            ))}
                        {/* RENDER MOVIES CARDS */}
                        {title !== 'Latest Trailers' &&
                            MoviesData.map((movieData) => (
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
