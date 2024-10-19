import { useEffect } from "react";
import { useState } from "react";
import Centry from "../Centry/Centry";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVistedCountries] = useState([])
    const [visitedFlags, setvisitedFlags] = useState([])

   useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   }, [])

   const handleVisitedCountry = (country) => {
    console.log('add visit country')
    const newVisitedCountries = [...visitedCountries, country]
    setVistedCountries(newVisitedCountries)
   }

   const handleVisitedFlags = (flags) => {
       const newFlags = [...visitedFlags, flags]
       setvisitedFlags(newFlags)

   }

//    remove elements


    return (
        <div>
            <h2>Countries: {countries.length}</h2>

            <div className="flags-container">
                {
                    visitedFlags.map((flags,idx) => <img key={idx} src ={flags}></img>)
                }
            </div>

                {/* visited countries */}
            <div>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
            </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Centry
                    key={country.cca3}
                    handleVisitedCountry = {handleVisitedCountry}
                    country = {country}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Centry>)
                }
            </div>
        </div>
    );
};

export default Countries;