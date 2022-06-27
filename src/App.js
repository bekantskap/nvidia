import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import ProductInfo from './Components/ProductInfo';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductInfo />
    </div>
  );
}

export default App;
