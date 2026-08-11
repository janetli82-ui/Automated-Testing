'use client'

import { useState } from "react"
import Selector from "@/components/Selector";

export default function Home() {
  const [city, setCity] = useState("")
  const handleChange = (selectedCity:string) => {
    setCity(selectedCity)
  }
  return (
    <div>
      <Selector city={city} updateCity={handleChange}/>
    </div>
  );
}
