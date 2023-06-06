import { useState } from 'react'
import './App.css'
import { BsFillMoonFill } from 'react-icons/Bs'

import { countries } from './data';
import { CountriesList } from './components/CountriesList';
import { SearchBar } from './components/SearchBar';
import { DropDown } from './components/DropDown';
import { Route, Routes } from 'react-router-dom'
import { CountryPage } from './components/CountryPage';


function App() {
  const [data, setdata] = useState(countries)
  const [country, setcountry] = useState([])
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home setdata={setdata} data={data} setcountry={setcountry} />} />
        <Route path='country' element={<CountryPage country={country} />} />
      </Routes>
    </div>
  )
}

export default App

const Home = ({ setdata, data, setcountry }) => {

  return <>
    <SearchBar setdata={setdata} data={data} />
    <DropDown data={data} setdata={setdata} />
    <CountriesList data={data} setcountry={setcountry} />
  </>
}

const Header = () => {
  return <>
    <header>
      <h1>Where in the world?</h1>
      <div>
        <BsFillMoonFill />
        <h3>Dark Mode</h3>
      </div>
    </header>
  </>
}




