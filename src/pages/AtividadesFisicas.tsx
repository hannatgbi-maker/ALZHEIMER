import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dumbbell, ArrowLeft, Play, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

interface AtividadeFisica {
  id: string
  titulo: string
  descricao: string
  intensidade: 'Leve' | 'Moderada'
  duracao: string
  tipo: string
  passos: string[]
  beneficios: string[]
  cuidados: string[]
}

export default function AtividadesFisicas() {
  const atividades: AtividadeFisica[] = [
    {
      id: '1',
      titulo: 'Caminhada pela Casa',
      descricao: 'Caminhar com segurança pelos cômodos',
      intensidade: 'Leve',
      duracao: '10-15 min',
      tipo: 'Cardio',
      passos: [
        'Certifique-se de que o caminho está livre de obstáculos',
        'Caminhe devagar e com passos firmes',
        'Use calçados antiderrapantes',
        'Faça pausas quando necessário',
        'Acompanhe de perto para segurança',
        'Converse durante a caminhada para tornar mais agradável'
      ],
      beneficios: [
        'Melhora circulação sanguínea',
        'Mantém mobilidade',
        'Fortalece músculos das pernas'
      ],
      cuidados: [
        'Evite superfícies escorregadias',
        'Retire tapetes soltos',
        'Mantenha boa iluminação'
      ]
    },
    {
      id: '2',
      titulo: 'Exercícios Sentado na Cadeira',
      descricao: 'Movimentos suaves sem sair da cadeira',
      intensidade: 'Leve',
      duracao: '10-20 min',
      tipo: 'Alongamento',
      passos: [
        'Sente-se em uma cadeira firme e confortável',
        'Levante os braços lentamente acima da cabeça (5x)',
        'Gire os ombros para frente e para trás (5x cada)',
        'Estenda as pernas alternadamente (10x cada)',
        'Gire o tornozelo no sentido horário e anti-horário (5x cada)',
        'Incline suavemente a cabeça para os lados (5x)',
        'Respire profundamente entre os exercícios'
      ],
      beneficios: [
        'Melhora flexibilidade',
        'Previne rigidez muscular',
        'Estimula circulação'
      ],
      cuidados: [
        'Não force movimentos',
        'Pare se sentir dor',
        'Mantenha respiração regular'
      ]
    },
    {
      id: '3',
      titulo: 'Dança Suave',
      descricao: 'Movimente-se ao som de músicas favoritas',
      intensidade: 'Leve',
      duracao: '10-15 min',
      tipo: 'Cardio',
      passos: [
        'Escolha músicas lentas e conhecidas',
        'Comece balançando suavemente de um lado para o outro',
        'Movimente os braços acompanhando a música',
        'Dê pequenos passos para os lados',
        'Gire lentamente se estiver confortável',
        'Segure as mãos do idoso para dar apoio',
        'Faça pausas frequentes'
      ],
      beneficios: [
        'Melhora coordenação motora',
        'Estimula humor positivo',
        'Promove socialização'
      ],
      cuidados: [
        'Mantenha sempre apoio próximo',
        'Evite movimentos bruscos',
        'Monitore cansaço'
      ]
    },
    {
      id: '4',
      titulo: 'Exercícios com Bola Macia',
      descricao: 'Use uma bola leve para exercícios simples',
      intensidade: 'Leve',
      duracao: '10-15 min',
      tipo: 'Coordenação',
      passos: [
        'Use uma bola macia de tamanho médio',
        'Passe a bola de uma mão para outra (10x)',
        'Levante a bola acima da cabeça (10x)',
        'Gire a bola ao redor da cintura (5x)',
        'Pressione a bola entre as mãos (segure por 5 segundos, 5x)',
        'Jogue suavemente a bola para o cuidador e pegue de volta',
        'Coloque a bola no chão e levante com as duas mãos'
      ],
      beneficios: [
        'Fortalece braços e mãos',
        'Melhora coordenação',
        'Exercita reflexos'
      ],
      cuidados: [
        'Use bola leve',
        'Não force as articulações',
        'Fique sentado se mais confortável'
      ]
    },
    {
      id: '5',
      titulo: 'Alongamento de Braços e Pernas',
      descricao: 'Alongamentos suaves para todo o corpo',
      intensidade: 'Leve',
      duracao: '15-20 min',
      tipo: 'Alongamento',
      passos: [
        'Deite em um colchonete ou cama firme',
        'Estenda os braços acima da cabeça e segure por 10 segundos',
        'Puxe suavemente um joelho em direção ao peito (10 seg cada)',
        'Estenda as pernas e aponte os dedos dos pés (10 seg)',
        'Gire os tornozelos em círculos (5x cada direção)',
        'Abra e feche as mãos lentamente (10x)',
        'Termine com respiração profunda'
      ],
      beneficios: [
        'Aumenta flexibilidade',
        'Reduz tensão muscular',
        'Melhora amplitude de movimento'
      ],
      cuidados: [
        'Superfície firme e segura',
        'Movimentos lentos',
        'Assistência para levantar'
      ]
    },
    {
      id: '6',
      titulo: 'Exercícios de Equilíbrio',
      descricao: 'Melhore o equilíbrio com segurança',
      intensidade: 'Moderada',
      duracao: '10 min',
      tipo: 'Equilíbrio',
      passos: [
        'Fique em pé próximo a uma parede ou móvel firme',
        'Levante uma perna alguns centímetros do chão (5 seg cada)',
        'Transfira o peso de um pé para o outro',
        'Fique na ponta dos pés por alguns segundos',
        'Caminhe em linha reta, um pé na frente do outro',
        'Sempre com apoio ao alcance das mãos'
      ],
      beneficios: [
        'Previne quedas',
        'Fortalece pernas',
        'Melhora confiança ao caminhar'
      ],
      cuidados: [
        'SEMPRE supervisione de perto',
        'Apoio ao alcance das mãos',
        'Superfície antiderrapante'
      ]
    },
    {
      id: '7',
      titulo: 'Jardinagem Leve',
      descricao: 'Cuide de plantas sentado ou em pé',
      intensidade: 'Leve',
      duracao: '15-30 min',
      tipo: 'Funcional',
      passos: [
        'Prepare vasos em altura confortável',
        'Deixe regar as plantas com regador leve',
        'Remova folhas secas (movimento de pinça)',
        'Plante mudas em vasos (mexer com terra)',
        'Observe e cheire as plantas',
        'Faça pausas frequentes'
      ],
      beneficios: [
        'Exercita movimento das mãos',
        'Estimula sensações táteis',
        'Proporciona conexão com natureza'
      ],
      cuidados: [
        'Ferramentas seguras',
        'Evite sol forte',
        'Hidrate-se bem'
      ]
    },
    {
      id: '8',
      titulo: 'Exercícios de Respiração',
      descricao: 'Técnicas de respiração para relaxamento',
      intensidade: 'Leve',
      duracao: '5-10 min',
      tipo: 'Relaxamento',
      passos: [
        'Sente-se confortavelmente ou deite',
        'Inspire pelo nariz contando até 4',
        'Segure a respiração por 2 segundos',
        'Expire pela boca contando até 6',
        'Repita 10 vezes',
        'Coloque a mão no abdômen para sentir o movimento',
        'Mantenha ombros relaxados'
      ],
      beneficios: [
        'Reduz ansiedade',
        'Melhora oxigenação',
        'Promove relaxamento'
      ],
      cuidados: [
        'Não force a respiração',
        'Pare se sentir tontura',
        'Ambiente tranquilo'
      ]
    }
  ]

  const [atividadeSelecionada, setAtividadeSelecionada] = useState<AtividadeFisica | null>(null)

  const getIntensidadeColor = (intensidade: string) => {
    switch (intensidade) {
      case 'Leve':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'Moderada':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
      default:
        return ''
    }
  }

  if (atividadeSelecionada) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button variant="ghost" onClick={() => setAtividadeSelecionada(null)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar às Atividades
          </Button>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{atividadeSelecionada.titulo}</CardTitle>
                  <CardDescription className="text-base">{atividadeSelecionada.descricao}</CardDescription>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className={getIntensidadeColor(atividadeSelecionada.intensidade)}>
                    {atividadeSelecionada.intensidade}
                  </Badge>
                  <Badge variant="outline" className="text-green-600 dark:text-green-400">
                    {atividadeSelecionada.tipo}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Play className="w-4 h-4" />
                <span>Duração: {atividadeSelecionada.duracao}</span>
              </div>

              <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  <strong>Importante:</strong> Sempre consulte um médico antes de iniciar novos exercícios. Pare imediatamente se houver dor ou desconforto.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-500" />
                  Como Fazer
                </h3>
                <ol className="space-y-3">
                  {atividadeSelecionada.passos.map((passo, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 pt-0.5">{passo}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                  ✓ Benefícios
                </h3>
                <ul className="space-y-2">
                  {atividadeSelecionada.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mt-1">•</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="text-lg font-semibold mb-3 text-amber-700 dark:text-amber-300">
                  ⚠️ Cuidados Importantes
                </h3>
                <ul className="space-y-2">
                  {atividadeSelecionada.cuidados.map((cuidado, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-amber-500 mt-1">•</span>
                      {cuidado}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

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
            <Dumbbell className="w-10 h-10 text-green-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Atividades Físicas
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exercícios suaves e seguros para manter o corpo ativo e saudável
          </p>
        </div>

        <Alert className="mb-6 border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong>Aviso Importante:</strong> Sempre consulte o médico antes de iniciar qualquer atividade física. Adapte os exercícios conforme as capacidades individuais.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atividades.map((atividade) => (
            <Card
              key={atividade.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-green-300 dark:hover:border-green-600"
              onClick={() => setAtividadeSelecionada(atividade)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg">{atividade.titulo}</CardTitle>
                  <Badge className={getIntensidadeColor(atividade.intensidade)}>
                    {atividade.intensidade}
                  </Badge>
                </div>
                <CardDescription>{atividade.descricao}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="text-green-600 dark:text-green-400">
                      {atividade.tipo}
                    </Badge>
                    <span className="text-gray-600 dark:text-gray-400">{atividade.duracao}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    Ver Instruções
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
