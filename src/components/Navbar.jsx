
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setIsDark(!isDark)

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Kira' },
    { id: 'tenets', label: 'Tenets' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow z-50 px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">KIRANIA</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">☰</button>
      </div>
      <ul className="hidden md:flex space-x-6">
        {links.map(link => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="hover:underline">{link.label}</a>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme} className="ml-4 text-sm border px-2 py-1 rounded">
        {isDark ? 'Light' : 'Dark'}
      </button>
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-pink-100 dark:bg-gray-900 md:hidden px-4 py-2 space-y-2">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-1 border-b border-gray-300 dark:border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
