import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryInfo() {
    const { countryName } = useParams();

    //do fetch on country-official-name
    

    return <h1>{countryName}</h1>;
}
