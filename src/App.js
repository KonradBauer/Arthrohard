import { GlobalContainer } from "./GlobalStyles";
import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";
import { ProductPreview } from "./components/ProductPreview/Modal";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <ProductPreview />
      <Main />
      <Ingredients />
      <GetProducts />
    </GlobalContainer>
  );
}

export default App;
