import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetails from './MovieDetails';
import SeatSelection from './SeatSelection';
import Payment from './Payment';
import SignUp from './SignUp';
import ContactUs from './ContactUs'; // Import ContactUs
import AboutUs from './AboutUs'; // Import AboutUs

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movie-details/:title" element={<MovieDetails />} />
                <Route path="/seat-selection/:title/:price" element={<SeatSelection />} />
                <Route path="/payment/:movieTitle/:selectedTime/:totalPrice" element={<Payment />} />
                <Route path="/about" element={<AboutUs />} /> {/* About Us Route */}
                <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Route */}
            </Routes>
        </Router>
    );
};

export default App;
