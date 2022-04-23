import "./assets/global-styles/global-styles.scss";
import "./assets/global-styles/reset.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppRoutes } from "./pages";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <main>
        <Routes location={location} key={location.pathname}>
          {AppRoutes.map((route, index) => {
            const { path, element } = route;
            return <Route path={path} element={element} key={index} />;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
