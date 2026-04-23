import { useState } from "react";

const menuItems = [
  { id: "jollof", name: "Party Jollof Rice", price: 2500, color: "#C0001A" },
  { id: "suya", name: "Suya Platter", price: 3000, color: "#F5A623" },
  {
    id: "friedrice",
    name: "Fried Rice Special",
    price: 2800,
    color: "#C0001A",
  },
  { id: "asun", name: "Asun Combo", price: 3500, color: "#F5A623" },
  { id: "peppersoup", name: "Pepper Soup", price: 2200, color: "#C0001A" },
  { id: "puffpuff", name: "Puff Puff", price: 800, color: "#F5A623" },
];

export default function OrderForm({
  quantities,
  setQuantities,
  resetQuantities,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const increase = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));

  const decrease = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const selectedItems = menuItems.filter((item) => quantities[item.id] > 0);

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0,
  );

  const hasOrder = selectedItems.length > 0;

  const handleSubmit = () => {
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in your name, phone, and address.");
      return;
    }
    if (!hasOrder) {
      alert("Please select at least one dish.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="order" className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Order <span className="text-[#C0001A]">Received!</span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Thank you, {formData.fullName}!
          </p>
          <p className="text-gray-500 mb-8">
            We'll call you on {formData.phone} to confirm your order shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              resetQuantities();
              setFormData({ fullName: "", phone: "", address: "" });
            }}
            className="bg-[#F5A623] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e09515] transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1A1A1A] mb-4">
            Place Your <span className="text-[#C0001A]">Order</span>
          </h2>
          <p className="text-xl text-gray-700">
            Pick your dishes, fill your details, and we handle the rest
          </p>
        </div>

        <div className="bg-[#FAFAF7] rounded-3xl p-8 shadow-xl space-y-10">
          {/* Step 1 - Pick Dishes */}
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
              Step 1 — Pick Your Dishes
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Use + and − to select how many of each you want
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuItems.map((item) => {
                const qty = quantities[item.id];
                const isSelected = qty > 0;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl p-4 border-2 transition-all ${
                      isSelected
                        ? "border-[#C0001A] bg-white shadow-md"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <div>
                          <p className="font-bold text-[#1A1A1A] text-sm leading-tight">
                            {item.name}
                          </p>
                          <p className="text-[#C0001A] font-semibold text-sm">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-lg flex items-center justify-center transition-colors"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-bold text-[#1A1A1A]">
                        {qty}
                      </span>
                      <button
                        onClick={() => increase(item.id)}
                        className="w-8 h-8 rounded-full bg-[#C0001A] hover:bg-[#9a0015] text-white font-bold text-lg flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          {hasOrder && (
            <div className="bg-white rounded-2xl border-2 border-[#F5A623] p-5">
              <h3 className="font-bold text-[#1A1A1A] mb-3">
                🧾 Order Summary
              </h3>
              <div className="space-y-2 mb-4">
                {selectedItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">
                      {item.name} × {quantities[item.id]}
                    </span>
                    <span className="font-semibold text-[#1A1A1A]">
                      ₦{(item.price * quantities[item.id]).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[#C0001A]">
                  ₦{total.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Step 2 - Your Details */}
          <div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-5">
              Step 2 — Your Details
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C0001A] focus:outline-none transition-colors bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2 text-sm">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C0001A] focus:outline-none transition-colors bg-white"
                  placeholder="080XXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-[#1A1A1A] font-semibold mb-2 text-sm">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#C0001A] focus:outline-none transition-colors bg-white"
                  placeholder="Enter your delivery address in Lagos"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
              hasOrder
                ? "bg-[#C0001A] text-white hover:bg-[#9a0015]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {hasOrder
              ? `Place Order — ₦${total.toLocaleString()}`
              : "Select at least one dish to order"}
          </button>
        </div>
      </div>
    </section>
  );
}
