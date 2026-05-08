'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './register.module.css'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')

  function handleRegister(e) {
    e.preventDefault()
    router.push('/tela-inicial')
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Crie sua conta</h1>
          <p className={styles.subtitle}>Comece agora gratuitamente</p>
        </div>

        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputWrapper}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input
                type="password"
                placeholder="••••••••"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Confirmar senha</label>
            <div className={styles.inputWrapper}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmar}
                onChange={e => setConfirmar(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>

        <p className={styles.footer}>
          Precisa de ajuda?{' '}
          <span className={styles.link} onClick={() => router.push('/loginpage')}>
            Voltar ao login
          </span>
        </p>
      </div>
    </div>
  )
}
