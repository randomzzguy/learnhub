export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1B1F3B] text-white">
      <h1 className="text-xl font-bold">LearnHub</h1>
      <ul className="flex gap-6">
        <li><a href="#features" className="hover:text-gray-300">Features</a></li>
        <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
      </ul>
    </nav>
  )
}
