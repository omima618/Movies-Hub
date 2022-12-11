import Layout from '../components/UI/Layout/Layout';
import Heading from '../components/UI/Heading';
import { useSelector, useDispatch } from 'react-redux';
import { movieActions, requests } from '../app/features/movieSlice';
import { useEffect, useState } from 'react';
import MovieCard from '../components/Cards/MovieCard';
import { useParams } from 'react-router-dom';
import PersonCard from '../components/Cards/PersonCard';
const List = () => {
    const dispatch = useDispatch();
    const reqType = useParams().type;
    const [pageNum, setPageNum] = useState(1);
    const { popular } = useSelector((state) => state.movies);
    useEffect(() => {
        reqType === 'movie' &&
            dispatch(requests.getPopular({ opt: 'movie', pageNum: pageNum }));
        reqType === 'tv' &&
            dispatch(requests.getPopular({ opt: 'tv', pageNum: pageNum }));
        reqType === 'person' &&
            dispatch(requests.getPopular({ opt: 'person', pageNum: pageNum }));
    }, [pageNum, reqType]);
    useEffect(() => {
        setPageNum(1);
    }, [reqType]);
    return (
        <section className="py-5 md:py-10">
            <Layout>
                <div className="flex justify-between items-center">
                    <Heading
                        title={
                            reqType === 'movie'
                                ? 'All Movies'
                                : reqType === 'tv'
                                ? 'TV Shows'
                                : 'Popular People'
                        }
                    />
                    {/* PAGINATION */}
                    <div className="btn-group flex w-fit mt-5">
                        <button
                            className="btn btn-sm btn-primary text-xl"
                            disabled={pageNum === 1}
                            onClick={() => {
                                setPageNum((prev) => {
                                    return prev - 1;
                                });
                            }}
                        >
                            «
                        </button>
                        <button className="btn btn-sm  btn-disabled text-primary text-xl">
                            {pageNum}
                        </button>
                        <button
                            className="btn btn-sm  btn-primary text-xl"
                            disabled={pageNum === 1000}
                            onClick={() => {
                                setPageNum((prev) => {
                                    return prev + 1;
                                });
                            }}
                        >
                            »
                        </button>
                    </div>
                </div>
                {popular.length > 0 && (
                    <div className="py-10">
                        <div className="flex justify-between items-start flex-wrap mb-3">
                            {popular.map((item) =>
                                reqType === 'person' ? (
                                    <PersonCard key={item.id} data={item} />
                                ) : (
                                    <MovieCard key={item.id} data={item} />
                                )
                            )}
                        </div>
                        {/* PAGINATION */}
                        <div className="btn-group flex mx-auto w-fit mt-5">
                            <button
                                className="btn btn-sm btn-primary text-xl"
                                disabled={pageNum === 1}
                                onClick={() => {
                                    setPageNum((prev) => {
                                        return prev - 1;
                                    });
                                }}
                            >
                                «
                            </button>
                            <button className="btn btn-sm  btn-disabled text-primary text-xl">
                                {pageNum}
                            </button>
                            <button
                                className="btn btn-sm  btn-primary text-xl"
                                disabled={pageNum === 1000}
                                onClick={() => {
                                    setPageNum((prev) => {
                                        return prev + 1;
                                    });
                                }}
                            >
                                »
                            </button>
                        </div>
                    </div>
                )}
            </Layout>
        </section>
    );
};

export default List;
