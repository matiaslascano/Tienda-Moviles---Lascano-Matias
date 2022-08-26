

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const itemList = "LISTA DE PRODUCTOS"

function App() {
  
  return (    
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
