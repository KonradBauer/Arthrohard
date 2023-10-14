import { GlobalContainer } from "./GlobalStyles";
import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <Main />
      <Ingredients />
      <GetProducts />
    </GlobalContainer>
  );
}

export default App;
