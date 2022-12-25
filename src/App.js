import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import List from './pages/List';
import MovieDetails from './pages/MovieDetails';
import TVShowDetails from './pages/TVShowDetails';
import PersonDetails from './pages/PersonDetails';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

// COMPONENTS
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import ScrollToTop from './components/Buttons/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies-hub" element={<Home />} />
                        <Route path="/list/:type" element={<List />} />
                        <Route
                            path="/movie-details/:id"
                            element={<MovieDetails />}
                        />
                        <Route
                            path="/tvshow-details"
                            element={<TVShowDetails />}
                        />
                        <Route
                            path="/person-details"
                            element={<PersonDetails />}
                        />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <ScrollToTop />
                <ToastContainer autoClose={3000} theme="colored" />
                <Footer />
            </Router>
        </>
    );
};

export default App;
