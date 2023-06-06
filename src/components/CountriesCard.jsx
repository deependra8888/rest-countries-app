import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

export const CountriesCard = ({ country, setcountry }) => {

    return (
        <div className='card' onClick={() => 
            setcountry(country)  
        }>
            <img src={country.flags.png} alt="" />
            
            <Link to='country'>
            <h3 className='name'>{country.name}</h3>
            </Link>
            <h3><span>Population:</span> {country.population}</h3>
            <h3><span>Region:</span> {country.region}</h3>
            <h3><span>Capital:</span> {country.capital}</h3>
        </div>
    )
}
