import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;