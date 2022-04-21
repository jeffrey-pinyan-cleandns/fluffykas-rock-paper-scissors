import './assets/global-styles/global-styles.scss';
import "./assets/global-styles/reset.scss";
import { Header } from "./components";
import { RulesBtn } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <RulesBtn />
    </div>
  );
}

export default App;
