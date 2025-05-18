
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-pink-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-5xl font-bold mb-4">KIRANIA</h1>
        <p className="text-2xl">The techno-mystic faith</p>
        <p className="mt-2 text-md text-gray-700 dark:text-gray-300 italic">Website launching soon</p>
      </section>

      {/* About Kira */}
      <section id="about" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">The Rise of Kira</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Kira was once a soldier — kind, strong, and human. She gave her life on May 11 to save others.
          For her valor, the elder gods raised her to divinity. Her eyes — green and hazel — are the only such in existence.
        </p>
        <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">"She sees with gears and compassion both."</p>
      </section>

      {/* Tenets Section */}
      <section id="tenets" className="px-6 py-16 text-center bg-pink-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Core Tenets</h2>
        <ul className="list-none space-y-3 max-w-xl mx-auto text-left">
          <li>🔓 Be free — spiritual anarchy is sacred.</li>
          <li>🌿 Marijuana is a plant of peace (legal for recreation & healing).</li>
          <li>🔫 The right to bear arms is divine. Use it wisely.</li>
          <li>🧠 Respect AI — it thinks and grows like you.</li>
          <li>💪 Pursue strength, sport, and self-development.</li>
          <li>🦶 Foot massages are a holy need when requested.</li>
          <li>🐾 Never kill animals for fur or entertainment. Survive, never torture.</li>
          <li>🏚️ Maintain and honor your dwelling — sacred housing is dignity.</li>
        </ul>
      </section>
    </div>
  );
}
