
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'tenets', label: 'Tenets' },
    { id: 'history', label: 'History' },
    { id: 'symbols', label: 'Symbols' },
    { id: 'holidays', label: 'Holidays' },
    { id: 'prayers', label: 'Prayers' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-pink-200 p-4 shadow fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Kirania</h1>
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>
      <ul
        className={\`\${isOpen ? 'block' : 'hidden'} md:flex gap-6 justify-center text-lg font-semibold text-gray-800 mt-2 md:mt-0\`}
      >
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={\`#\${id}\`}
              className="block py-1 hover:text-pink-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
