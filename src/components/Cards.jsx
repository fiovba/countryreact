import React from "react";
import { Link } from "react-router-dom";
function Cards({country}){
    const {flag,name,capital,population,region,alpha3Code} = country
    return(
        <>
        <Link to={`/country/${alpha3Code}`}>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-800 dark:text-white border-1 dark:border-gray-400">
            <img src={flag} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8 dark:text-white">
                <div className="space-y-2 dark:text-white">
                    <h2 className="text-3xl  dark:text-white font-semibold tracking-wide">{name}</h2>
                    <p className=" dark:text-white">{region},{capital},{population}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
            </div>
        </div>
        </Link>
        
        </>
    )
}
export default Cards
