import { useState } from 'react'
import { MessageSquare, Calendar, User } from 'lucide-react'
import './Pages.css'

export default function Blog() {
  const [filtro, setFiltro] = useState('todos')

  const posts = [
    {
      id: 1,
      titulo: '5 Dicas para Melhorar a sua Técnica de Crawl',
      categoria: 'Técnicas',
      autor: 'Carlos Silva',
      data: '2024-01-15',
      excerpt: 'Descubra como aperfeiçoar o seu nado crawl com essas 5 dicas práticas e eficazes...',
      conteudo: 'Conteúdo completo do artigo sobre técnicas de crawl...'
    },
    {
      id: 2,
      titulo: 'Benefícios Mentais da Natação',
      categoria: 'Saúde',
      autor: 'Dr. João',
      data: '2024-01-10',
      excerpt: 'Além dos benefícios físicos, a natação também melhora a sua saúde mental...',
      conteudo: 'Conteúdo sobre benefícios mentais...'
    },
    {
      id: 3,
      titulo: 'História dos Jogos Olímpicos de Natação',
      categoria: 'História',
      autor: 'Maria Santos',
      data: '2024-01-05',
      excerpt: 'Conheça a evolução da natação nos Jogos Olímpicos desde 1896...',
      conteudo: 'Conteúdo sobre história olímpica...'
    },
    {
      id: 4,
      titulo: 'Equipamentos Essenciais para Iniciantes',
      categoria: 'Equipamentos',
      autor: 'Pedro Costa',
      data: '2023-12-28',
      excerpt: 'Saiba quais equipamentos você precisa para começar na natação...',
      conteudo: 'Conteúdo sobre equipamentos...'
    },
    {
      id: 5,
      titulo: 'Preparação para Competições: Guia Completo',
      categoria: 'Competições',
      autor: 'Ana Oliveira',
      data: '2023-12-20',
      excerpt: 'Prepare-se adequadamente para a sua primeira competição de natação...',
      conteudo: 'Conteúdo sobre preparação...'
    },
    {
      id: 6,
      titulo: 'Natação na Terceira Idade: Qualidade de Vida',
      categoria: 'Saúde',
      autor: 'Dr. Roberto',
      data: '2023-12-15',
      excerpt: 'Por que a natação é ideal para pessoas acima de 60 anos...',
      conteudo: 'Conteúdo sobre natação para idosos...'
    }
  ]

  const categorias = ['todos', 'Técnicas', 'Saúde', 'História', 'Equipamentos', 'Competições']

  const postsFiltrados = filtro === 'todos' 
    ? posts 
    : posts.filter(post => post.categoria === filtro)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Blog de Natação</h1>
        <p>Artigos, dicas e notícias sobre natação</p>
      </div>

      <div className="container">
        {/* Filtros */}
        <section className="section filtros-section">
          <div className="filtros">
            {categorias.map(cat => (
              <button
                key={cat}
                className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
                onClick={() => setFiltro(cat)}
              >
                {cat === 'todos' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Posts */}
        <section className="section posts-section">
          <div className="posts-grid">
            {postsFiltrados.map(post => (
              <article key={post.id} className="blog-post-card">
                <div className="post-header">
                  <span className="post-categoria">{post.categoria}</span>
                  <span className="post-data">{new Date(post.data).toLocaleDateString('pt-PT')}</span>
                </div>
                
                <h3>{post.titulo}</h3>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-footer">
                  <div className="post-meta">
                    <User size={16} />
                    <span>{post.autor}</span>
                  </div>
                  <a href="#" className="read-more">Ler Mais →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-blog">
          <div className="cta-content">
            <h2>Deseja Contribuir?</h2>
            <p>Se tem conhecimento sobre natação e gostaria de contribuir com artigos, contacte-nos!</p>
            <button className="btn-primary">Enviar Artigo</button>
          </div>
        </section>
      </div>
    </div>
  )
}
