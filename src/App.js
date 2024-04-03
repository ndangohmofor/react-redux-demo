import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookscakeContainer from "./components/HookscakeContainer";
import IcecreamContainer from "./components/icecreamContainer";
import PearContainer from "./components/pearContainer";
import HooksPearContainer from "./components/HooksPearContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HookscakeContainer />
        <CakeContainer />
        <IcecreamContainer />
        <PearContainer />
        <HooksPearContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
