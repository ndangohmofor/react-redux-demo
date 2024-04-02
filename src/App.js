import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookscakeContainer from "./components/HookscakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookscakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
