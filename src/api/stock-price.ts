import { mockPrices } from './../data/prices';
export interface Price {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}

export interface StockPriceResponse {
  data: Price[];
}

export async function getStockPrice(ticker: string, useMock: boolean = true) {
  if (useMock) {
    return mapData(mockPrices);
  }
  // fetch from real api here
  // const stockPrice = (await fetch(``).then((res) => res.json())) as unknown as StockPriceResponse;
  // return mapData(stockPrice.data);
}

function mapData(prices: Price[]) {
  return prices.slice(0, 8).map((price: Price) => ({
    open: price.open,
    close: price.close,
    high: price.high,
    low: price.low,
    date: new Date(price.date).toLocaleDateString(),
  }));
}
