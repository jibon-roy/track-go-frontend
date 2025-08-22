import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                FastParcel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/track"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Track Parcel
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About FastParcel</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Revolutionizing parcel delivery with technology, reliability, and exceptional customer service
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, FastParcel emerged from a simple vision: to make parcel delivery fast, reliable, and
                accessible to everyone. What started as a small team of logistics enthusiasts has grown into a
                nationwide network serving thousands of customers daily.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We recognized the challenges in traditional delivery services - delayed packages, poor tracking, and
                unreliable communication. Our mission became clear: leverage technology to create a seamless delivery
                experience that customers can trust.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be one of the fastest-growing delivery services in the country, with a network of
                over 100 dedicated agents and partnerships with leading businesses.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img
                src="/placeholder-isp12.png"
                alt="FastParcel warehouse and delivery fleet"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide fast, reliable, and affordable parcel delivery services that connect people and businesses
                across the country. We strive to exceed customer expectations through innovative technology and
                exceptional service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become the most trusted and preferred delivery partner in the region, setting new standards for
                speed, reliability, and customer satisfaction in the logistics industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speed</h3>
              <p className="text-gray-600">
                We understand that time matters. Our optimized routes and efficient processes ensure your parcels reach
                their destination as quickly as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Trust is earned through consistent performance. We're committed to delivering on our promises, every
                single time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in technology and processes to improve our services and create better experiences
                for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The people behind FastParcel's success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="/professional-ceo-headshot.png"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Ahmed</h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                10+ years in logistics and supply chain management. Passionate about using technology to solve
                real-world problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="/cto-headshot.png"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Khan</h3>
              <p className="text-blue-600 font-medium mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Former software engineer at leading tech companies. Leads our technology initiatives and platform
                development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <img
                src="/operations-manager-headshot.png"
                alt="Operations Manager"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fatima Rahman</h3>
              <p className="text-blue-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Ensures smooth daily operations and maintains our high service standards across all delivery centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience FastParcel?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FastParcel</h3>
              <p className="text-gray-300">Your trusted delivery partner</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Same Day Delivery</li>
                <li>Express Shipping</li>
                <li>COD Service</li>
                <li>Bulk Orders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>Careers</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Language</h4>
              <div className="flex space-x-2">
                <button className="bg-blue-600 px-3 py-1 rounded text-sm">EN</button>
                <button className="bg-gray-600 px-3 py-1 rounded text-sm">BN</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 FastParcel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
