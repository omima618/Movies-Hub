import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero/Hero';
import HomeSection from '../components/UI/Sections/HomeSection';
const Home = () => {
    const { popular, topRated, trending, moviesTrailer } = useSelector(
        (state) => state.movies
    );
    return (
        <section>
            <Hero />
            <HomeSection
                title="What's Popular"
                section="popular"
                options={{ opt1: 'Movies', opt2: 'TV' }}
                data={popular}
            />
            <HomeSection
                title="Top Rated"
                section="top-rated"
                options={{ opt1: 'Movies', opt2: 'TV' }}
                data={topRated}
            />
            {/* <HomeSection
                title="Latest Trailers"
                options={{ opt1: 'Movies', opt2: 'TV' }}
                data={moviesTrailer}
            /> */}
            <HomeSection
                title="Trending"
                section="trending"
                options={{ opt1: 'Today', opt2: 'This week' }}
                data={trending}
            />
        </section>
    );
};

export default Home;
