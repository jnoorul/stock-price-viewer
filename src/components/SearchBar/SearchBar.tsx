import { useState } from 'react';
import { SearchResults } from './SearchResults';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <input
        type="text"
        id="search"
        className="block w-full border-2 rounded-md p-2 text-gray-900 placeholder-gray-500 focus:ring-0"
        placeholder="Search stocks by name or ticker"
        value={searchText}
        onChange={(event) => setSearchText(event.currentTarget.value)}
      />
      <SearchResults searchText={searchText} />
    </div>
  );
}
