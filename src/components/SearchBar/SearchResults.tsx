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
    <div>
      {stockResults.map((stock) => (
        <StockResultCard stock={stock} />
      ))}
    </div>
  );
}

export function StockResultCard({ stock }: { stock: Stock }) {
  return (
    <div>
      <label>{stock.ticker}</label>
      <label>{stock.name}</label>
    </div>
  );
}
