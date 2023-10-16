import { GlobalContainer } from "./GlobalStyles";
import { Header } from "./components/Header";
import { GetProducts } from "./components/Products";
import { Main } from "./components/Main";
import { Ingredients } from "./components/Ingredients";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <GlobalContainer>
        <Header />
        <Main />
        <Ingredients />
        <GetProducts />
      </GlobalContainer>
    </BrowserRouter>
  );
}

export default App;
