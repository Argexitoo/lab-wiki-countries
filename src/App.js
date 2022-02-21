import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import countriesList from "./countries.json";
import {Route, Routes} from "react-router-dom"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';



function App() {

  const [countries, setCountries] = useState(countriesList)
  return (

    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />}/>
        <Route path=":alpha3Code" element={<CountryDetails countries={countries} />}/>
      </Routes>
      
      
        
      
    </div>
  );
}

export default App;
