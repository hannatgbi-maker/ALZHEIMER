import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Calendar, Dumbbell, Lightbulb, Heart, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: 'Rotina Diária',
      description: 'Organize atividades e crie uma rotina estruturada',
      link: '/rotina',
      color: 'text-blue-500'
    },
    {
      icon: Brain,
      title: 'Exercícios Cognitivos',
      description: 'Estimule a memória e o raciocínio',
      link: '/exercicios-cognitivos',
      color: 'text-purple-500'
    },
    {
      icon: Dumbbell,
      title: 'Atividades Físicas',
      description: 'Exercícios suaves adaptados para idosos',
      link: '/atividades-fisicas',
      color: 'text-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Ideias e Dicas',
      description: 'Sugestões práticas para o dia a dia',
      link: '/ideias',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      title: 'Lembretes',
      description: 'Medicação, consultas e compromissos',
      link: '/lembretes',
      color: 'text-red-500'
    },
    {
      icon: Heart,
      title: 'Progresso',
      description: 'Acompanhe a evolução das atividades',
      link: '/progresso',
      color: 'text-pink-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CuidaAlzheimer
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Um guia completo para auxiliar no cuidado diário de pessoas com Alzheimer,
            com atividades, exercícios e orientações práticas
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <Link key={feature.link} to={feature.link}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-purple-300 dark:hover:border-purple-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Start Info */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Bem-vindo ao CuidaAlzheimer</CardTitle>
            <CardDescription className="text-purple-100 text-base">
              Este aplicativo foi criado para tornar o cuidado mais organizado e efetivo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">1</span>
              </div>
              <p className="text-purple-50">Comece pela <strong>Rotina Diária</strong> para estruturar o dia</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">2</span>
              </div>
              <p className="text-purple-50">Explore os <strong>Exercícios</strong> para estimulação cognitiva e física</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold">3</span>
              </div>
              <p className="text-purple-50">Configure <strong>Lembretes</strong> para não esquecer nada importante</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
