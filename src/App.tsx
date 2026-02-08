import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Reviews } from './pages/Reviews';
import { Contacts } from './pages/Contacts';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
