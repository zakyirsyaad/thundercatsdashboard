import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import Layout from './component/layoutnavbar';
import User from './page/user';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Layout />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='user' element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
