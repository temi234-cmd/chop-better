export default function Testimonials() {
  const testimonials = [
    {
      name: "Chioma Adeleke",
      review: "The jollof rice here is exactly like my mama's! I order from Chop Better every weekend. The delivery is fast and the food is always hot. Best naija food in Lagos!",
      rating: 5,
      location: "Lekki, Lagos"
    },
    {
      name: "Tunde Okafor",
      review: "I've tried many suya spots around Lagos, but Chop Better's suya is on another level. The spice blend is perfect and the meat is always tender. Highly recommend!",
      rating: 5,
      location: "Victoria Island"
    },
    {
      name: "Amara Johnson",
      review: "Ordered for my birthday party last month and all my guests were asking where the food came from. The portions are generous and the taste is authentic. Will definitely order again!",
      rating: 5,
      location: "Ikeja"
    }
  ];

  return (
    <section className="bg-[#FAFAF7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1A1A1A] mb-4">
            What Our <span className="text-[#C0001A]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-700">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#1A1A1A] text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
