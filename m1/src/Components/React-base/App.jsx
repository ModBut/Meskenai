import "./App.scss";

import Zuikis from "./Components/React-base/Zuikis";
import VienasPropsas from "./Components/React-base/VienasProps";
import ZebraiBebrai from "./Components/React-base/Zebrai-bebrai";
import DuPropsai from "./Components/React-base/DuProps";
import TrysPropsai from "./Components/React-base/TrysProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 18 Alpha</h1>
        <Zuikis color={"pink"}></Zuikis>
        <VienasPropsas betkoksTeksas={"Cia yra betkoks tekstas"} />
        <ZebraiBebrai color={2} />
        <DuPropsai
          tekstasH1={"Betkoks tekstas H1 tage"}
          tekstasH2={"Betkoks tekstas H2 tage"}
        />
        <TrysPropsai
          spalva={{ color: "orange" }}
          props1={"Ne betkoks tekstas H1 tage"}
          props2={"Ne betkoks tekstas H2 tage"}
        />
      </header>
    </div>
  );
}

export default App;
