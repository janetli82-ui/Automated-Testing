import { travelList } from "@/type/city"

type selectorType = {
  city:string,
  updateCity:(city:string) => void
}

const Selector = ({city, updateCity}:selectorType) => {
  return(
    <div>
      <select value={city} onChange={ (e) => updateCity(e.target.value) }>
        <option value="">🌃What city would you like?</option>
        {travelList.map((item, index) => 
          <option value={item.name} key={index}>{item.icon + item.name}</option>
        )}
      </select>
      {city && <span>{city}</span>}
    </div>
  )
}

export default Selector