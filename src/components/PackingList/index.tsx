"use client";

import { useEffect, useState } from "react";
import { travelList } from "@/data/city";

type PackingListProps = {
  city: string;
};

const PackingList = ({ city }: PackingListProps) => {
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const selectedTravel = travelList.find(
    (travel) => travel.name === city
  );

  const selectedId = travelList.findIndex(
    (travel) => travel.name === city
  );

  useEffect(() => {
    setSelectedLists([]);
    setSubmitted(false);
  }, [city]);

  if (!selectedTravel) {
    return <p>Please select your destination</p>;
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid overflow-hidden border border-gray-300 bg-white md:grid-cols-2">

        <div className="flex min-h-5 flex-col justify-center p-8">
          <h1 className="text-5xl font-normal text-gray-900">
            Packing list
          </h1>

          <p className="mt-8 text-3xl font-normal text-gray-800">
            {selectedTravel.name}
          </p>
        </div>

          <div className="flex min-h-5 items-center justify-center border-b border-gray-300 p-8 md:border-r">
            <img
              src={`/${selectedTravel.img}`}
              alt={selectedTravel.name}
              className="h-48 w-full max-w-xs object-cover"
            />
          </div>

        <div className="min-h-5 p-8">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="mt-8 w-full max-w-xs rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
          >
            Submit
          </button>

          {submitted && (
            <p className="mt-4 text-gray-800">
              You selected {selectedLists.length} item
              {selectedLists.length !== 1 ? "s" : ""}.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default PackingList;