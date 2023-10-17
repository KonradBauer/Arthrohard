import { GlobalContainer } from "./GlobalStyles";
import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalContainer>
        <Ingredients />
      </GlobalContainer>
    </BrowserRouter>
  );
}

export default App;
