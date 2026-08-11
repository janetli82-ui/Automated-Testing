'use client'

import ListItems from "@/components/ListItems";
import { travelList } from "@/type/city";
import { useState } from "react";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>("")
  const findCity = travelList.find(item => item.name === selectedCity)
  const [selectedLists, setSelectedLists] = useState<string[]>([])
  const handleChange = (selectedCity:string) => {
    setSelectedCity(selectedCity)
  }
 

  return (
    <div>
      {findCity && <ListItems selectedId={findCity.id} selectedLists={selectedLists} updateChangeBox={setSelectedLists}/>}
    </div>
  );
}
