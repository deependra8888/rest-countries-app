import { useState } from 'react';
export const SearchBar = ({ setdata, data }) => {
    const [value, setvalue] = useState('');
    const search = (name) => {
        setdata(data.filter((country) => country.name.toLowerCase().includes(name.toLowerCase())));
    };
    return (
        <form onSubmit={() => e.preventDefault()}>
            <input
                onChange={(e) => {
                    setvalue(e.target.value);
                    search(e.target.value);
                }}
                type='text'
                placeholder='seach countries'
            />
        </form>
    );
};
