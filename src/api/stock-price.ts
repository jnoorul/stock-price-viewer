export interface Price {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  exchange: string;
  date: string;
}

// "adj_high": 133.04,
// "adj_low": 129.47,
// "adj_close": 132.995,
// "adj_open": 129.8,
// "adj_volume": 106686703.0,
// "split_factor": 1.0,
// "dividend": 0.0,
// "symbol": "AAPL",

export interface StockPriceResponse {
  data: Price[];
}

const mockResponse: Price = {
  open: 152,
  high: 160,
  low: 142.0,
  close: 152.5,
  volume: 1000000,
  exchange: 'NYSE',
  date: '22-02-2023',
};

export async function getStockPrice(ticker: string, useMock: boolean = true) {
  if (useMock) {
    return mockResponse;
  }
  const stockPrice = (await fetch(
    `http://api.marketstack.com/v1/eod?access_key=c30a2b6f5c6f2e221b1bb09dda421fdb&symbols=${ticker}`
  ).then((res) => res.json())) as unknown as StockPriceResponse;
  return stockPrice.data[0];
}
