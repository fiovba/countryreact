import React, { useState } from "react";
import Cards from "./Cards";
import Title from "./Title";
import RandomCards from "./RandomCards";
import { Link, useParams } from "react-router-dom";

function Main({countryData}){
    const [value,setValue] = useState('')
    const [status,setStatus] = useState(false)
    const {regionName }= useParams()
    

    return(
        <>
        
        {
           !regionName && <Title status={status} setStatus={setStatus} setValue={setValue} />
        }
        {
          !regionName && !status && <RandomCards countryData={countryData}/>
        }
      
      <section className="flex flex-wrap gap-4 p-3 justify-center items-center dark:bg-gray-800 dark:text-gray-100">
          {
            countryData
            .filter(item=> regionName ? item.region==regionName : item)
            .filter(item=> item.name.toLowerCase().includes(value.toLowerCase()))
            .map((country) =><Cards key={country.alpha3Code} country = {country}/>)
          }
      </section>
        </>
    )
}
export default Main