import { useEffect, useState } from 'react';
import { getStocks } from '../../api/search';

interface SearchResultsProps {
  searchText: string;
  onSelect: (ticker: string) => void;
}

export function SearchResults({ searchText, onSelect }: SearchResultsProps) {
  const [showResults, setShowResults] = useState(true);

  const handleStockSelect = (ticker: string) => {
    setShowResults(false);
    onSelect(ticker);
  };

  useEffect(() => {
    setShowResults(true);
  }, [searchText]);

  if (searchText.trim().length <= 1 || !showResults) {
    return <></>;
  }
  const stockResults = getStocks(searchText);
  return (
    <div className="mt-1 border-2 inset-x-0 overflow-y-auto z-50 max-h-96 rounded-md lg:rounded-lg">
      {stockResults.map((stock) => (
        <div
          className="p-2 border-b-2 bg-white cursor-pointer"
          onClick={() => handleStockSelect(stock.ticker)}
        >
          <div className="text-gray-500 text-xs font-semibold">{`Ticker: ${stock.ticker}`}</div>
          <div className="mt-1 text-sm text-secondary-900 font-semibold">
            {stock.name}
          </div>
        </div>
      ))}
    </div>
  );
}
