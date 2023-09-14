import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Supplier from './Supplier';
import Request from './Request';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="request" element={<Request />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
