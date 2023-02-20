import { useState } from 'react';
import { Section } from './components/common/Section';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { StockPrice } from './components/StockPrice/StockPrice';

function App() {
  const [ticker, setTicker] = useState('');
  const handleStockSelect = (ticker: string) => {
    setTicker(ticker);
  };
  return (
    <div>
      <Header />
      <Section>
        <SearchBar onSelect={handleStockSelect} />
      </Section>
      <Section>{ticker && <StockPrice ticker={ticker} />}</Section>
    </div>
  );
}

export default App;
