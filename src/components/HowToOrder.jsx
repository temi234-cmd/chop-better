export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Choose your meal",
      description: "Browse our menu and select your favorite dishes",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Place your order",
      description: "Fill out the order form or chat with us on WhatsApp",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Get it delivered",
      description: "Sit back and relax while we deliver hot food to your door",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1A1A1A] mb-4">
            How to <span className="text-[#C0001A]">Order</span>
          </h2>
          <p className="text-xl text-gray-700">
            Getting your favorite meal is as easy as 1-2-3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#C0001A] text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="text-[#F5A623] text-6xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
