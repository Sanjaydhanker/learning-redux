import AppName from "./components/AppName";
import DisplayCounter from "./components/DisplayCounter";
import HandleCounter from "./components/HandleCounter";
import AppContainer from "./components/AppContainer";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <AppContainer>
      <AppName />
      {privacy ? <PrivacyMessage /> : <DisplayCounter />}
      <HandleCounter />
    </AppContainer>
  );
}

export default App;
