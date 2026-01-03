import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Heart, ArrowLeft, TrendingUp, Calendar, Brain, Dumbbell, Smile, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useProgresso } from '@/context/ProgressoContext'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function Progresso() {
  const { progresso, resetarProgresso } = useProgresso()

  // Calcular percentuais
  const percentualRotina = progresso.rotinaDiaria.total > 0
    ? Math.round((progresso.rotinaDiaria.completadas / progresso.rotinaDiaria.total) * 100)
    : 0

  const metaExerciciosCognitivos = 14 // 2 por dia em uma semana
  const percentualExercicios = Math.min(
    Math.round((progresso.exerciciosCognitivos / metaExerciciosCognitivos) * 100),
    100
  )

  const metaAtividadesFisicas = 14 // 2 por dia em uma semana
  const percentualAtividades = Math.min(
    Math.round((progresso.atividadesFisicas / metaAtividadesFisicas) * 100),
    100
  )

  const percentualLembretes = progresso.lembretes.total > 0
    ? Math.round((progresso.lembretes.cumpridos / progresso.lembretes.total) * 100)
    : 0

  // Preparar histórico semanal
  const obterUltimos7Dias = () => {
    const dias = []
    const hoje = new Date()
    for (let i = 6; i >= 0; i--) {
      const data = new Date(hoje)
      data.setDate(data.getDate() - i)
      const dataStr = data.toISOString().split('T')[0]
      const diaInfo = progresso.historicoDiario[dataStr] || { atividades: 0, humor: 'bom' as const }
      dias.push({
        dia: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][data.getDay()],
        atividades: diaInfo.atividades,
        humor: diaInfo.humor
      })
    }
    return dias
  }

  const historicoSemanal = obterUltimos7Dias()
  const maxAtividades = Math.max(...historicoSemanal.map(h => h.atividades), 1)

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

  const temProgresso = progresso.rotinaDiaria.total > 0 ||
    progresso.exerciciosCognitivos > 0 ||
    progresso.atividadesFisicas > 0 ||
    progresso.lembretes.total > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          {temProgresso && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Resetar Progresso
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Resetar todo o progresso?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Isso irá apagar todos os dados de progresso registrados. Esta ação não pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={resetarProgresso}>
                    Sim, resetar tudo
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

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

        {!temProgresso ? (
          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-12 text-center">
              <TrendingUp className="w-16 h-16 text-purple-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Comece sua jornada!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Complete atividades nas outras seções do app para ver seu progresso aqui.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/rotina">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ir para Rotina
                  </Button>
                </Link>
                <Link to="/exercicios-cognitivos">
                  <Button variant="outline">
                    <Brain className="w-4 h-4 mr-2" />
                    Exercícios Cognitivos
                  </Button>
                </Link>
                <Link to="/atividades-fisicas">
                  <Button variant="outline">
                    <Dumbbell className="w-4 h-4 mr-2" />
                    Atividades Físicas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Resumo Geral */}
            <Card className="mb-6 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Resumo Geral
                </CardTitle>
                <CardDescription>Acompanhe o desempenho</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                      {percentualRotina}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rotina Cumprida</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {progresso.exerciciosCognitivos}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Exercícios Cognitivos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {progresso.atividadesFisicas}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Atividades Físicas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                      {percentualLembretes}%
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
                        {progresso.rotinaDiaria.completadas} de {progresso.rotinaDiaria.total} atividades
                      </span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        {percentualRotina}%
                      </span>
                    </div>
                    <Progress value={percentualRotina} className="h-3" />
                  </div>
                  {progresso.rotinaDiaria.total === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Vá para Rotina Diária e comece a marcar atividades como concluídas.
                    </p>
                  ) : percentualRotina >= 80 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Excelente! A rotina está sendo seguida de forma consistente.
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Continue marcando as atividades conforme forem realizadas.
                    </p>
                  )}
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
                        {progresso.exerciciosCognitivos} de {metaExerciciosCognitivos} exercícios
                      </span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        {percentualExercicios}%
                      </span>
                    </div>
                    <Progress value={percentualExercicios} className="h-3" />
                  </div>
                  {progresso.exerciciosCognitivos === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Explore os Exercícios Cognitivos e marque como concluídos.
                    </p>
                  ) : progresso.exerciciosCognitivos >= metaExerciciosCognitivos ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Parabéns! Meta semanal atingida! Continue estimulando a mente.
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bom progresso! Continue realizando exercícios regularmente.
                    </p>
                  )}
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
                        {progresso.atividadesFisicas} de {metaAtividadesFisicas} atividades
                      </span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {percentualAtividades}%
                      </span>
                    </div>
                    <Progress value={percentualAtividades} className="h-3" />
                  </div>
                  {progresso.atividadesFisicas === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Visite Atividades Físicas e marque as que forem realizadas.
                    </p>
                  ) : progresso.atividadesFisicas >= metaAtividadesFisicas ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Excelente! Meta semanal alcançada! O corpo está ativo e saudável.
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bom progresso! Tente incluir mais atividades leves durante a semana.
                    </p>
                  )}
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
                        {progresso.lembretes.cumpridos} de {progresso.lembretes.total} lembretes
                      </span>
                      <span className="font-bold text-pink-600 dark:text-pink-400">
                        {percentualLembretes}%
                      </span>
                    </div>
                    <Progress value={percentualLembretes} className="h-3" />
                  </div>
                  {progresso.lembretes.total === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Configure Lembretes e marque como cumpridos no decorrer do dia.
                    </p>
                  ) : percentualLembretes >= 90 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ótimo! As medicações e compromissos estão em dia.
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Continue acompanhando os lembretes diariamente.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Histórico Semanal */}
            {Object.keys(progresso.historicoDiario).length > 0 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Histórico da Semana</CardTitle>
                  <CardDescription>Atividades realizadas nos últimos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between gap-2 h-48">
                    {historicoSemanal.map((item, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="text-2xl">{getHumorEmoji(item.humor)}</div>
                        <div
                          className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg transition-all hover:opacity-80"
                          style={{ height: `${(item.atividades / maxAtividades) * 100}%`, minHeight: item.atividades > 0 ? '20%' : '5%' }}
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
            )}

            {/* Mensagem Motivacional */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-3" />
                <p className="text-xl font-semibold mb-2">Parabéns pela sua dedicação!</p>
                <p className="text-purple-100">
                  Cada pequeno passo importa. Continue oferecendo esse cuidado com amor e paciência. ❤️
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
