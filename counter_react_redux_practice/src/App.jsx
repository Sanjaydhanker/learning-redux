import AppContainer from "./components/AppContainer";
import AppName from "./components/AppName";
import DisplayCounter from "./components/DisplayCounter";
import ManageCounter from "./components/ManageCounter";

function App() {
  return (
    <>
      <AppContainer>
        <AppName />
        <DisplayCounter />
        <ManageCounter />
      </AppContainer>
    </>
  );
}

export default App;
