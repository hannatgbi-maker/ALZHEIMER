import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ProgressoData {
  rotinaDiaria: {
    completadas: number
    total: number
  }
  exerciciosCognitivos: number
  atividadesFisicas: number
  lembretes: {
    cumpridos: number
    total: number
  }
  historicoDiario: {
    [data: string]: {
      atividades: number
      humor: 'otimo' | 'bom' | 'regular'
    }
  }
}

interface ProgressoContextType {
  progresso: ProgressoData
  registrarAtividadeRotina: (concluida: boolean, total: number) => void
  registrarExercicioCognitivo: () => void
  registrarAtividadeFisica: () => void
  registrarLembrete: (cumprido: boolean, total: number) => void
  registrarHumorDia: (humor: 'otimo' | 'bom' | 'regular') => void
  resetarProgresso: () => void
}

const ProgressoContext = createContext<ProgressoContextType | undefined>(undefined)

const progressoInicial: ProgressoData = {
  rotinaDiaria: {
    completadas: 0,
    total: 0
  },
  exerciciosCognitivos: 0,
  atividadesFisicas: 0,
  lembretes: {
    cumpridos: 0,
    total: 0
  },
  historicoDiario: {}
}

export function ProgressoProvider({ children }: { children: ReactNode }) {
  const [progresso, setProgresso] = useState<ProgressoData>(() => {
    const saved = localStorage.getItem('cuidaAlzheimer_progresso')
    return saved ? JSON.parse(saved) : progressoInicial
  })

  useEffect(() => {
    localStorage.setItem('cuidaAlzheimer_progresso', JSON.stringify(progresso))
  }, [progresso])

  const getDataHoje = () => {
    return new Date().toISOString().split('T')[0]
  }

  const registrarAtividadeRotina = (concluidas: number, total: number) => {
    setProgresso(prev => ({
      ...prev,
      rotinaDiaria: { completadas: concluidas, total }
    }))
  }

  const registrarExercicioCognitivo = () => {
    setProgresso(prev => ({
      ...prev,
      exerciciosCognitivos: prev.exerciciosCognitivos + 1
    }))

    const dataHoje = getDataHoje()
    setProgresso(prev => ({
      ...prev,
      historicoDiario: {
        ...prev.historicoDiario,
        [dataHoje]: {
          atividades: (prev.historicoDiario[dataHoje]?.atividades || 0) + 1,
          humor: prev.historicoDiario[dataHoje]?.humor || 'bom'
        }
      }
    }))
  }

  const registrarAtividadeFisica = () => {
    setProgresso(prev => ({
      ...prev,
      atividadesFisicas: prev.atividadesFisicas + 1
    }))

    const dataHoje = getDataHoje()
    setProgresso(prev => ({
      ...prev,
      historicoDiario: {
        ...prev.historicoDiario,
        [dataHoje]: {
          atividades: (prev.historicoDiario[dataHoje]?.atividades || 0) + 1,
          humor: prev.historicoDiario[dataHoje]?.humor || 'bom'
        }
      }
    }))
  }

  const registrarLembrete = (cumpridos: number, total: number) => {
    setProgresso(prev => ({
      ...prev,
      lembretes: { cumpridos, total }
    }))
  }

  const registrarHumorDia = (humor: 'otimo' | 'bom' | 'regular') => {
    const dataHoje = getDataHoje()
    setProgresso(prev => ({
      ...prev,
      historicoDiario: {
        ...prev.historicoDiario,
        [dataHoje]: {
          atividades: prev.historicoDiario[dataHoje]?.atividades || 0,
          humor
        }
      }
    }))
  }

  const resetarProgresso = () => {
    setProgresso(progressoInicial)
    localStorage.removeItem('cuidaAlzheimer_progresso')
  }

  return (
    <ProgressoContext.Provider
      value={{
        progresso,
        registrarAtividadeRotina,
        registrarExercicioCognitivo,
        registrarAtividadeFisica,
        registrarLembrete,
        registrarHumorDia,
        resetarProgresso
      }}
    >
      {children}
    </ProgressoContext.Provider>
  )
}

export function useProgresso() {
  const context = useContext(ProgressoContext)
  if (context === undefined) {
    throw new Error('useProgresso deve ser usado dentro de ProgressoProvider')
  }
  return context
}
