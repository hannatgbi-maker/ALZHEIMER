import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Heart, ArrowLeft, TrendingUp, Calendar, Brain, Dumbbell, Smile, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Progresso() {
  const [periodo, setPeriodo] = useState<'semana' | 'mes'>('semana')

  // Dados simulados
  const estatisticas = {
    rotinaDiaria: {
      completadas: 68,
      total: 77,
      percentual: 88
    },
    exerciciosCognitivos: {
      realizados: 12,
      meta: 14,
      percentual: 86
    },
    atividadesFisicas: {
      realizadas: 9,
      meta: 14,
      percentual: 64
    },
    lembretes: {
      cumpridos: 26,
      total: 28,
      percentual: 93
    }
  }

  const historicoSemanal = [
    { dia: 'Seg', atividades: 10, humor: 'bom' },
    { dia: 'Ter', atividades: 11, humor: 'otimo' },
    { dia: 'Qua', atividades: 9, humor: 'bom' },
    { dia: 'Qui', atividades: 12, humor: 'otimo' },
    { dia: 'Sex', atividades: 10, humor: 'bom' },
    { dia: 'Sáb', atividades: 8, humor: 'regular' },
    { dia: 'Dom', atividades: 8, humor: 'bom' }
  ]

  const conquistas = [
    {
      titulo: '7 dias consecutivos',
      descricao: 'Completou a rotina por 7 dias seguidos',
      icon: Award,
      cor: 'text-yellow-500',
      conquistado: true
    },
    {
      titulo: 'Memória Ativa',
      descricao: 'Realizou 10 exercícios cognitivos',
      icon: Brain,
      cor: 'text-purple-500',
      conquistado: true
    },
    {
      titulo: 'Corpo em Movimento',
      descricao: 'Completou 15 atividades físicas',
      icon: Dumbbell,
      cor: 'text-green-500',
      conquistado: false
    },
    {
      titulo: 'Pontualidade',
      descricao: 'Seguiu todos os lembretes por 7 dias',
      icon: Calendar,
      cor: 'text-blue-500',
      conquistado: false
    }
  ]

  const getHumorEmoji = (humor: string) => {
    switch (humor) {
      case 'otimo':
        return '😊'
      case 'bom':
        return '🙂'
      case 'regular':
        return '😐'
      default:
        return '🙂'
    }
  }

  const maxAtividades = Math.max(...historicoSemanal.map(h => h.atividades))

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
            <Heart className="w-10 h-10 text-pink-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Acompanhamento e Progresso
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Visualize o progresso e celebre as conquistas
          </p>
        </div>

        {/* Seletor de Período */}
        <div className="flex justify-center gap-2 mb-6">
          <Button
            variant={periodo === 'semana' ? 'default' : 'outline'}
            onClick={() => setPeriodo('semana')}
          >
            Esta Semana
          </Button>
          <Button
            variant={periodo === 'mes' ? 'default' : 'outline'}
            onClick={() => setPeriodo('mes')}
          >
            Este Mês
          </Button>
        </div>

        {/* Resumo Geral */}
        <Card className="mb-6 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              Resumo da Semana
            </CardTitle>
            <CardDescription>Acompanhe o desempenho geral</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {estatisticas.rotinaDiaria.percentual}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Rotina Cumprida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {estatisticas.exerciciosCognitivos.realizados}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Exercícios Cognitivos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {estatisticas.atividadesFisicas.realizadas}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Atividades Físicas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                  {estatisticas.lembretes.percentual}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lembretes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas Detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Rotina Diária
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {estatisticas.rotinaDiaria.completadas} de {estatisticas.rotinaDiaria.total} atividades
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {estatisticas.rotinaDiaria.percentual}%
                  </span>
                </div>
                <Progress value={estatisticas.rotinaDiaria.percentual} className="h-3" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Excelente! A rotina está sendo seguida de forma consistente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" />
                Exercícios Cognitivos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {estatisticas.exerciciosCognitivos.realizados} de {estatisticas.exerciciosCognitivos.meta} exercícios
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {estatisticas.exerciciosCognitivos.percentual}%
                  </span>
                </div>
                <Progress value={estatisticas.exerciciosCognitivos.percentual} className="h-3" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Muito bem! Continue estimulando a mente regularmente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-green-500" />
                Atividades Físicas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {estatisticas.atividadesFisicas.realizadas} de {estatisticas.atividadesFisicas.meta} atividades
                  </span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {estatisticas.atividadesFisicas.percentual}%
                  </span>
                </div>
                <Progress value={estatisticas.atividadesFisicas.percentual} className="h-3" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Bom progresso! Tente incluir mais atividades leves durante a semana.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-pink-500" />
                Lembretes Cumpridos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {estatisticas.lembretes.cumpridos} de {estatisticas.lembretes.total} lembretes
                  </span>
                  <span className="font-bold text-pink-600 dark:text-pink-400">
                    {estatisticas.lembretes.percentual}%
                  </span>
                </div>
                <Progress value={estatisticas.lembretes.percentual} className="h-3" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ótimo! As medicações e compromissos estão em dia.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Histórico Semanal */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Histórico da Semana</CardTitle>
            <CardDescription>Atividades realizadas e humor geral por dia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48">
              {historicoSemanal.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-2xl">{getHumorEmoji(item.humor)}</div>
                  <div
                    className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(item.atividades / maxAtividades) * 100}%`, minHeight: '20%' }}
                  />
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {item.atividades}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{item.dia}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conquistas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Conquistas
            </CardTitle>
            <CardDescription>Celebre os marcos alcançados!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {conquistas.map((conquista, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    conquista.conquistado
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${conquista.conquistado ? 'bg-yellow-100 dark:bg-yellow-900' : 'bg-gray-200 dark:bg-gray-700'}`}>
                      <conquista.icon className={`w-6 h-6 ${conquista.conquistado ? conquista.cor : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{conquista.titulo}</h3>
                        {conquista.conquistado && (
                          <Badge className="bg-yellow-500 text-white">Conquistado!</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {conquista.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mensagem Motivacional */}
        <Card className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-3" />
            <p className="text-xl font-semibold mb-2">Parabéns pelo seu dedicação!</p>
            <p className="text-purple-100">
              Cada pequeno passo importa. Continue oferecendo esse cuidado com amor e paciência. ❤️
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
