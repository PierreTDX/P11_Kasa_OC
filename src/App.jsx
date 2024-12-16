import './utils/style/global.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/A-propos'
import Logement from './pages/Logement'
import Error from './pages/404'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/logement" element={<Logement />} />

            <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App
