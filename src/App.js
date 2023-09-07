import './App.css';
import ClearComponent from './Components/ClearComponent';
import Fragment from './Components/Frafment';
import ComponentState from './Components/ComponentState';
import ComponentProp from './Components/ComponentProp';

function App() {
  return (
    <div className="App">
      <ClearComponent />
      <Fragment />
      <div>
        <ComponentState />
      </div>
      <div>
        <ComponentProp name="Ляляля" />
      </div>
    </div>
  );
}

export default App;
