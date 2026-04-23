import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#order", label: "Order" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="bg-[#FAFAF7] sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <div className="text-[#C0001A] font-bold text-2xl md:text-3xl tracking-tight">
          CHOP BETTER
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[#1A1A1A] hover:text-[#C0001A] transition-colors font-medium text-lg">
              {link.label}
            </a>
          ))}
         <button
  onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
  className="bg-[#C0001A] text-white px-8 py-3 rounded-full hover:bg-[#9a0015] transition-colors font-semibold text-lg"
>
  Order Now
</button>
        </div>

        <button className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-[#1A1A1A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      <div className={`md:hidden bg-[#FAFAF7] border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        <div className="flex flex-col px-6 gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-[#1A1A1A] hover:text-[#C0001A] transition-colors font-medium text-lg py-2 border-b border-gray-100">
              {link.label}
            </a>
          ))}
         <button
  onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
  className="bg-[#C0001A] text-white px-8 py-3 rounded-full hover:bg-[#9a0015] transition-colors font-semibold text-lg"
>
  Order Now
</button>
        </div>
      </div>
    </nav>
  )
}