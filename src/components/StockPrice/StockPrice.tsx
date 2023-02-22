import { useEffect, useState } from 'react';
import { getStockPrice, Price } from '../../api/stock-price';
import { LabelValue } from '../common/LabelValue';
import { Section } from '../common/Section';
import { PriceHistory } from '../PriceHistory/PriceHistory';

export function StockPrice({ ticker }: { ticker: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [prices, setPrices] = useState<Price[]>();

  useEffect(() => {
    async function fetchPrice() {
      const price = await getStockPrice(ticker);
      setPrices(price);
      setIsLoading(false);
    }
    fetchPrice();
  }, [ticker]);

  if (isLoading) {
    return <>Loading....</>;
  }

  if (!prices || prices.length === 0) {
    return <>Unable to load the price now, please try again later.</>;
  }

  const [latestPrice, ...historicPrices] = prices;

  return (
    <div>
      <PriceCard ticker={ticker} price={latestPrice} />
      <Section>
        <PriceHistory prices={historicPrices} />
      </Section>
    </div>
  );
}

export function PriceCard({ price, ticker }: PriceCardProps) {
  return (
    <div className="px-4 py-1 sm:w-full md:w-80">
      <LabelValue label="Ticker" value={ticker} />
      <LabelValue label="Open" value={price.open} />
      <LabelValue label="Close" value={price.close} />
      <LabelValue label="High" value={price.high} />
      <LabelValue label="Low" value={price.low} />
      <LabelValue label="Date" value={price.date} />
    </div>
  );
}

interface PriceCardProps {
  price: Price;
  ticker: string;
}
