import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar({
  input,
  setInput,
}: {
  input: string;
  setInput: (input: string) => void;
}) {
  return (
    <div className="w-full desktop:w-1/4 flex items-center">
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent border-b placeholder-grey-60 border-black py-4 w-full focus:outline-none focus:border-b focus:border-turq"
      />
      <div className="bg-turq rounded-full h-fit w-fit p-2 -ml-12">
        <MagnifyingGlassIcon className="size-6" />
      </div>
    </div>
  );
}
