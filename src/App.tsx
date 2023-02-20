import { Header } from './Header/Header';
import { SearchBar } from './SearchBar/SearchBar';

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
