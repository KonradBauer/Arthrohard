import { GlobalContainer } from "./GlobalStyles";
import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <Main />
      <GetProducts />
    </GlobalContainer>
  );
}

export default App;
