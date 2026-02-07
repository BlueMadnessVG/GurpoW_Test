import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header showNab={true} showUserMenu={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
