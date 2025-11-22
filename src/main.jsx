import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { Analytics } from '@vercel/analytics/react'
import { useContentStore } from './store/useContentStore.js'

const AppWithInit = () => {
  const initFromStorage = useContentStore((s) => s.initFromStorage)
  React.useEffect(() => {
    initFromStorage()
  }, [initFromStorage])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppWithInit />
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
