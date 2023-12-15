import logo from './logo.svg';
import './App.css';
import PropsEx from './PropsEx';
import PropTypesEx from './PropTypesEx';
import ClassPropEx from './ClassPropEx';

function App() {
  return (
    <div className="App">
    HELLO
    {/* <PropsEx a="10" b="hello" c={[1,2,3,4]}/> */}

    {/* <PropsEx/>
    <PropTypesEx/> */}
    <ClassPropEx name="Dipak" course="React"/>
    </div>
  );
}

export default App;
