import { Heart, Zap, Activity } from 'lucide-react'
import './Pages.css'

export default function Saude() {
  const beneficios = [
    {
      id: 1,
      titulo: 'Cardio Completo',
      icon: Heart,
      descricao: 'Fortalece o coração e melhora a circulação sanguínea sem impacto nas articulações'
    },
    {
      id: 2,
      titulo: 'Queima de Calorias',
      icon: Zap,
      descricao: '300-700 calorias por hora, dependendo da intensidade do exercício'
    },
    {
      id: 3,
      titulo: 'Baixo Impacto',
      icon: Activity,
      descricao: 'Ideal para pessoas com problemas articulares, gravidez ou reabilitação'
    }
  ]

  const musculos = [
    { grupo: 'Peitorais', descricao: 'Fortalecidos especialmente pelo nado de peito' },
    { grupo: 'Dorsais', descricao: 'Desenvolvidos principalmente no nado de costas' },
    { grupo: 'Ombros', descricao: 'Trabalho intenso em todos os estilos' },
    { grupo: 'Abdômen', descricao: 'Estabilização constante durante o nado' },
    { grupo: 'Pernas', descricao: 'Propulsão e equilíbrio' },
    { grupo: 'Núcleo', descricao: 'Fortalecimento total do corpo' }
  ]

  const frequencias = [
    { nivel: 'Iniciante', frequencia: '2-3x por semana', intensidade: 'Moderada', duração: '30 minutos' },
    { nivel: 'Intermediário', frequencia: '3-4x por semana', intensidade: 'Moderada a Alta', duração: '45 minutos' },
    { nivel: 'Avançado', frequencia: '5-6x por semana', intensidade: 'Alta', duração: '60-90 minutos' }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Saúde e Fitness</h1>
        <p>Descubra os benefícios da natação para sua saúde</p>
      </div>

      <div className="container">
        {/* Benefícios Principais */}
        <section className="section beneficios-section">
          <h2>Benefícios Principais da Natação</h2>
          <div className="grid grid-3">
            {beneficios.map(ben => {
              const Icon = ben.icon
              return (
                <div key={ben.id} className="benefit-card">
                  <Icon size={48} className="benefit-icon" />
                  <h3>{ben.titulo}</h3>
                  <p>{ben.descricao}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Grupos Musculares */}
        <section className="section musculos-section">
          <h2>Músculos Trabalhados</h2>
          <div className="musculos-grid">
            {musculos.map((musculo, idx) => (
              <div key={idx} className="musculo-card">
                <h3>{musculo.grupo}</h3>
                <p>{musculo.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frequência Recomendada */}
        <section className="section frequencia-section">
          <h2>Frequência de Treino Recomendada</h2>
          <div className="frequencia-table">
            <table>
              <thead>
                <tr>
                  <th>Nível</th>
                  <th>Frequência</th>
                  <th>Intensidade</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                {frequencias.map((freq, idx) => (
                  <tr key={idx}>
                    <td><strong>{freq.nivel}</strong></td>
                    <td>{freq.frequencia}</td>
                    <td>{freq.intensidade}</td>
                    <td>{freq.duração}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dicas de Saúde */}
        <section className="section dicas-saude">
          <h2>Dicas Importantes para Sua Saúde</h2>
          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-number">1</span>
              <div>
                <h4>Aquecimento</h4>
                <p>Sempre comece com 5-10 minutos de aquecimento antes de treinar</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">2</span>
              <div>
                <h4>Hidratação</h4>
                <p>Beba água mesmo dentro da piscina para se manter hidratado</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">3</span>
              <div>
                <h4>Descanso</h4>
                <p>Deixe pelo menos 1-2 dias de descanso por semana para recuperação</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">4</span>
              <div>
                <h4>Alimentação</h4>
                <p>Coma bem balanceado com carboidratos e proteínas após treinar</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
