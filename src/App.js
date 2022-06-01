import "./assets/global-styles/global-styles.scss";
import "./assets/global-styles/reset.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppRoutes } from "./pages";
import { GameProvider } from "./context";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GameProvider>
        <AnimatePresence>
          <main>
            <Routes location={location}>
              {AppRoutes.map((route) => {
                const { path, element } = route;
                return <Route path={path} element={element} key={path} />;
              })}
            </Routes>
          </main>
        </AnimatePresence>
      </GameProvider>
    </div >
  );
}

export default App;
