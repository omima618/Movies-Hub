import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { favoriteActions } from '../app/features/favoriteSlice';
import noItems from '../assets/no-items.png';
import Layout from '../components/UI/Layout/Layout';
import FavCard from '../components/Cards/FavCard';
import Heading from '../components/UI/Heading';
const Favorites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.favorite);
    return (
        <section className="py-5 md:py-10">
            <Layout>
                <div className="flex justify-between items-center">
                    <Heading title="Favorites" />
                    <p className="text-lg">
                        Total items : {favorites.length || 0}
                    </p>
                </div>
                {favorites.length === 0 ? (
                    <div className="text-center min-h-[300px] py-10">
                        <p className="mb-5">
                            No items to show <br /> Browse and discover more...
                        </p>
                        <img
                            src={noItems}
                            alt="Browse for more!"
                            className="w-[200px] block mx-auto cursor-pointer"
                            onClick={() => {
                                navigate('/');
                            }}
                        />
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-evenly items-start py-10">
                        {favorites.map((item) => (
                            <FavCard key={item.id} data={item} />
                        ))}
                    </div>
                )}
            </Layout>
        </section>
    );
};

export default Favorites;
