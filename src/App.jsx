import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import Footer from "./Components/Footer Component/Footer";

import "./App.css";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
import CocktailList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import { ProductCart } from "./Components/SingleProductCart/ProductCart";

const Homepage = () => <h2>Welcome to Homepage</h2>;
const Favorites = () => <h2>My Favourites</h2>;
const SignOut = () => <h2>Signing Out...</h2>;

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
        <SearchHeader />
        <CocktailList />
        <ProductCart />
      </main>

      <Footer />
    </div>
  );
}

export default App;
