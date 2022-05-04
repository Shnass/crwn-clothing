import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shoppage/shoppage.component.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/" element={<ShopPage />} />
        <Route path="/signin/" element={<SignInAndUp />} />
      </Routes>
    </div>
  );
}

export default App;
