import React, { useEffect, useState } from 'react';
import { CountriesList } from './CountriesList';

export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <>
            {/* <SearchBar
                setdata={setdata}
                data={data}
            />
            <DropDown
                data={data}
                setdata={setdata}
            /> */}
            <CountriesList data={data} />
        </>
    );
}
