import React from 'react'
import { Link } from 'react-router-dom';

export const CountryPage = ({country}) => {
    console.log(country);
  return (
    <div>
        <Link to='/'>Back</Link>
        <main>
            <img src={country.flags.svg} alt="" />
        </main>
    </div>
  )
}
