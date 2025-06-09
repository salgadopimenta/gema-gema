import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Passeios from './pages/Passeios'
import Contato from './pages/Contato'
import Videos from './pages/Videos'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen p-6 bg-yellow-50">
        <nav className="mb-6 space-x-4">
          <Link to="/">Início</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/passeios">Passeios</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/videos">Vídeos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/passeios" element={<Passeios />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
