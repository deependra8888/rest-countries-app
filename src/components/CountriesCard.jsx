import React from 'react'
import '../App.css'

export const CountriesCard = ({ name, capital, population, region, flags }) => {
    console.log(flags);
    return (
        <div className='card'>
            <img src={flags.png} alt="" />
            <h3 className='name'>{name}</h3>
            <h3><span>Population:</span> {population}</h3>
            <h3><span>Region:</span> {region}</h3>
            <h3><span>Capital:</span> {capital}</h3>
        </div>
    )
}
