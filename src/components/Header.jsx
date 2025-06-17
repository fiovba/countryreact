import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
function Header({countryData, setRegion}){
    const [status,setStatus]=useState(false)
    const [handleMode,setMode] = useState(false)
    const regDataArr = [...new Set(countryData.map(country=>country.region))]
    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function handleTheme() {
    const newMode = !handleMode;
    setMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

    return (
        <>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                
                <div className="container flex items-center justify-between h-16 mx-auto md:justify-center md:space-x-8">
                    <Link to='/'>
                    <GiWorld  className="justify-center flex items-center" size={50} />
                    </Link>
                    
                  <ul className="items-stretch hidden space-x-3 md:flex">
                    {regDataArr.map((item, index) => (
                        <li key={index} className="flex">
                        <Link to={`/region/${item}`}>
                            <p className="flex text-sm lg:text-lg items-center px-2 -mb-1 border-b-2 dark:border-gray-500">
                            {item}
                            </p>
                        </Link>
                        </li>
                    ))}
                    </ul>

                    <div >
                            {
                                handleMode ?
                                <AiOutlineSun onClick={handleTheme} className="text-[40px] transition-all duration-300 hover:rotate-45 hover:scale-110  "  /> :
                                <AiOutlineMoon onClick={handleTheme}  className="text-[40px]  transition-all duration-300 hover:rotate-45 hover:scale-110"   />
                            }
                    </div>
                    
                    <button title="Button" type="button" className="p-4 md:hidden" onClick={()=>setStatus(!status)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
            </button>
            
        </div>
            </header>
           <Sidebar  regDataArr={regDataArr} status={status}/>
        </>
    )
}
export default Header