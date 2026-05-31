import { Link } from 'react-router-dom'
import { Waves, Award, TrendingUp, Users } from 'lucide-react'
import './Home.css'

export default function Home() {
  const categorias = [
    {
      id: 1,
      title: 'Natação Infantil',
      description: 'Programas especiais para crianças começarem no desporto',
      icon: Users,
      color: '#FFB347'
    },
    {
      id: 2,
      title: 'Natação para Adultos',
      description: 'Aperfeiçoamento e fitness para nadadores adultos',
      icon: TrendingUp,
      color: '#87CEEB'
    },
    {
      id: 3,
      title: 'Natação Profissional',
      description: 'Treinamento de elite para atletas competitivos',
      icon: Award,
      color: '#98FB98'
    },
    {
      id: 4,
      title: 'Natação Lazer',
      description: 'Diversão e relaxamento na água',
      icon: Waves,
      color: '#DDA0DD'
    }
  ]

  const destaques = [
    {
      id: 1,
      title: 'Os 4 Estilos de Natação',
      description: 'Conheça os principais estilos: Crawl, Costas, Peito e Borboleta',
      categoria: 'Técnicas'
    },
    {
      id: 2,
      title: 'Benefícios da Natação',
      description: 'Saúde cardiovascular, força e flexibilidade',
      categoria: 'Saúde'
    },
    {
      id: 3,
      title: 'História da Natação',
      description: 'Das antigas civilizações aos Jogos Olímpicos modernos',
      categoria: 'História'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à Natação Pura</h1>
          <p>O seu portal completo sobre natação: técnicas, história, saúde e comunidade em Portugal</p>
          <div className="hero-buttons">
            <Link to="/tecnicas" className="btn-primary">Começar a Aprender</Link>
            <Link to="/contato" className="btn-secondary">Contactar-nos</Link>
          </div>
        </div>
        <div className="hero-image">
          <Waves size={120} strokeWidth={1} />
        </div>
      </section>

      {/* Categorias */}
      <section className="section categorias-section">
        <div className="container">
          <h2>As Nossas Categorias</h2>
          <div className="grid grid-2">
            {categorias.map(cat => {
              const Icon = cat.icon
              return (
                <div key={cat.id} className="categoria-card" style={{ borderLeftColor: cat.color }}>
                  <Icon size={48} style={{ color: cat.color }} />
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <Link to="/categorias" className="read-more">Saiba mais →</Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="section destaques-section">
        <div className="container">
          <h2>Conteúdos em Destaque</h2>
          <div className="grid grid-3">
            {destaques.map(destaque => (
              <div key={destaque.id} className="destaque-card">
                <span className="categoria-badge">{destaque.categoria}</span>
                <h3>{destaque.title}</h3>
                <p>{destaque.description}</p>
                <a href="#" className="read-more">Ler mais →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Pronto para Mergulhar?</h2>
          <p>Explore os nossos conteúdos completos sobre natação e faça parte da comunidade</p>
          <Link to="/blog" className="btn-primary">Ler Blog</Link>
        </div>
      </section>
    </div>
  )
}
