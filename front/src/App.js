import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import Filter from './components/Filter/Filter';
import Pokemons from './components/Pokemons/Pokemons';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';
import Error from './components/Error/Error';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/pokemons" element={<Pokemons/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/> 
        <Route exact path="/create" element={<Create/>}/>   
        <Route path='*' element={<Error/>}/> 
      </Routes>
    </div>
  );
}

export default App;
