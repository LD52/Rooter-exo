import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home'; 
import Details from './Components/Details';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Details" element={<Details/>} />
     </Routes>
    </div>
  );
}

export default App;
