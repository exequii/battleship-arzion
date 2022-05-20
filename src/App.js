import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Game from "./pages/Game"
import Endgame from "./pages/Endgame"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path= '/' element={<Home/>} />
            <Route path='/game' element={<Game/>} />
            <Route path='/endgame' element={<Endgame/>} />
            <Route path='*' element={<NotFound/>} /> 
      </Routes>
    </div>
  );
}

export default App;
