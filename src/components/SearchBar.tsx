import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  return (
    <div className="w-1/4 flex items-center">
      <input
        placeholder="Search"
        className="bg-transparent border-b placeholder-grey-60 border-black py-4 w-full focus:outline-none"
      />
      <div className="bg-turq rounded-full h-fit w-fit p-2 -ml-12">
        <MagnifyingGlassIcon className="size-6" />
      </div>
    </div>
  );
}
