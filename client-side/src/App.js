import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/home/" exact element={<Home/>}/>
        <Route path="/login/" exact element={<Login />}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
