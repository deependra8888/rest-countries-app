import { CountryCard } from './CountryCard';
export const CountriesList = ({ data }) => {
    return (
        <div className='wrapper'>
            {data.map((country) => {
                return (
                    <CountryCard
                        key={country?.name?.official}
                        country={country}
                    />
                );
            })}
        </div>
    );
};
