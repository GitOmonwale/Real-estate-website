// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Search, Home, CheckCircle, Filter } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Dream Home - Find Your Dream House</title>
        <meta name="description" content="Property portal to find your dream home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navbar */}
      <header className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl mr-6">RumahImpian.com</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-green-200">Home</a>
              <a href="#" className="text-white hover:text-green-200">Properties</a>
              <a href="#" className="text-white hover:text-green-200">About Us</a>
              <a href="#" className="text-white hover:text-green-200">Contact</a>
            </nav>
          </div>
          <div>
            <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium">Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/images/modern-house.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your<br />Dream Home</h1>
          <p className="text-white text-lg mb-8 max-w-xl">Discover your dream home easily and quickly through our comprehensive services.</p>
          
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl">
            <div className="flex items-center">
              <Search className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search by location, type, or price..."
                className="flex-grow p-2 outline-none"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-md ml-4">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Properties</h3>
              <p className="text-gray-600">The most comprehensive property selection from various regions in Indonesia.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Verification</h3>
              <p className="text-gray-600">All properties have been verified to ensure authenticity and quality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
              <p className="text-gray-600">Advanced search features to find properties according to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Find Your Dream Home</h2>
          <div className="flex items-center justify-center mb-16">
            <div className="relative h-80 w-full max-w-4xl bg-green-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: "url('/images/interior-living.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.7
              }}></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Modern Interior Design</h3>
                  <p className="text-lg mb-6">Find homes with interior designs that match your lifestyle</p>
                  <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Homes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Recommended Homes For You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 relative">
                  {/* Property Image Placeholder */}
                  <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: `url('/images/house-${item}.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Modern Home Type {36 + item * 10}</h3>
                  <p className="text-gray-600 mb-2">South Jakarta</p>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-green-600">${(50 + item * 10).toFixed(0)}k</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">{2 + (item % 3)} BR</span>•
                      <span className="mx-2">{1 + (item % 2)} Bath</span>•
                      <span className="ml-2">{60 + (item * 20)} m²</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium">View All Properties</button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Filter Homes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {["House Type", "Location", "Price", "Features"].map((filter, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{filter}</span>
                  <button className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Bedrooms", "Garden", "Swimming Pool", "Garage"].map((feature, index) => (
              <div key={index} className="bg-cover bg-center h-48 rounded-lg relative" style={{
                backgroundImage: `url('/images/feature-${index + 1}.jpg')`
              }}>
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Need help finding<br />your home?</h2>
              <p className="text-gray-300 max-w-xl">Our expert team is ready to help you find the dream home that fits your needs and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 className="text-gray-800 font-bold text-xl mb-4">Send a question?</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <button className="w-full bg-green-600 text-white p-3 rounded-md font-medium">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">RumahImpian.com</h3>
              <p className="text-gray-400 mb-4">The best property portal to find your dream home in Indonesia.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.015-.628.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sell Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Rent Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">New Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Consultation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mortgage</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>123 Ahmad Yani St., South Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span>
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>info@dreamhome.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 RumahImpian.com. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}