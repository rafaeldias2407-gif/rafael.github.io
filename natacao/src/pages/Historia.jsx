import { BookOpen, Calendar, Users } from 'lucide-react'
import './Pages.css'

export default function Historia() {
  const periodos = [
    {
      periodo: 'Antiguidade (3000 a.C.)',
      titulo: 'Os Primórdios',
      descricao: 'Egípcios e babilónios praticavam natação por necessidade. Há evidências em inscrições egípcias de técnicas primitivas de natação.'
    },
    {
      periodo: 'Idade Média (1000-1500)',
      titulo: 'Declínio Europeu',
      descricao: 'Na Europa, a natação era desaprovada. Mas continuava popular em outras culturas, especialmente na Ásia.'
    },
    {
      periodo: 'Século XVI-XVII',
      titulo: 'Renascimento',
      descricao: 'Humanistas europeus começam a valorizar a natação novamente como habilidade importante.'
    },
    {
      periodo: 'Século XIX',
      titulo: 'Era Moderna',
      descricao: 'Surgem os primeiros clubes de natação. O nado crawl revoluciona a natação competitiva.'
    },
    {
      periodo: '1896 - Presente',
      titulo: 'Natação Olímpica',
      descricao: 'Natação é desporto olímpico desde os primeiros Jogos Modernos, evoluindo constantemente com novas técnicas.'
    }
  ]

  const curiosidades = [
    'O nado crawl foi aperfeiçoado na Austrália no início do século XX',
    'As primeiras competições olímpicas de natação foram em 1896 em Atenas',
    'Mark Spitz venceu 7 medalhas de ouro em 1972, recorde que durou 36 anos',
    'A natação sincronizada surgiu na década de 1930 no Canadá',
    'Actualmente existem mais de 100 milhões de nadadores no mundo'
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>História da Natação</h1>
        <p>Descubra a evolução da natação ao longo dos séculos</p>
      </div>

      <div className="container">
        {/* Linha do Tempo */}
        <section className="section timeline-section">
          <h2>Linha do Tempo</h2>
          <div className="timeline">
            {periodos.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <Calendar size={24} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.periodo}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curiosidades */}
        <section className="section curiosidades-section">
          <h2>Curiosidades Fascinantes</h2>
          <div className="curiosidades-grid">
            {curiosidades.map((curiosidade, idx) => (
              <div key={idx} className="curiosidade-card">
                <span className="curiosidade-number">{idx + 1}</span>
                <p>{curiosidade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recordes */}
        <section className="section records-section">
          <h2>Recordes Memoráveis</h2>
          <div className="records-grid">
            <div className="record-card">
              <h3>Maior Distância</h3>
              <p className="record-value">24.34 km</p>
              <p className="record-detail">Natação em água aberta</p>
            </div>
            <div className="record-card">
              <h3>Velocidade Máxima</h3>
              <p className="record-value">10.3 km/h</p>
              <p className="record-detail">Nathan Adrian (100m)</p>
            </div>
            <div className="record-card">
              <h3>Nadador com Mais Ouro</h3>
              <p className="record-value">23 Medalhas</p>
              <p className="record-detail">Michael Phelps</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
