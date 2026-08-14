import { travelList } from "@/data/city"


type listItemType={
  selectedId:number,
  selectedLists:string[]
  updateChangeBox:(lists:string[]) => void
}

const ListItems = ({ selectedId, selectedLists, updateChangeBox}:listItemType) => {
  const handleChange = (list:string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    if(isChecked){
      updateChangeBox([...selectedLists, list])
    }else{
      updateChangeBox(selectedLists.filter(item => item !== list))
    }
  }

  return(
    <div className="flex flex-col p-2">
      {travelList[selectedId].allPackLists.map((packList, index) =>
      <label htmlFor={packList} key={index}>
        <input type="checkbox" value={packList} id={packList} checked={selectedLists.includes(packList)} onChange={handleChange(packList)} data-testid="list-item"/>
        {packList}
      </label>)}
    </div>
  )
}

export default ListItems