import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../app/features/uiSlice';
import { RiMovie2Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import Layout from '../UI/Layout/Layout';
const Header = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.ui);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    // THEME HANDLER
    const toggleTheme = (theme) => {
        dispatch(uiActions.changeTheme(theme));
    };
    useEffect(() => {
        dispatch(uiActions.checkForFavTheme());
    }, [dispatch]);

    // THEME ICONS
    const DarkIcon = (
        <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
                toggleTheme('night');
            }}
        >
            <svg
                className="fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
        </button>
    );
    const LightIcon = (
        <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
                toggleTheme('light');
            }}
        >
            <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
        </button>
    );

    return (
        <nav className="w-full bg-base-100 sticky top-0 z-20">
            <Layout>
                <div className="navbar p-0 m-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="cursor-pointer"
                                onClick={() => {
                                    setShowDropdown((prev) => {
                                        return !prev;
                                    });
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            {/* DROPDOWN */}
                            <ul
                                tabIndex={0}
                                className={`
                                ${showDropdown ? 'block' : 'hidden'}
                                menu dropdown-content z-50 mt-3 p-3 shadow shadow-gray-400 bg-base-100 rounded-box w-52`}
                            >
                                <li
                                    className="cursor-pointer mb-3 rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="cursor-pointer mb-3 rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/">
                                        Categories
                                    </Link>
                                </li>
                                <li
                                    className="cursor-pointer mb-3 rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/list/movie">
                                        Movies
                                    </Link>
                                </li>
                                <li
                                    className="cursor-pointer mb-3 rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/list/tv">
                                        TV Show
                                    </Link>
                                </li>
                                <li
                                    className="cursor-pointer mb-3 rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/list/person">
                                        People
                                    </Link>
                                </li>
                                <li
                                    className="cursor-pointer rounded-md"
                                    onClick={() => {
                                        setShowDropdown((prev) => {
                                            return !prev;
                                        });
                                    }}
                                >
                                    <Link className="text-lg" to="/favorites">
                                        Favorites
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* LOGO */}
                    <div className="navbar-center">
                        <Link to="/" className="text-xl font-bold">
                            Movies
                            <RiMovie2Line className="inline" />
                            HuB
                        </Link>
                    </div>
                    <div className="navbar-end">
                        {/* SEARCH */}
                        <button
                            className="btn btn-ghost btn-circle"
                            onClick={() => {
                                setShowSearchBar((prev) => {
                                    return !prev;
                                });
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        {theme === 'night' ? LightIcon : DarkIcon}
                    </div>
                </div>
                {/* SEARCH BAR  */}
                {showSearchBar && (
                    <div className=" w-full mx-auto mb-5 relative transition transition-500">
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
                )}
            </Layout>
        </nav>
    );
};

export default Header;
