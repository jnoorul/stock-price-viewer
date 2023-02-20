import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <Header />
      <div className="m-4">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
