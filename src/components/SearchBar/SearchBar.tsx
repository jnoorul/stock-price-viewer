import { useState } from 'react';
import { SearchResults } from './SearchResults';

interface SearchBarProps {
  onSelect: (ticker: string) => void;
}

export function SearchBar({ onSelect }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleSelect = (ticker: string) => {
    setSearchText('');
    onSelect(ticker);
  };

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
      <SearchResults searchText={searchText} onSelect={handleSelect} />
    </div>
  );
}
