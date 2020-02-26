import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className='App-outer-container'>
            <Navbar />
            <div className='App-inner-container'></div>
            <Footer />
        </div>
    );
}

export default App;
