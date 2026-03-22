import ButtonComponent from "./components/ButtonComponent";
import FirstHook from "./components/FirstHook";
import USEContext from "./components/USEContext";
import USEEffect from "./components/USEEffect";
import { USEMemo } from "./components/USEMemo";
import USEReducer from "./components/USEReducer";
import USERef from "./components/USERef";

const App = () => {
  return (
    <div className="app">
      <FirstHook />
      <br />
      <USEEffect />
      <br />
      <USEContext />
      <ButtonComponent />
      <br />
      <USEReducer />
      <br />
      <USERef />
      <br />
      <USEMemo />
    </div>
  );
};

export default App;
