import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Lightbulb,
  Home,
  MessageCircle,
  Users,
  Utensils,
  Shield,
  Moon,
  Smile,
  Heart
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Categoria {
  titulo: string
  icon: any
  cor: string
  ideias: Ideia[]
}

interface Ideia {
  titulo: string
  descricao: string
  dicas: string[]
}

export default function Ideias() {
  const categorias: Categoria[] = [
    {
      titulo: 'Comunicação',
      icon: MessageCircle,
      cor: 'text-blue-500',
      ideias: [
        {
          titulo: 'Fale de forma clara e simples',
          descricao: 'Facilite a compreensão das conversas',
          dicas: [
            'Use frases curtas e diretas',
            'Fale devagar e com calma',
            'Faça uma pergunta de cada vez',
            'Use gestos para complementar',
            'Mantenha contato visual',
            'Dê tempo para processar e responder'
          ]
        },
        {
          titulo: 'Evite corrigir ou discutir',
          descricao: 'Preserve a dignidade e reduza frustrações',
          dicas: [
            'Se contar a mesma história, ouça com atenção',
            'Não corrija erros pequenos',
            'Entre na realidade da pessoa',
            'Valide os sentimentos',
            'Use distração se houver agitação'
          ]
        },
        {
          titulo: 'Use memórias antigas',
          descricao: 'Conecte-se através de lembranças',
          dicas: [
            'Converse sobre o passado distante',
            'Use fotos antigas como estímulo',
            'Pergunte sobre profissão, juventude',
            'Cante músicas conhecidas',
            'Recorde tradições familiares'
          ]
        }
      ]
    },
    {
      titulo: 'Ambiente Seguro',
      icon: Home,
      cor: 'text-green-500',
      ideias: [
        {
          titulo: 'Previna quedas',
          descricao: 'Adapte a casa para maior segurança',
          dicas: [
            'Retire tapetes soltos',
            'Instale barras de apoio no banheiro',
            'Mantenha boa iluminação em todos os cômodos',
            'Remova móveis desnecessários',
            'Use sapatos antiderrapantes',
            'Mantenha corredores livres'
          ]
        },
        {
          titulo: 'Organize o espaço',
          descricao: 'Facilite a orientação',
          dicas: [
            'Coloque etiquetas em armários e gavetas',
            'Use cores contrastantes em portas',
            'Deixe objetos importantes sempre no mesmo lugar',
            'Reduza desordem visual',
            'Mantenha rotina de organização',
            'Crie "cantos" temáticos (leitura, música)'
          ]
        },
        {
          titulo: 'Adaptações no banheiro',
          descricao: 'Torne o banho mais seguro',
          dicas: [
            'Instale barras de apoio',
            'Use tapete antiderrapante',
            'Considere cadeira de banho',
            'Mantenha água morna (nunca quente)',
            'Deixe produtos de higiene acessíveis',
            'Supervisione sempre'
          ]
        }
      ]
    },
    {
      titulo: 'Rotina e Estrutura',
      icon: Shield,
      cor: 'text-purple-500',
      ideias: [
        {
          titulo: 'Mantenha horários consistentes',
          descricao: 'Crie previsibilidade no dia a dia',
          dicas: [
            'Mesmos horários para refeições',
            'Rotina matinal estruturada',
            'Atividades no mesmo horário',
            'Horário fixo para dormir',
            'Use calendário visual',
            'Avise sobre mudanças com antecedência'
          ]
        },
        {
          titulo: 'Simplifique escolhas',
          descricao: 'Evite sobrecarga de decisões',
          dicas: [
            'Ofereça 2 opções no máximo',
            'Separe a roupa do dia',
            'Simplifique o cardápio',
            'Reduza opções de entretenimento',
            'Mantenha ambiente calmo'
          ]
        }
      ]
    },
    {
      titulo: 'Alimentação',
      icon: Utensils,
      cor: 'text-orange-500',
      ideias: [
        {
          titulo: 'Facilite as refeições',
          descricao: 'Torne a alimentação mais agradável',
          dicas: [
            'Sirva pratos favoritos e familiares',
            'Corte alimentos em pedaços pequenos',
            'Use pratos coloridos para contraste',
            'Evite muitos itens no prato',
            'Mantenha ambiente calmo',
            'Dê tempo suficiente para comer',
            'Use talheres adaptados se necessário'
          ]
        },
        {
          titulo: 'Mantenha hidratação',
          descricao: 'Incentive o consumo de líquidos',
          dicas: [
            'Ofereça água frequentemente',
            'Use copos coloridos e atrativos',
            'Ofereça sucos e chás',
            'Inclua alimentos com água (frutas, sopas)',
            'Crie lembretes visuais'
          ]
        }
      ]
    },
    {
      titulo: 'Comportamentos Desafiadores',
      icon: Smile,
      cor: 'text-pink-500',
      ideias: [
        {
          titulo: 'Lidando com agitação',
          descricao: 'Acalme momentos de estresse',
          dicas: [
            'Identifique gatilhos (fome, cansaço, dor)',
            'Mantenha tom de voz calmo',
            'Use distração com atividade agradável',
            'Ofereça música relaxante',
            'Faça caminhada curta',
            'Não confronte ou discuta',
            'Dê espaço se necessário'
          ]
        },
        {
          titulo: 'Quando houver resistência',
          descricao: 'Incentive sem forçar',
          dicas: [
            'Espere alguns minutos e tente novamente',
            'Transforme tarefa em jogo ou música',
            'Ofereça ajuda de forma gentil',
            'Respeite preferências quando possível',
            'Não leve para o pessoal'
          ]
        }
      ]
    },
    {
      titulo: 'Sono e Descanso',
      icon: Moon,
      cor: 'text-indigo-500',
      ideias: [
        {
          titulo: 'Melhore a qualidade do sono',
          descricao: 'Estabeleça rotina noturna',
          dicas: [
            'Mesmos horários para dormir e acordar',
            'Evite cochilos longos durante o dia',
            'Reduza luz e barulho à noite',
            'Evite cafeína após 14h',
            'Atividade física leve durante o dia',
            'Ritual relaxante antes de dormir',
            'Quarto confortável e seguro'
          ]
        }
      ]
    },
    {
      titulo: 'Socialização',
      icon: Users,
      cor: 'text-teal-500',
      ideias: [
        {
          titulo: 'Mantenha conexões sociais',
          descricao: 'Estimule interação com outros',
          dicas: [
            'Visitas curtas de familiares',
            'Videochamadas com entes queridos',
            'Grupos de convivência (se apropriado)',
            'Atividades em família',
            'Celebre datas especiais',
            'Compartilhe refeições juntos'
          ]
        }
      ]
    },
    {
      titulo: 'Autocuidado do Cuidador',
      icon: Heart,
      cor: 'text-red-500',
      ideias: [
        {
          titulo: 'Cuide de você também',
          descricao: 'Sua saúde é fundamental',
          dicas: [
            'Peça ajuda quando necessário',
            'Tire pausas regulares',
            'Mantenha suas atividades sociais',
            'Durma o suficiente',
            'Busque grupos de apoio',
            'Consulte profissionais quando precisar',
            'Não se culpe por limitações',
            'Celebre pequenas vitórias'
          ]
        },
        {
          titulo: 'Gerencie o estresse',
          descricao: 'Técnicas para manter equilíbrio',
          dicas: [
            'Pratique respiração profunda',
            'Reserve tempo para hobbies',
            'Exercite-se regularmente',
            'Mantenha diário (se ajudar)',
            'Converse com amigos',
            'Aceite que há dias difíceis'
          ]
        }
      ]
    }
  ]

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
            <Lightbulb className="w-10 h-10 text-yellow-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Ideias e Dicas Práticas
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Orientações para melhorar o cuidado diário e a qualidade de vida
          </p>
        </div>

        <div className="space-y-8">
          {categorias.map((categoria, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg`}>
                  <categoria.icon className={`w-6 h-6 ${categoria.cor}`} />
                </div>
                <h2 className="text-2xl font-bold">{categoria.titulo}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoria.ideias.map((ideia, ideiaIndex) => (
                  <Card key={ideiaIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{ideia.titulo}</CardTitle>
                      <CardDescription>{ideia.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {ideia.dicas.map((dica, dicaIndex) => (
                          <li key={dicaIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className={`${categoria.cor} mt-1 flex-shrink-0`}>•</span>
                            <span>{dica}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Lembre-se
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-purple-50">
              • Cada pessoa com Alzheimer é única. O que funciona para uma pode não funcionar para outra.
            </p>
            <p className="text-purple-50">
              • Seja paciente e flexível. Adapte as estratégias conforme necessário.
            </p>
            <p className="text-purple-50">
              • Não hesite em buscar ajuda profissional quando precisar.
            </p>
            <p className="text-purple-50 font-semibold">
              • Cuidar de alguém com Alzheimer é um ato de amor, mas lembre-se de cuidar de você também! ❤️
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
