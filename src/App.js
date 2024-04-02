import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookscakeContainer from "./components/HookscakeContainer";
import IcecreamContainer from "./components/icecreamContainer";
import PearContainer from "./components/pearContainer";
import HooksPearContainer from "./components/HooksPearContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookscakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <PearContainer />
        <HooksPearContainer />
      </div>
    </Provider>
  );
}

export default App;
