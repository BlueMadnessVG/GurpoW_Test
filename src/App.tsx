import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header/Header";
import { useIsTablet } from "./hooks/useMediaQuery";
import { AppRoutes } from "./app/router/routes";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Header showNav={true} showUserMenu={true} />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
