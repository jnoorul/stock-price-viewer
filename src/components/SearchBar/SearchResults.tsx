import { getStocks } from '../../api/search';

interface SearchResultsProps {
  searchText: string;
}

interface Stock {
  ticker: string;
  name: string;
}

export function SearchResults({ searchText }: SearchResultsProps) {
  if (searchText.trim().length <= 1) {
    return <></>;
  }
  const stockResults = getStocks(searchText);
  return (
    <div className="mt-1 border-2 inset-x-0 overflow-y-auto z-50 max-h-96 rounded-md lg:rounded-lg">
      {stockResults.map((stock) => (
        <StockResultCard stock={stock} />
      ))}
    </div>
  );
}

export function StockResultCard({ stock }: { stock: Stock }) {
  return (
    <div className="p-2 border-b-2 bg-white cursor-pointer">
      <div className="text-gray-500 text-xs font-semibold">{`Ticker: ${stock.ticker}`}</div>
      <div className="mt-1 text-sm text-secondary-900 font-semibold">
        {stock.name}
      </div>
    </div>
  );
}
