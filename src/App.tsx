import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
import { useIsTablet } from "./hooks/useMediaQuery";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Header showNav={true} showUserMenu={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
