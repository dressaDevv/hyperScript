'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './login.module.css'


const MOCK_USERS = [
  { email: 'aluno@escola.com', senha: '123456', tipo: 'aluno' },
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin(e) {
      e.preventDefault()

      const salvoNoStorage = JSON.parse(localStorage.getItem('user_registado'))
    
      const todosUsuarios = [...MOCK_USERS]
      if (salvoNoStorage) todosUsuarios.push(salvoNoStorage)

      const user = todosUsuarios.find(
        u => u.email === email && u.senha === senha
      )

      if (!user) {
        alert('Credenciais inválidas!')
        return
      }

      localStorage.setItem('user', JSON.stringify(user))
      router.push('/tela-inicial')
    }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Seja bem-vindo de volta!</h1>
          <p className={styles.subtitle}>Entre na sua conta</p>
        </div>

        <form onSubmit={handleLogin} className={styles.form}>
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

          <button type="submit" className={styles.button}>Entrar</button>
        </form>

        <p className={styles.footer}>
          É novo aqui?{' '}
          <span className={styles.link} onClick={() => router.push('/registerpage')}>
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  )
}