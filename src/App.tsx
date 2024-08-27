import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/:pokemonName'} element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
