export default function CategoriesTag({
  filters,
  selectedCategory,
  setSelectedCategory,
}: {
  filters: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
    return (
    <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold text-grey-80">
      {filters.map((filter) => (
        <div
          key={filter}
          className={`px-4 py-1 rounded-full transition-colors outline outline-1 cursor-pointer ${
            selectedCategory === filter && "bg-turq outline-none"
          }`}
          onClick={() => {
            setSelectedCategory(filter);
          }}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}