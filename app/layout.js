import './globals.css'

export const metadata = {
  title: 'My First Frontend',
  description: 'My first Next.js frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
