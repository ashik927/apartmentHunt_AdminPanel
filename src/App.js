import React from 'react'
import './App.css';
import Apartment from './Components/Apartment/Apartment';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Banner></Banner>
      <Apartment/>
    </div>
  );
}

export default App;
