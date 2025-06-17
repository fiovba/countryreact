import { useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {Route,Routes} from "react-router-dom"
import Error from './Error'
import Details from './Details'

Details

function App() {
const [countryData,setfData] = useState([])
const [region,setRegion] = useState(null)
useEffect(()=>{
  fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
        .then(res=>res.json())
        .then(item=>setfData(item))
},[])

  return (
    <>
    <Header setRegion={setRegion} countryData = {countryData}/>
    <Routes>
     <Route path="/" element={<Main countryData={countryData} />} />
      <Route path="/region/:regionName" element={<Main countryData={countryData} />} />
      <Route path="/country/:alpha3Code" element={<Details countryData={countryData} />} />
      <Route path="/*" element={<Error />} />  {/* Bu sonda olmalıdı */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
