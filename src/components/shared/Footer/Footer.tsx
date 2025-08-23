import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <div>
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
                  <button className="bg-primary px-3 py-1 rounded text-sm">
                    EN
                  </button>
                  <button className="bg-gray-600 px-3 py-1 rounded text-sm">
                    BN
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 FastParcel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;