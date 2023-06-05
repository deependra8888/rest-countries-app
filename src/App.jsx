import { useState } from 'react'
import './App.css'
import {BsFillMoonFill} from 'react-icons/Bs'

import { countries } from './data';
import { CountriesList } from './components/CountriesList';
import { SearchBar } from './components/SearchBar';
import { DropDown } from './components/DropDown';



function App() {
 

  return (
   <div className='App'>
    <header>
      <h1>Where in the world?</h1>
       <div>
        <BsFillMoonFill/>
        <h3>Dark Mode</h3>
       </div>
    </header>
    <SearchBar/>
    <DropDown/>
    <CountriesList/>
   </div>
  )
}

export default App


