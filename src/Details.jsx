import React from 'react';
import { useParams } from 'react-router-dom';

function Details({ countryData }) {
  const { alpha3Code } = useParams(); 
  console.log(alpha3Code);
  
  const data = countryData.find(item => item.alpha3Code === alpha3Code);
  console.log(data);
  



  return (
   <section className="p-6 lg:p-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center">
  <div className="container mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-5xl">
    <div className="flex flex-col lg:flex-row">
      {/* Şəkil */}
      <img
        src={data?.flag}
        alt={data?.name}
        className="w-full lg:w-1/2 h-80 object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none shadow-md"
      />

      {/* Məlumatlar */}
      <div className="p-8 flex flex-col justify-center space-y-4 lg:w-1/2">
        <span className="uppercase text-sm tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
          {data?.region}
        </span>
        <h3 className="text-4xl font-extrabold">{data?.name}</h3>
        <p className="text-lg font-medium">
          Population: <span className="font-normal">{data?.population.toLocaleString()}</span>
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Capital: <span className="font-semibold">{data?.capital}</span> | Subregion: <span className="font-semibold">{data?.subregion}</span>
        </p>
      </div>
    </div>
  </div>
</section>

  );
}

export default Details;
