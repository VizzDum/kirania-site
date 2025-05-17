import Navbar from './components/Navbar'
import Home from './components/Home'
import Tenets from './components/Tenets'
import History from './components/History'
import Symbols from './components/Symbols'
import Holidays from './components/Holidays'
import Prayers from './components/Prayers'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-pink-100 min-h-screen text-gray-900">
      <Navbar />
      <Home />
      <Tenets />
      <History />
      <Symbols />
      <Holidays />
      <Prayers />
      <Contact />
    </div>
  );
}
