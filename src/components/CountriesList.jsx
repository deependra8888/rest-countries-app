import {useState} from 'react'
import { countries } from '../data'
import { CountriesCard } from './CountriesCard';
import '../App.css'
export const CountriesList = ({data, setcountry}) => {
 
  return (
    <div className='wrapper'>
        {
            data.map(( country) => {
                return <CountriesCard key={Math.random()}
                country={country}
                setcountry={setcountry}
                />
            })
        }
    </div>
  )
}
