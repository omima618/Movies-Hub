import Styel from './Hero.module.css';
import { FiSearch } from 'react-icons/fi';
const Hero = () => {
    return (
        <section className={`${Styel['hero']} relative`}>
            <div className="bg-primary opacity-60 w-full h-full absolute top-0 left-0"></div>
            <div className="text-center w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-3">
                    Movies HuB
                </h1>
                <p className="text-md md:text-lg lg:text-xl mb-3">
                    Makes it easy to find and enjoy <br />
                    the entertainment you love in one place...
                </p>
                <div className=" w-11/12 lg:w-3/4 mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search for a movie, TV Show, or a person..."
                        className="input input-bordered input-primary rounded-3xl text-gray-500 block w-full placeholder:text-sm"
                    />
                    <button
                        className="btn btn-primary absolute right-0 top-0 rounded-3xl"
                        title="search"
                    >
                        <FiSearch className="text-lg" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
