import ButtonComponent from "./components/ButtonComponent";
import FirstHook from "./components/FirstHook";
import USEContext from "./components/USEContext";
import USEEffect from "./components/USEEffect";
import USEReducer from "./components/USEReducer";

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
    </div>
  );
};

export default App;
