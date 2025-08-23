export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-primary-hover text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast, Reliable Parcel Delivery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Your trusted partner for secure and timely deliveries across the
              country
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg">
                Book a Pickup
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold text-lg">
                Track Your Parcel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your parcel delivered
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Book</h3>
              <p className="text-gray-600">
                Schedule a pickup online or through our app
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assign</h3>
              <p className="text-gray-600">
                We assign the best agent for your delivery
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deliver</h3>
              <p className="text-gray-600">
                Track in real-time until safe delivery
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20,000+</div>
              <div className="text-white">Parcels Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white">Active Agents</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose FastParcel?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track your parcel every step of the way
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Cash on Delivery</h3>
              <p className="text-gray-600 text-sm">
                Pay when you receive your package
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600">🔔</span>
              </div>
              <h3 className="font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-600 text-sm">
                Get updates via SMS and email
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">Optimized Routes</h3>
              <p className="text-gray-600 text-sm">
                Fastest delivery with smart routing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Shipping Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold text-lg">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
