import React from "react";

export default function FilterBar({
  filters,
  selectedFilter,
  setSelectedFilter,
}: {
  filters: string[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}) {
  return (
    <div className="flex gap-2 text-sm font-semibold text-grey-80">
      {filters.map((filter) => (
        <div
          key={filter}
          className={`px-4 py-1 rounded-full transition-colors outline outline-1 cursor-pointer ${
            selectedFilter === filter && "bg-turq outline-none"
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
