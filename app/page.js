'use client'

import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)

  const checkHealth = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://my-first-api-bk1a.onrender.com/health')
      const data = await response.json()
      alert(JSON.stringify(data, null, 2))
    } catch (error) {
      alert('حدث خطأ: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="main">
      <h1>☁️ سحابتي تعمل</h1>
      <button onClick={checkHealth} disabled={loading}>
        {loading ? 'جاري التحميل...' : 'تحقق من الحالة'}
      </button>
    </main>
  )
}
