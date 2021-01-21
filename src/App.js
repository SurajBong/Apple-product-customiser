import "./App.css";

import { product } from "./ProductData.json";

import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <Product label={product.label} description={product.descriptions} />
      {/* <div className="custommiser">
        <input id="radio1" type="radio" name="processor" value="20" />
        <label htmlFor="radio1">1Tb</label>

        <input id="radio2" type="radio" name="processor" value="30" />
        <label htmlFor="radio2">2Tb</label>
      </div> */}
    </div>
  );
}

export default App;
