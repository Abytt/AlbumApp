import logo from './logo.svg';
import './App.css';
import Add from './componets/Add';
import Search from './componets/Search';
import Delete from './componets/Delete';
import View from './componets/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Delete' element={<Delete />} />
        <Route path='/View' element={<View />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
