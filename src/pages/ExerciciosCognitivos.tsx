import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, ArrowLeft, Play, CheckCircle2, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Exercicio {
  id: string
  titulo: string
  descricao: string
  nivel: 'Fácil' | 'Médio' | 'Desafiador'
  duracao: string
  categoria: string
  instrucoes: string[]
  beneficios: string[]
}

export default function ExerciciosCognitivos() {
  const exercicios: Exercicio[] = [
    {
      id: '1',
      titulo: 'Memória com Fotos de Família',
      descricao: 'Use álbuns de fotos antigas para estimular memórias',
      nivel: 'Fácil',
      duracao: '15-20 min',
      categoria: 'Memória',
      instrucoes: [
        'Separe fotos antigas da família em uma mesa',
        'Peça para identificar pessoas nas fotos',
        'Pergunte sobre momentos específicos retratados',
        'Deixe que conte histórias relacionadas às imagens',
        'Faça perguntas abertas como "O que você lembra desse dia?"'
      ],
      beneficios: [
        'Estimula memória de longo prazo',
        'Fortalece conexões emocionais',
        'Promove socialização'
      ]
    },
    {
      id: '2',
      titulo: 'Jogo das Categorias',
      descricao: 'Exercite o pensamento categórico e associação',
      nivel: 'Fácil',
      duracao: '10-15 min',
      categoria: 'Raciocínio',
      instrucoes: [
        'Escolha uma categoria (frutas, animais, cores, cidades)',
        'Peça para nomear itens dessa categoria',
        'Comece com categorias simples e familiares',
        'Dê dicas visuais se necessário (mostre figuras)',
        'Celebre cada resposta correta'
      ],
      beneficios: [
        'Exercita linguagem e vocabulário',
        'Estimula memória semântica',
        'Melhora organização mental'
      ]
    },
    {
      id: '3',
      titulo: 'Quebra-Cabeça Simples',
      descricao: 'Montar quebra-cabeças de peças grandes',
      nivel: 'Médio',
      duracao: '20-30 min',
      categoria: 'Coordenação',
      instrucoes: [
        'Use quebra-cabeças com 20-50 peças grandes',
        'Escolha imagens familiares ou significativas',
        'Separe as peças de borda primeiro',
        'Ajude a encontrar peças quando necessário',
        'Faça pausas se houver frustração'
      ],
      beneficios: [
        'Desenvolve coordenação motora fina',
        'Exercita percepção espacial',
        'Promove concentração'
      ]
    },
    {
      id: '4',
      titulo: 'Canções e Músicas Antigas',
      descricao: 'Cante ou ouça músicas da juventude',
      nivel: 'Fácil',
      duracao: '15-25 min',
      categoria: 'Memória',
      instrucoes: [
        'Toque músicas da época de juventude do idoso',
        'Cante junto ou encoraje a cantar',
        'Pergunte sobre memórias ligadas às músicas',
        'Use instrumentos simples (chocalho, pandeiro)',
        'Dance suavemente ao ritmo das canções'
      ],
      beneficios: [
        'Acessa memórias profundas',
        'Melhora humor e bem-estar',
        'Estimula linguagem'
      ]
    },
    {
      id: '5',
      titulo: 'Contar Histórias com Sequência',
      descricao: 'Organize cartões de histórias em sequência lógica',
      nivel: 'Médio',
      duracao: '15-20 min',
      categoria: 'Lógica',
      instrucoes: [
        'Use 3-5 cartões com imagens de uma história simples',
        'Embaralhe os cartões',
        'Peça para colocar na ordem correta',
        'Pergunte o que acontece em cada imagem',
        'Ajude a criar a narrativa completa'
      ],
      beneficios: [
        'Exercita raciocínio lógico',
        'Estimula narrativa verbal',
        'Desenvolve sequenciamento'
      ]
    },
    {
      id: '6',
      titulo: 'Identificar Objetos pelo Tato',
      descricao: 'Reconheça objetos apenas tocando',
      nivel: 'Médio',
      duracao: '10-15 min',
      categoria: 'Sensorial',
      instrucoes: [
        'Coloque objetos comuns em uma sacola',
        'Peça para identificar sem olhar',
        'Use objetos com texturas diferentes',
        'Dê dicas se houver dificuldade',
        'Converse sobre o uso de cada objeto'
      ],
      beneficios: [
        'Estimula percepção sensorial',
        'Exercita memória semântica',
        'Promove concentração'
      ]
    },
    {
      id: '7',
      titulo: 'Atividades de Cozinha Simples',
      descricao: 'Participe de receitas fáceis e familiares',
      nivel: 'Médio',
      duracao: '30-40 min',
      categoria: 'Prático',
      instrucoes: [
        'Escolha receitas simples e conhecidas',
        'Delegue tarefas seguras (misturar, decorar)',
        'Use ingredientes que tragam memórias',
        'Supervisione sempre por segurança',
        'Aproveite o momento de socialização'
      ],
      beneficios: [
        'Estimula múltiplos sentidos',
        'Mantém autonomia',
        'Cria momentos prazerosos'
      ]
    },
    {
      id: '8',
      titulo: 'Jogos de Correspondência',
      descricao: 'Encontre pares de cartas ou imagens',
      nivel: 'Fácil',
      duracao: '10-15 min',
      categoria: 'Memória',
      instrucoes: [
        'Use 6-12 cartas com imagens simples',
        'Vire as cartas para baixo',
        'Encontre os pares correspondentes',
        'Comece com poucas cartas e aumente gradualmente',
        'Deixe tempo suficiente para processar'
      ],
      beneficios: [
        'Exercita memória de curto prazo',
        'Desenvolve atenção visual',
        'Promove diversão'
      ]
    }
  ]

  const [exercicioSelecionado, setExercicioSelecionado] = useState<Exercicio | null>(null)

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Fácil':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'Médio':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Desafiador':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      default:
        return ''
    }
  }

  if (exercicioSelecionado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button variant="ghost" onClick={() => setExercicioSelecionado(null)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Exercícios
          </Button>

          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{exercicioSelecionado.titulo}</CardTitle>
                  <CardDescription className="text-base">{exercicioSelecionado.descricao}</CardDescription>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className={getNivelColor(exercicioSelecionado.nivel)}>
                    {exercicioSelecionado.nivel}
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 dark:text-purple-400">
                    {exercicioSelecionado.categoria}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Clock className="w-4 h-4" />
                <span>Duração: {exercicioSelecionado.duracao}</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Play className="w-5 h-5 text-purple-500" />
                  Como Fazer
                </h3>
                <ol className="space-y-3">
                  {exercicioSelecionado.instrucoes.map((instrucao, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 pt-0.5">{instrucao}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
                  <CheckCircle2 className="w-5 h-5" />
                  Benefícios
                </h3>
                <ul className="space-y-2">
                  {exercicioSelecionado.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-green-500 mt-1">✓</span>
                      {beneficio}
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
            <Brain className="w-10 h-10 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Exercícios Cognitivos
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Atividades para estimular memória, raciocínio e manter a mente ativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercicios.map((exercicio) => (
            <Card
              key={exercicio.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-purple-300 dark:hover:border-purple-600"
              onClick={() => setExercicioSelecionado(exercicio)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg">{exercicio.titulo}</CardTitle>
                  <Badge className={getNivelColor(exercicio.nivel)}>
                    {exercicio.nivel}
                  </Badge>
                </div>
                <CardDescription>{exercicio.descricao}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="text-purple-600 dark:text-purple-400">
                      {exercicio.categoria}
                    </Badge>
                    <span className="text-gray-600 dark:text-gray-400">{exercicio.duracao}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    Ver Detalhes
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
