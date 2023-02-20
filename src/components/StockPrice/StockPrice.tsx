import { useEffect, useState } from 'react';
import { getStockPrice, Price } from '../../api/stock-price';
import { LabelValue } from '../common/LabelValue';

export function StockPrice({ ticker }: { ticker: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState<Price>();

  useEffect(() => {
    async function fetchPrice() {
      const price = await getStockPrice(ticker);
      setPrice(price);
      setIsLoading(false);
    }
    fetchPrice();
  }, [ticker]);

  if (isLoading) {
    return <>Loading....</>;
  }

  if (!price) {
    return <>Unable to load the price now, please try again later.</>;
  }

  return (
    <div className="px-4 py-1 sm:w-full md:w-80">
      <LabelValue label="Ticker" value={ticker} />
      <LabelValue label="Open" value={price.open} />
      <LabelValue label="Close" value={price.close} />
      <LabelValue label="High" value={price.high} />
      <LabelValue label="Low" value={price.low} />
    </div>
  );
}
