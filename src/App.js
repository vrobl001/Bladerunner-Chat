import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Reusable components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page components
import Home from './pages/Home/Home';

import './App.css';

function App() {
    return (
        <div className='App-outer-container'>
            <Navbar />
            <div className='App-inner-container'>
                <Switch>
                    <Route path='/' render={props => <Home />} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
