import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const itemList = "LISTA DE PRODUCTOS";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
