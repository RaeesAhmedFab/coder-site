import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import Practice from './pages/Practice';
import LanguageCardDetails from './components/LanguageCardDetails/LanguageCardDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/admin' element={<NotFoundPage />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/languageCardDetails' element={<LanguageCardDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
