import { stocks } from '../data/stocks';

export function getStocks(searchTerm: string) {
  const searchText = searchTerm.toLowerCase();
  return stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchText) ||
      stock.ticker.toLowerCase().includes(searchText)
  );
}
