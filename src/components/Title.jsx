import React, { useState } from 'react'

 function Title({status,setStatus,setValue}) {
    
    
    function handleInput(){
        setStatus(!status)
    }
  return (
    <>
      <section className="dark:bg-gray-800 bg-gray-200 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold  leading-none sm:text-5xl">Welcome to CountryApp Website
                </h1>
                <p className="px-8 mt-8 mb-12 text-purple-500 font-bold text-lg">You can find data of any country in this website.</p>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Have a Look</button>
                    <button onClick={handleInput} className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-100 dark:border-gray-300">Search</button>
                    <input type="search" onChange={(e)=> setValue(e.target.value)} placeholder='Search' className={ `rounded-md border-1 dark:border-white border-black p-2 ${status ? 'flex': 'hidden'}`}  />
                </div>
            </div>
        </section>
    </>
  )
}
export default Title
