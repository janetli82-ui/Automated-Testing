'use client'

import { useState } from "react"
import Selector from "@/components/Selector";
import Header from "../components/Header";

export default function Home() {
  const [city, setCity] = useState("")
  const handleChange = (selectedCity:string) => {
    setCity(selectedCity)
  }
  
  return ( 
    <div className="m-auto flex flex-col gap-5">
      <Header />
      <div className="flex gap-5">
        <img src="/world.jpg" alt="world" className="w-30 h-fit"/>
        <Selector city={city} updateCity={handleChange}/>
      </div>
    </div>
 )
}
