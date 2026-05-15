import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AuthenticatedHome from './components/AuthenticatedHome'
import ProductCarousel from './components/ProductCarousel'
import EditorialGrid from './components/EditorialGrid'
import KidsCollection from './components/KidsCollection'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const authStatus = localStorage.getItem('dynasteez_auth')
    const userData = localStorage.getItem('dynasteez_user')

    if (authStatus === 'true' && userData) {
      try {
        setIsAuthenticated(true)
        setUser(JSON.parse(userData))
      } catch (e) {
        console.error('Failed to parse user data:', e)
      }
    }
  }, [])

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    localStorage.setItem('dynasteez_auth', 'true')
    localStorage.setItem('dynasteez_user', JSON.stringify(userData))
    setLoginOpen(false)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('dynasteez_auth')
    localStorage.removeItem('dynasteez_user')
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar 
        onLoginClick={() => setLoginOpen(true)} 
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />

      {/* pb-20 gives breathing room for the overlapping newsletter card */}
      <main className="pb-20">
        {isAuthenticated ? (
          <AuthenticatedHome />
        ) : (
          <>
            <Hero />
            <ProductCarousel />
            <EditorialGrid />
            <KidsCollection />
          </>
        )}
        <Footer />
      </main>

      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  )
}

export default App