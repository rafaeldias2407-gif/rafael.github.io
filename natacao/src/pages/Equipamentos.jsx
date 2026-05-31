import { Package, Star, DollarSign } from 'lucide-react'
import './Pages.css'

export default function Equipamentos() {
  const equipamentos = [
    {
      id: 1,
      nome: 'Maiô/Sunga',
      descricao: 'Peça fundamental de roupa de banho',
      tipos: ['Performance', 'Casual', 'Competição'],
      preco: 'R$ 50 - R$ 300',
      importancia: 'Crítica'
    },
    {
      id: 2,
      nome: 'Óculos de Natação',
      descricao: 'Proteção dos olhos e visão embaixo da água',
      tipos: ['Corrida/Close', 'Angular', 'Plano'],
      preco: 'R$ 30 - R$ 150',
      importancia: 'Essencial'
    },
    {
      id: 3,
      nome: 'Touca de Natação',
      descricao: 'Reduz arrasto e protege cabelos',
      tipos: ['Silicone', 'Látex', 'Lycra'],
      preco: 'R$ 15 - R$ 80',
      importancia: 'Recomendada'
    },
    {
      id: 4,
      nome: 'Pés de Pato (Nadadeira)',
      descricao: 'Aumenta propulsão e velocidade',
      tipos: ['Curto', 'Médio', 'Longo'],
      preco: 'R$ 80 - R$ 250',
      importancia: 'Treino'
    },
    {
      id: 5,
      nome: 'Pullbuoy',
      descricao: 'Flutua entre as pernas para treino de braços',
      tipos: ['Padrão', 'Ajustável'],
      preco: 'R$ 40 - R$ 120',
      importancia: 'Treino'
    },
    {
      id: 6,
      nome: 'Kickboard',
      descricao: 'Prancha para treino de pernada',
      tipos: ['EVA', 'EPE', 'Espuma'],
      preco: 'R$ 30 - R$ 100',
      importancia: 'Treino'
    },
    {
      id: 7,
      nome: 'Roupa de Banho Térmica',
      descricao: 'Mantém o calor corporal em águas frias',
      tipos: ['1mm', '2mm', '3mm'],
      preco: 'R$ 150 - R$ 500',
      importancia: 'Especial'
    },
    {
      id: 8,
      nome: 'Mochila à Prova d\'Água',
      descricao: 'Protege pertences pessoais',
      tipos: ['Pequena', 'Média', 'Grande'],
      preco: 'R$ 80 - R$ 300',
      importancia: 'Acessório'
    }
  ]

  const marcas = [
    { nome: 'Speedo', country: 'Austrália', especialidade: 'Maiôs e Acessórios' },
    { nome: 'Arena', country: 'Itália', especialidade: 'Equipamentos de Competição' },
    { nome: 'TYR', country: 'EUA', especialidade: 'Óculos e Maiôs' },
    { nome: 'Mizuno', country: 'Japão', especialidade: 'Roupa de Banho' }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Equipamentos</h1>
        <p>Conheça os equipamentos essenciais para a natação</p>
      </div>

      <div className="container">
        {/* Equipamentos */}
        <section className="section equipamentos-section">
          <h2>Equipamentos Disponíveis</h2>
          <div className="grid grid-2">
            {equipamentos.map(equip => (
              <div key={equip.id} className="equipamento-card">
                <div className="equip-header">
                  <Package size={32} />
                  <h3>{equip.nome}</h3>
                </div>
                <p className="equip-desc">{equip.descricao}</p>
                
                <div className="equip-info">
                  <div className="equip-row">
                    <label>Tipos:</label>
                    <span>{equip.tipos.join(', ')}</span>
                  </div>
                  <div className="equip-row">
                    <DollarSign size={16} />
                    <span>{equip.preco}</span>
                  </div>
                  <div className="equip-row">
                    <Star size={16} />
                    <span className={`importance importance-${equip.importancia.toLowerCase()}`}>
                      {equip.importancia}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dicas de Compra */}
        <section className="section dicas-compra">
          <h2>Dicas para Comprar Equipamentos</h2>
          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-number">1</span>
              <div>
                <h4>Qualidade Importa</h4>
                <p>Invista em equipamentos de qualidade que durem mais tempo</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">2</span>
              <div>
                <h4>Conforto Primeiro</h4>
                <p>Sempre teste o equipamento antes de comprar para garantir conforto</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">3</span>
              <div>
                <h4>Compatibilidade</h4>
                <p>Certifique-se de que os equipamentos são compatíveis entre si</p>
              </div>
            </div>
            <div className="tip-item">
              <span className="tip-number">4</span>
              <div>
                <h4>Manutenção</h4>
                <p>Limpe e seque bem os equipamentos após cada uso</p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas Recomendadas */}
        <section className="section marcas-section">
          <h2>Marcas Recomendadas</h2>
          <div className="marcas-grid">
            {marcas.map((marca, idx) => (
              <div key={idx} className="marca-card">
                <h3>{marca.nome}</h3>
                <p className="marca-country">🌍 {marca.country}</p>
                <p className="marca-espec">{marca.especialidade}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
