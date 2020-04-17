import React from 'react';
import Navigation from './Components/Navigation';
import Routes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;