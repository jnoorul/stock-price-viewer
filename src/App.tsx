import { useState } from 'react';
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
      <div className="m-4">
        <SearchBar onSelect={handleStockSelect} />
      </div>
      <div className="m-4">
        <StockPrice ticker={ticker} />
      </div>
    </div>
  );
}

export default App;
