import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rotina from './pages/Rotina'
import ExerciciosCognitivos from './pages/ExerciciosCognitivos'
import AtividadesFisicas from './pages/AtividadesFisicas'
import Ideias from './pages/Ideias'
import Lembretes from './pages/Lembretes'
import Progresso from './pages/Progresso'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rotina" element={<Rotina />} />
        <Route path="/exercicios-cognitivos" element={<ExerciciosCognitivos />} />
        <Route path="/atividades-fisicas" element={<AtividadesFisicas />} />
        <Route path="/ideias" element={<Ideias />} />
        <Route path="/lembretes" element={<Lembretes />} />
        <Route path="/progresso" element={<Progresso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
