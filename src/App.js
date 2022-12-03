import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './pages/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import { fetchCoins } from './Redux/coins/coins';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
