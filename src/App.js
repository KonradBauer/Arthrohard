import { GlobalContainer } from "./GlobalStyles";
import { Header } from "../src/components/Header";
import GetProducts from "./components/Products";

function App() {
  return (
    <GlobalContainer>
      <Header />
      <GetProducts />
    </GlobalContainer>
  );
}

export default App;
