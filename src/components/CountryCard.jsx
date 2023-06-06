import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const CountryCard = ({ country }) => {
    const navigate = useNavigate();
    if (!country) {
        return;
    }
    return (
        <div
            className='card'
            onClick={() => {
                navigate(`./${country.name.official}`);
            }}
        >
            <img
                src={country.flags.png}
                alt=''
            />

            <h3 className='name'>{country.name.common}</h3>

            <h3>
                <span>Population:</span> {country.population}
            </h3>
            <h3>
                <span>Region:</span> {country.region}
            </h3>
            <h3>
                <span>Capital:</span> {country.capital}
            </h3>
        </div>
    );
};
