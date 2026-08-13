'use client'
import { useState, useEffect } from "react"
import Selector from "@/components/Selector";
import Header from "../components/Header";
import PackingList from "@/components/PackingList";
import Result from "@/components/Result";
import { travelList } from "@/data/city";

export default function Home() {
  const [city, setCity] = useState("")
  const selectedTravel = travelList.find((travel) => travel.name === city);
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (selectedCity:string) => {
    setCity(selectedCity)
  }

  const handleClick = () => {
      setSubmitted(!submitted)
  }

  useEffect(() => {
    setSelectedLists([]);
    setSubmitted(false);
  }, [city]);
  
  return ( 
    <div className="m-auto flex flex-col gap-5">
      <Header />
      <Selector city={city} updateCity={handleChange}/>
      {selectedTravel && <PackingList selectedId={selectedTravel.id} img={selectedTravel.img} name={selectedTravel.name} selectedLists={selectedLists} updateFunction={setSelectedLists} updateClick={handleClick}/>}
      {selectedTravel && submitted && <Result travel={selectedTravel} checkedItems={selectedLists}/>}
    </div>
 )
}
