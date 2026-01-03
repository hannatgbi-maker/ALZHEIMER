import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgresso } from '@/context/ProgressoContext'

interface Atividade {
  id: string
  horario: string
  titulo: string
  concluida: boolean
}

export default function Rotina() {
  const { registrarAtividadeRotina } = useProgresso()
  const [atividades, setAtividades] = useState<Atividade[]>([
    { id: '1', horario: '07:00', titulo: 'Acordar e higiene matinal', concluida: false },
    { id: '2', horario: '08:00', titulo: 'Café da manhã', concluida: false },
    { id: '3', horario: '09:00', titulo: 'Medicação matinal', concluida: false },
    { id: '4', horario: '10:00', titulo: 'Atividade cognitiva (jogo de memória)', concluida: false },
    { id: '5', horario: '12:00', titulo: 'Almoço', concluida: false },
    { id: '6', horario: '14:00', titulo: 'Descanso/Soneca', concluida: false },
    { id: '7', horario: '16:00', titulo: 'Lanche da tarde', concluida: false },
    { id: '8', horario: '17:00', titulo: 'Caminhada leve ou exercícios', concluida: false },
    { id: '9', horario: '19:00', titulo: 'Jantar', concluida: false },
    { id: '10', horario: '20:00', titulo: 'Atividade relaxante (música, TV)', concluida: false },
    { id: '11', horario: '21:00', titulo: 'Preparação para dormir', concluida: false }
  ])

  const [novoHorario, setNovoHorario] = useState('')
  const [novoTitulo, setNovoTitulo] = useState('')

  const toggleAtividade = (id: string) => {
    setAtividades(atividades.map(ativ =>
      ativ.id === id ? { ...ativ, concluida: !ativ.concluida } : ativ
    ))
  }

  // Atualizar progresso sempre que atividades mudarem
  useEffect(() => {
    const concluidas = atividades.filter(a => a.concluida).length
    const total = atividades.length
    registrarAtividadeRotina(concluidas, total)
  }, [atividades])

  const adicionarAtividade = () => {
    if (novoHorario && novoTitulo) {
      const novaAtividade: Atividade = {
        id: Date.now().toString(),
        horario: novoHorario,
        titulo: novoTitulo,
        concluida: false
      }
      setAtividades([...atividades, novaAtividade].sort((a, b) => a.horario.localeCompare(b.horario)))
      setNovoHorario('')
      setNovoTitulo('')
    }
  }

  const removerAtividade = (id: string) => {
    setAtividades(atividades.filter(ativ => ativ.id !== id))
  }

  const concluidas = atividades.filter(a => a.concluida).length
  const total = atividades.length
  const progresso = total > 0 ? Math.round((concluidas / total) * 100) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rotina Diária
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Organize o dia com uma rotina estruturada e previsível
          </p>
        </div>

        {/* Progresso do Dia */}
        <Card className="mb-6 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Progresso de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  {concluidas} de {total} atividades concluídas
                </span>
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  {progresso}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Atividades */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Atividades do Dia</CardTitle>
            <CardDescription>
              Marque as atividades conforme forem sendo realizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {atividades.map((atividade) => (
                <div
                  key={atividade.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    atividade.concluida
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Checkbox
                    checked={atividade.concluida}
                    onCheckedChange={() => toggleAtividade(atividade.id)}
                    className="w-5 h-5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {atividade.horario}
                      </span>
                      <span className={`${atividade.concluida ? 'line-through text-gray-500' : ''}`}>
                        {atividade.titulo}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerAtividade(atividade.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Adicionar Nova Atividade */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Adicionar Atividade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="space-y-2">
                <Label htmlFor="horario">Horário</Label>
                <Input
                  id="horario"
                  type="time"
                  value={novoHorario}
                  onChange={(e) => setNovoHorario(e.target.value)}
                  className="w-full md:w-32"
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="titulo">Descrição da Atividade</Label>
                <Input
                  id="titulo"
                  placeholder="Ex: Tomar medicação, Fazer caminhada..."
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && adicionarAtividade()}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={adicionarAtividade} className="w-full md:w-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dicas */}
        <Card className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">💡 Dicas Importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• Mantenha a rotina sempre no mesmo horário para criar familiaridade</p>
            <p>• A previsibilidade ajuda a reduzir ansiedade e confusão</p>
            <p>• Seja flexível e paciente caso alguma atividade demore mais que o esperado</p>
            <p>• Celebre cada atividade concluída, por menor que seja</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
