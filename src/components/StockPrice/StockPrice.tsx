import { useEffect, useState } from 'react';
import { getStockPrice, Price } from '../../api/stock-price';

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
    return <>Unable to load the price now, please try again.</>;
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

interface LabelValueProps {
  label: string;
  value?: string | number;
}

export function LabelValue({ label, value = '' }: LabelValueProps) {
  return (
    <div className="py-2 border-b border-gray-300 flex flex-row justify-between">
      <label>{label}</label>
      <h5 className="font-semibold">{value}</h5>
    </div>
  );
}
