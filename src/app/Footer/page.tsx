import React from 'react'

export default function Footer() {
  return (
    <div>
        
 <footer className="w-full bg-amber-50">

      <div className="bg-black rounded-3xl mx-4 sm:mx-6 lg:mx-8 xl:mx-16 -mb-px">
        <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl max-w-xl leading-tight">
              STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[320px] xl:min-w-[380px]">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white rounded-full px-12 py-3 sm:py-3.5 text-gray-600 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <button className="w-full bg-white text-black font-medium rounded-full py-3 sm:py-3.5 text-sm sm:text-base hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

 
      <div className="bg-gray-100 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h3 className="font-bold text-2xl sm:text-3xl mb-4">SHOP.CO</h3>
              <p className="text-gray-600 text-sm mb-6">
                We have clothes that suits your style and which you`re proud to wear. From women to men.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Works</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Career</a></li>
              </ul>
            </div>

      
            <div className="col-span-1">
              <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wider">Help</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Delivery Details</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

       
            <div className="col-span-1">
              <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wider">FAQ</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Account</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Manage Deliveries</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Orders</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Payments</a></li>
              </ul>
            </div>

       
            <div className="col-span-1">
              <h4 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Free eBooks</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Development Tutorial</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">How to - Blog</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>


          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className="flex gap-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 w-auto" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}
