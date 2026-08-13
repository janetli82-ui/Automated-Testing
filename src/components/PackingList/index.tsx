import ListItems from "../ListItems";


type PackingListProps = {
  selectedId:number,
  img:string,
  name:string,
  selectedLists: string[];
  updateFunction: (list:string[]) => void
  updateClick: () => void
};

const PackingList = ({ name, img, selectedId, selectedLists, updateFunction, updateClick }: PackingListProps) => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid overflow-hidden border border-gray-300 bg-white md:grid-cols-2">
        <div className="flex min-h-5 flex-col justify-center p-8">
          <h3 className="text-5xl font-normal text-gray-900">
            Packing list
          </h3>
          <p className="mt-8 text-3xl font-normal text-gray-800">
            {name}
          </p>
        </div>
          <div className="flex min-h-5 items-center justify-center border-b border-gray-300 p-8 md:border-r">
            <img
              src={img}
              alt={name}
              className="h-48 w-full max-w-xs object-cover"
            />
          </div>
         <ListItems  selectedId={selectedId} selectedLists={selectedLists} updateChangeBox={updateFunction}/>
        <div className="min-h-5 p-8">
          <button
            type="button"
            onClick={updateClick}
            className="mt-8 w-full max-w-xs rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default PackingList;