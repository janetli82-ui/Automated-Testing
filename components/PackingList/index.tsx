"use client";

import { useState } from "react";
import { travelList } from "@/data/city";

const PackingList = () => {
  const [selectedId, setSelectedId] = useState(travelList[0].id);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const selectedTravel = travelList.find(
    (travel) => travel.id === selectedId
  );

  if (!selectedTravel) {
    return <p>Destination not found.</p>;
  }

  const toggleItem = (item: string) => {
    setCheckedItems((currentItems) => {
      if (currentItems.includes(item)) {
        return currentItems.filter((currentItem) => currentItem !== item);
      }
      return [...currentItems, item];
    });
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid overflow-hidden border border-gray-300 bg-white md:grid-cols-2">
        <div className="flex min-h-5 items-center justify-center border-b border-gray-300 p-8 md:border-r">
          <img
            src={`/${selectedTravel.img}`}
            alt={selectedTravel.name}
            className="h-48 w-full max-w-xs object-cover"
          />
        </div>

        <div className="flex min-h-5 flex-col justify-center p-8">
          <h1 className="text-5xl font-normal text-gray-900">Packing list</h1>

          <p className="mt-8 text-3xl font-normal text-gray-800">
            {selectedTravel.name}
          </p>
        </div>

        <div className="flex min-h-5 items-center justify-center border-b border-gray-300 p-8 md:border-r">
          <img
            src="/world.jpg"
            alt="World map"
            className="max-h-56 w-full object-contain grayscale"
          />
        </div>

        <div className="min-h-5 p-8">
          <div className="mb-8">
            <label
              htmlFor="destination"
              className="mb-3 block text-2xl font-normal text-gray-900"
            >
              Selector
            </label>

            <select
              id="destination"
              value={selectedId}
              onChange={(event) => {
                setSelectedId(Number(event.target.value));
                setCheckedItems([]);
                setSubmitted(false);
              }}
              className="w-full max-w-xs border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:border-gray-700 focus:outline-none"
            >
              {travelList.map((travel) => (
                <option key={travel.id} value={travel.id}>
                  {travel.name}
                </option>
              ))}
            </select>
          </div>

          <h2 className="mb-4 text-2xl font-normal text-gray-900">
            Packing list
          </h2>

          <ul className="space-y-3">
            {selectedTravel.allPackLists.map((item) => {
              const isChecked = checkedItems.includes(item);
              return (
                <li key={item}>
                  <label className="flex cursor-pointer gap-3 text-sm text-gray-800">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(item)}
                      className="mt-0.5 h-4 w-4 accent-gray-800"
                    />
                    <span className={isChecked ? "text-gray-400 line-through" : ""}>
                      {item}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setSubmitted(true)}
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
