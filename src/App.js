import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<h1>HATS</h1>} />
      </Routes>
    </div>
  );
}

export default App;
