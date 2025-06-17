import React from "react";
import { Link } from "react-router-dom";
function Sidebar({regDataArr,status}){

    return(
        <>
       <aside className={`border-b-1 dark:border-white w-full p-6 sm:w-60 dark:bg-gray-800 text-gray-800  dark:text-white ${status ? 'block' : 'hidden'}`}>
        <nav className="space-y-8 text-sm font-medium">
            <div className="space-y-4">
            {regDataArr.map((item, index) => (
                <Link 
                key={index} 
                to={`/region/${item}`} 
                className="block px-4 py-2  "
                >
                {item}
                </Link>
            ))}
            </div>
        </nav>
        </aside>


        </>
    )
}
export default Sidebar