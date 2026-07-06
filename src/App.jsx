import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PanelPage from './pages/PanelPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/panel" element={<PanelPage />} />
      </Routes>
    </BrowserRouter>
  )
}
