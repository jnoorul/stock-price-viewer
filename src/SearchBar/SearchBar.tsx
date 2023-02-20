export function SearchBar() {
  return (
    <input
      type="text"
      id="search"
      className="block w-full border-2 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:ring-0"
      placeholder="Search stocks by name or ticker"
    />
  );
}
