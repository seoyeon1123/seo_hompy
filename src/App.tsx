import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Project from './pages/Project';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
