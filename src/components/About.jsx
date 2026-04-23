export default function About() {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8TmlnZXJpYW4lMjBzdHJlZXQlMjBmb29kJTIwam9sbG9mJTIwcmljZSUyMHN1eWElMjBmcmllZCUyMHJpY2V8ZW58MXx8fHwxNzc2NDY1MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our food preparation"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-6">
              Your Favorite <span className="text-[#C0001A]">Lagos</span> Flavor
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Born in the heart of Lagos, Chop Better brings you the authentic taste of Nigerian street food with a modern twist. We believe good food brings people together, and that's why we're committed to serving meals that remind you of home.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From our signature jollof rice to mouth-watering suya, every dish is prepared fresh daily using traditional recipes passed down through generations. We source our ingredients locally and cook with the same passion our grandmothers did.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're craving a quick lunch or planning a party, Chop Better has got you covered. Let's make your next meal unforgettable!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}