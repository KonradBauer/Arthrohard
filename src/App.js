import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";
import { ProductPreview } from "./components/ProductPreview";

function App() {
  return (
    <>
      <Header />
      <ProductPreview />
      <Main />
      <Ingredients />
      <GetProducts />
    </>
  );
}

export default App;
