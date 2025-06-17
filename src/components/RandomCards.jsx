import React, { useEffect, useState } from 'react'

export default function RandomCards({ countryData }) {
    const [country,setCountry] = useState({})
    useEffect(()=>{
       if(countryData.length){
         function getRnd(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
            const randNum = getRnd(0,countryData.length-1)
            setCountry(countryData[randNum])
       }
    },[countryData])
    
    return (
    <div className="w-full flex flex-col md:flex-row dark:bg-gray-800 dark:text-gray-100 justify-center items-center gap-12 p-12 bg-white ">
      <img
        src={country?.flag}
        alt="Flag"
        className="w-[400px] h-auto rounded-xl shadow-md"
      />
      <div>
        <h2 className="text-5xl font-bold dark:text-white text-gray-800">{country?.name}</h2>
        <p className="text-2xl dark:text-white text-gray-700 mt-6">
          <span className="font-semibold">Capital:</span>{country?.capital}
        </p>
        <p className="text-2xl dark:text-white text-gray-700 mt-2">
          <span className="font-semibold">Population:</span> {country?.population}
        </p>
      </div>
    </div>
  )
}
