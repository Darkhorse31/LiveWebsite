import "./App.css";
import Intraction from "./Component/Intraction";
import Introduction from "./Component/Introduction";
import Navbar from "./Component/Navbar";
import Usetec from "./Component/Usetec";
 function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intraction />
    <Introduction />
    <Usetec /> 
    </div>
  );
}


export default App;
