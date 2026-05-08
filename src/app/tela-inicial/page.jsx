'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'

const atividadesIniciais = [
  { id: 1, titulo: 'Lista de Matemática — cap. 5', prazo: 'Ontem' },
  { id: 2, titulo: 'Exercícios de Redação', prazo: 'Entrega: hoje' },
  { id: 3, titulo: 'Exercícios de Física — leis de Newton', prazo: 'Entrega: amanhã' },
  { id: 4, titulo: 'Exercícios de História — 2ª Guerra', prazo: 'Entrega: sex.' },
]

const disciplinas = [
  { nome: 'Matemática', nota: 8.4 },
  { nome: 'Português', nota: 9.0 },
  { nome: 'Física', nota: 7.5 },
  { nome: 'História', nota: 8.8 },
  { nome: 'Química', nota: 8.0 },
  { nome: 'Geografia', nota: 6.5 },
]

const dadosAluno = {
  nome: 'Maria Silva',
  ano: '3° ano',
  media: '8.4',
  faltas: '2',
  bolsa: 'R$ 320',
  ranking: '5°'
}

function getNotaColor(nota) {
  if (nota >= 8) return 'var(--green)'
  if (nota >= 7) return 'var(--yellow)'
  return 'var(--red)'
}

export default function TelaInicial() {
  const router = useRouter()
  const [concluidas, setConcluidas] = useState([1]) 

  function toggleAtividade(id) {
    if (concluidas.includes(id)) {
      setConcluidas(concluidas.filter(c => c !== id))
    } else {
      setConcluidas([...concluidas, id])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.layout}>

        <aside className={styles.sidebar}>
          <div className={styles.avatar}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7aafd4" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <p className={styles.name}>{dadosAluno.nome}</p>
          <p className={styles.year}>{dadosAluno.ano}</p>
          <div className={styles.spacer} />
          <button className={styles.sairBtn} onClick={() => router.push('/loginpage')}>Sair</button>
        </aside>

        <main className={styles.main}>
          <div className={styles.stats}>
            {[
              { label: 'Média', value: dadosAluno.media },
              { label: 'Faltas', value: dadosAluno.faltas },
              { label: 'Bolsa', value: dadosAluno.bolsa },
              { label: 'Ranking', value: dadosAluno.ranking },
            ].map(s => (
              <div key={s.label} className={styles.statCard}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.bottom}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Atividades diárias</h2>
              <div className={styles.atividadesList}>
                {atividadesIniciais.map(a => {
                  const feita = concluidas.includes(a.id)
                  return (
                    <div key={a.id} className={styles.atividadeItem} onClick={() => toggleAtividade(a.id)} style={{ cursor: 'pointer' }}>
                      <div className={styles.checkbox} style={{ borderColor: feita ? 'var(--blue)' : 'var(--border)' }}>
                        {feita && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <div className={styles.atividadeInfo}>
                        <p className={styles.atividadeTitulo} style={{ opacity: feita ? 0.4 : 1, textDecoration: feita ? 'line-through' : 'none' }}>
                          {a.titulo}
                        </p>
                        <p className={styles.atividadePrazo}>{a.prazo}</p>
                      </div>
                      <span className={styles.badge} style={{ background: feita ? 'var(--green-bg)' : '#0a2040', color: feita ? 'var(--green)' : 'var(--text-secondary)' }}>
                        {feita ? 'Feito' : 'Em aberto'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Disciplinas</h2>
              <div className={styles.disciplinasList}>
                {disciplinas.map(d => (
                  <div key={d.nome} className={styles.disciplinaItem}>
                    <span className={styles.disciplinaNome}>{d.nome}</span>
                    <span className={styles.disciplinaNota} style={{ color: getNotaColor(d.nota) }}>
                      {d.nota.toFixed(1)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

      </div>
    </div>
  )
}