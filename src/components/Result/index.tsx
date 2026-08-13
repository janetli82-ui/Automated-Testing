import type { travelType } from "@/type/travel";

type ResultProps = {
  travel: travelType;
  checkedItems: string[];
};

const Result = ({ travel, checkedItems }: ResultProps) => {
  const packedItems = travel.allPackLists.filter((item) =>
    checkedItems.includes(item)
  ).length;

  const totalItems = travel.allPackLists.length;
  const remainingItems = totalItems - packedItems;

  const importantTotal = travel.importantList.length;
  const importantPacked = travel.importantList.filter((item) =>
    checkedItems.includes(item)
  ).length;

  const importantRemaining = importantTotal - importantPacked;

  const isDone = remainingItems === 0;

  return (
    <section className="p-3">
      <h4 className="text-3xl font-normal text-gray-900">Result</h4>

      <div className="mt-8 grid gap-6 text-gray-800 sm:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">Destination</p>
          <p className="mt-1 text-lg flex items-center gap-2">
            <span>{travel.icon}</span>
            <span>{travel.name}</span>
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Packed</p>
          <p className="mt-1 text-lg">
            {packedItems} / {totalItems}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Remaining</p>
          <p className="mt-1 text-lg">{remainingItems}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <p className="text-3xl text-red-500">Important to pack!</p>
        </div>

        <p className="mt-5 text-lg text-gray-700">
          {importantPacked} / {importantTotal} packed
        </p>

        <ul className="mt-4 space-y-3">
          {travel.importantList.map((item) => {
            const isPacked = checkedItems.includes(item);
            return (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5">{isPacked ? "✅" : "⬜️"}</span>
                <span className={isPacked ? "text-gray-400 line-through" : ""}>
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Result;
