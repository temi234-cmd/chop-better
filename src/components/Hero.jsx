import { useState, useEffect } from "react";
import { FiClock } from "react-icons/fi";
const images = [
  {
    src: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?q=80&w=870&auto=format&fit=crop",
    alt: "Nigerian Jollof Rice",
  },
  {
    src: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=2070&auto=format&fit=crop",
    alt: "Grilled Suya Meat",
  },
  {
    src: "https://images.unsplash.com/photo-1664993085274-80c6ba725ccc?q=80&w=465&auto=format&fit=crop",
    alt: "Puff Puff",
  },
  {
    src: "https://images.unsplash.com/photo-1708782340377-882559d544fb?q=80&w=580&auto=format&fit=crop",
    alt: "Pepper Soup",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAFAF7] pt-8 pb-0 md:pt-12 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Taste the Best of <span className="text-[#C0001A]">Lagos</span>{" "}
              Street Food
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Authentic Nigerian flavors delivered straight to your doorstep.
              Fresh, spicy, and made with love.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/2349163208899"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1ebd57] transition-colors"
              >
                Order on WhatsApp
              </a>
             <button
  onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
  className="bg-[#C0001A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#9a0015] transition-colors"
>
  Place an Order
</button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-30 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4 bg-[#F5A623] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <FiClock size={14} />
              <span className="text-xs font-semibold">Ready in</span>
              <span className="text-sm font-bold">30 mins</span>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-30 ${
                    index === current ? "bg-[#C0001A] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
