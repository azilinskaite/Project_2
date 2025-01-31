import "./App.css";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
import CocktailList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";

function App() {
  return (
    <div className="App">
      {/* header */}

      <main>
        <SearchHeader />
        <CocktailList />
      </main>

      {/* footer */}
    </div>
  );
}

export default App;
