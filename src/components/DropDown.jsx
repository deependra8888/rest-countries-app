import {useState} from 'react'
import '../App.css'
import { countries } from './../data';
export const DropDown = ({data, setdata}) => {
  const [value, setvalue] = useState('')

  const filter = (name) => {
    setdata(countries.filter(country => country.region === name))
  }

  return (
    <select onChange={(e) =>{
      setvalue(e.target.value)
      filter(e.target.value)
    }} className='select' name="" id="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
    </select>
  )
}
