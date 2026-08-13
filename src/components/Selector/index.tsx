import { travelList } from "@/data/city"


type selectorType = {
  city:string,
  updateCity:(city:string) => void
}

const Selector = ({city, updateCity}:selectorType) => {
  return(
    <div className="m-auto flex gap-10 p-6">
      <img src="/world.jpg" alt="world" className="w-30 h-fit"/>
      <select value={city} onChange={ (e) => updateCity(e.target.value)} data-testid="city">
        <option value="">🌃What city would you like?</option>
        {travelList.map((item, index) => 
          <option value={item.name} key={index}>{item.icon + item.name}</option>
        )}
      </select>
    </div>
  )
}

export default Selector