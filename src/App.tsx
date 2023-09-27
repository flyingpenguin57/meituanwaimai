import Header from "./components/header/Header";
import Nav from "./components/navigation/Navigation";
import Stores from "./components/stores/Stores";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="mt-10 w-4/5 mx-auto flex items-start">
        <Nav></Nav>
        <div className="bg-blue-500 w-full">
          <Stores></Stores>
        </div>
      </div>

    </div>
  );
}

export default App;
