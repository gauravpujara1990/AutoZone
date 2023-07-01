import React, { useState } from 'react';
import Header from './components/header';
import ResidentList from './components/residentList';
import './App.css';

function App() {
  const [residentList, setResidentList] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState([]);
  return (
    <div className="App">
     <Header setResidentList={setResidentList} setSelectedPlanet={setSelectedPlanet} />
     <ResidentList residentList={residentList} selectedPlanet={selectedPlanet}/>
    </div>
  );
}

export default App;
