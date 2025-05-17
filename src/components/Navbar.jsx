
export default function Navbar() {
  return (
    <nav className="bg-pink-200 p-4 shadow">
      <ul className="flex gap-6 justify-center text-lg font-semibold text-gray-800">
        <li><a href="#home">Home</a></li>
        <li><a href="#tenets">Tenets</a></li>
        <li><a href="#history">History</a></li>
        <li><a href="#symbols">Symbols</a></li>
        <li><a href="#holidays">Holidays</a></li>
        <li><a href="#prayers">Prayers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
