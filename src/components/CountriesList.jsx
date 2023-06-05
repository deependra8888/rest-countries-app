import React from 'react'
import { countries } from '../data'
import { CountriesCard } from './CountriesCard';
import '../App.css'
export const CountriesList = () => {
  return (
    <div className='wrapper'>
        {
            countries.map(({name, capital, population, region, flags} = country) => {
                return <CountriesCard key={Math.random()}
                name={name} population={population} capital={capital} region={region} flags={flags}
                />
            })
        }
    </div>
  )
}
