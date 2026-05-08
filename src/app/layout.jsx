import './globals.css'

export const metadata = {
  title: 'HyperScript',
  description: 'Plataforma estudantil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
