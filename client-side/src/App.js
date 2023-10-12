import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Employee } from './components/Employee'
import { Search } from './components/Search';
import { CurrentUser } from './components/CurrentUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/home/" exact element={<Home/>}/>
        <Route path="/login/" exact element={<Login />}/>
        <Route path="/employee/:id" exact element={<Employee/>}/>
        <Route path="/search/" exact element={<Search/>}/>
        <Route path="/currentuser/" exact element={<CurrentUser/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
