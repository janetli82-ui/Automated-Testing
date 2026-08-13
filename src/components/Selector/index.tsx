import { travelList } from "@/data/city"
import PackingList from "../PackingList"

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
      <PackingList city={city} />
    </div>
  )
}

export default Selector