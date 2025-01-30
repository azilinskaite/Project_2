
import './App.css';
// import CoctailsList from './Components/API Component/API Component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";

const Homepage = () => <h2>Welcome to Homepage</h2>;
const Favorites = () => <h2>My Favourites</h2>;
const SignOut = () => <h2>Signing Out...</h2>;
import "./App.css";
import SearchHeader from './Components/SearchHeaderComponent/SearchHeaderComponent';
import CocktailList from './Components/Cocktail-list-component-AR/Cocktail-list.jsx';
import { ProductCart } from "./Components/SingleProductCart/ProductCart";

function App() {
  return (
    <div className="App">

       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>


  

      <main>
        <SearchHeader/>
        <CocktailList/>
        <ProductCart />
      </main>

      {/* footer */}


    </div>

    
  );
}

export default App;
