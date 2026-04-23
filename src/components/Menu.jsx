import { useEffect, useRef } from "react";

const menuItems = [
  {
    id: "jollof",
    name: "Party Jollof Rice",
    description: "Smoky jollof rice cooked with premium spices, served with fried plantain and coleslaw",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1687020835955-59528e8c91dd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "suya",
    name: "Suya Platter",
    description: "Spicy grilled beef skewers in authentic yaji spice blend, served with fresh onions and tomatoes",
    price: "₦3,000",
    image: "https://images.unsplash.com/photo-1733860539792-f42d3835e004?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "friedrice",
    name: "Fried Rice Special",
    description: "Colorful fried rice loaded with vegetables, chicken, and shrimp. Perfectly seasoned",
    price: "₦2,800",
    image: "https://images.unsplash.com/photo-1664334997177-6ae654a62735?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "asun",
    name: "Asun Combo",
    description: "Spicy grilled goat meat with peppers and onions, served with rice or yam",
    price: "₦3,500",
    image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "peppersoup",
    name: "Pepper Soup",
    description: "Hot and spicy Nigerian pepper soup with assorted meat, perfect for any weather",
    price: "₦2,200",
    image: "https://images.unsplash.com/photo-1708782340377-882559d544fb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "puffpuff",
    name: "Puff Puff",
    description: "Freshly fried fluffy Lagos street snacks, golden and soft on the inside. A classic!",
    price: "₦800",
    image: "https://images.unsplash.com/photo-1664993085274-80c6ba725ccc?q=80&w=600&auto=format&fit=crop",
  },
];
export default function Menu({ addToOrder }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    let animationId;

    const step = () => {
      if (!scroll) return;
      scroll.scrollLeft += 1;
      if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
        scroll.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    scroll.addEventListener("mouseenter", () =>
      cancelAnimationFrame(animationId),
    );
    scroll.addEventListener("mouseleave", () => {
      animationId = requestAnimationFrame(step);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="menu" className="bg-[#FAFAF7] py-16">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#1A1A1A] mb-4">
            Our <span className="text-[#C0001A]">Featured</span> Dishes
          </h2>
          <p className="text-xl text-gray-700">
            Handpicked favorites that keep our customers coming back for more
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6 cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {[...menuItems, ...menuItems].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#C0001A]">
                  {item.price}
                </span>
                <button
                  onClick={() => addToOrder(item.id)}
                  className="bg-[#F5A623] text-white px-4 py-2 rounded-full hover:bg-[#e09515] transition-colors font-semibold text-sm"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
