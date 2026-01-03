import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowLeft, Plus, Trash2, Bell, Pill, Calendar, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Lembrete {
  id: string
  tipo: 'medicacao' | 'consulta' | 'atividade' | 'outro'
  titulo: string
  descricao: string
  horario: string
  data?: string
  importante: boolean
}

export default function Lembretes() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([
    {
      id: '1',
      tipo: 'medicacao',
      titulo: 'Medicação matinal',
      descricao: 'Tomar remédio para pressão',
      horario: '08:00',
      importante: true
    },
    {
      id: '2',
      tipo: 'medicacao',
      titulo: 'Medicação noturna',
      descricao: 'Tomar remédio antes de dormir',
      horario: '21:00',
      importante: true
    },
    {
      id: '3',
      tipo: 'consulta',
      titulo: 'Consulta Neurologista',
      descricao: 'Dr. Silva - Rua das Flores, 123',
      horario: '14:00',
      data: '2026-01-15',
      importante: true
    },
    {
      id: '4',
      tipo: 'atividade',
      titulo: 'Caminhada',
      descricao: 'Caminhada leve pela casa',
      horario: '10:00',
      importante: false
    }
  ])

  const [novoLembrete, setNovoLembrete] = useState({
    tipo: 'outro' as 'medicacao' | 'consulta' | 'atividade' | 'outro',
    titulo: '',
    descricao: '',
    horario: '',
    data: '',
    importante: false
  })

  const adicionarLembrete = () => {
    if (novoLembrete.titulo && novoLembrete.horario) {
      const lembrete: Lembrete = {
        id: Date.now().toString(),
        tipo: novoLembrete.tipo,
        titulo: novoLembrete.titulo,
        descricao: novoLembrete.descricao,
        horario: novoLembrete.horario,
        data: novoLembrete.data || undefined,
        importante: novoLembrete.importante
      }
      setLembretes([...lembretes, lembrete].sort((a, b) => a.horario.localeCompare(b.horario)))
      setNovoLembrete({
        tipo: 'outro',
        titulo: '',
        descricao: '',
        horario: '',
        data: '',
        importante: false
      })
    }
  }

  const removerLembrete = (id: string) => {
    setLembretes(lembretes.filter(l => l.id !== id))
  }

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'medicacao':
        return <Pill className="w-4 h-4" />
      case 'consulta':
        return <Calendar className="w-4 h-4" />
      case 'atividade':
        return <Clock className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'medicacao':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      case 'consulta':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      case 'atividade':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'medicacao':
        return 'Medicação'
      case 'consulta':
        return 'Consulta'
      case 'atividade':
        return 'Atividade'
      default:
        return 'Outro'
    }
  }

  const lembretesImportantes = lembretes.filter(l => l.importante)
  const outrosLembretes = lembretes.filter(l => !l.importante)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className="w-10 h-10 text-red-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Lembretes
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Organize medicações, consultas e compromissos importantes
          </p>
        </div>

        {/* Lembretes Importantes */}
        {lembretesImportantes.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h2 className="text-2xl font-bold">Prioridades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lembretesImportantes.map((lembrete) => (
                <Card key={lembrete.id} className="border-2 border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getTipoColor(lembrete.tipo)}>
                            <span className="mr-1">{getTipoIcon(lembrete.tipo)}</span>
                            {getTipoLabel(lembrete.tipo)}
                          </Badge>
                          <Badge variant="destructive">Importante</Badge>
                        </div>
                        <CardTitle className="text-xl">{lembrete.titulo}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removerLembrete(lembrete.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {lembrete.descricao && (
                        <p className="text-gray-700 dark:text-gray-300">{lembrete.descricao}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm font-semibold">
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                          <Clock className="w-4 h-4" />
                          {lembrete.horario}
                        </div>
                        {lembrete.data && (
                          <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(lembrete.data).toLocaleDateString('pt-BR')}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Outros Lembretes */}
        {outrosLembretes.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Outros Lembretes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {outrosLembretes.map((lembrete) => (
                <Card key={lembrete.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <Badge className={getTipoColor(lembrete.tipo)} variant="secondary">
                          <span className="mr-1">{getTipoIcon(lembrete.tipo)}</span>
                          {getTipoLabel(lembrete.tipo)}
                        </Badge>
                        <CardTitle className="text-lg mt-2">{lembrete.titulo}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removerLembrete(lembrete.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {lembrete.descricao && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{lembrete.descricao}</p>
                      )}
                      <div className="flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          {lembrete.horario}
                        </div>
                        {lembrete.data && (
                          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(lembrete.data).toLocaleDateString('pt-BR')}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Adicionar Novo Lembrete */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Adicionar Novo Lembrete
            </CardTitle>
            <CardDescription>
              Configure alarmes para medicações, consultas e atividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo</Label>
                  <Select
                    value={novoLembrete.tipo}
                    onValueChange={(value: any) => setNovoLembrete({ ...novoLembrete, tipo: value })}
                  >
                    <SelectTrigger id="tipo">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medicacao">💊 Medicação</SelectItem>
                      <SelectItem value="consulta">📅 Consulta</SelectItem>
                      <SelectItem value="atividade">🏃 Atividade</SelectItem>
                      <SelectItem value="outro">📌 Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="titulo">Título</Label>
                  <Input
                    id="titulo"
                    placeholder="Ex: Tomar remédio para pressão"
                    value={novoLembrete.titulo}
                    onChange={(e) => setNovoLembrete({ ...novoLembrete, titulo: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição (opcional)</Label>
                <Textarea
                  id="descricao"
                  placeholder="Detalhes adicionais..."
                  value={novoLembrete.descricao}
                  onChange={(e) => setNovoLembrete({ ...novoLembrete, descricao: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="horario">Horário</Label>
                  <Input
                    id="horario"
                    type="time"
                    value={novoLembrete.horario}
                    onChange={(e) => setNovoLembrete({ ...novoLembrete, horario: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="data">Data (opcional)</Label>
                  <Input
                    id="data"
                    type="date"
                    value={novoLembrete.data}
                    onChange={(e) => setNovoLembrete({ ...novoLembrete, data: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="importante"
                  checked={novoLembrete.importante}
                  onChange={(e) => setNovoLembrete({ ...novoLembrete, importante: e.target.checked })}
                  className="w-4 h-4 text-red-600 rounded"
                />
                <Label htmlFor="importante" className="cursor-pointer">
                  Marcar como importante/prioritário
                </Label>
              </div>

              <Button onClick={adicionarLembrete} className="w-full" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Lembrete
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dicas */}
        <Card className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">💡 Dicas sobre Lembretes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• Configure alarmes no celular para os horários mais críticos</p>
            <p>• Use caixas organizadoras de medicação para a semana</p>
            <p>• Deixe lembretes visuais em locais estratégicos (geladeira, espelho)</p>
            <p>• Mantenha uma lista atualizada de medicações para emergências</p>
            <p>• Anote dúvidas para levar nas consultas médicas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
