import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discounts from './Routes/Dicounts';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Discounts />} />
          <Route path='/discounts' element={<Discounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
