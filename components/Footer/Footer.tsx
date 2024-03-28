import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-5">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
        <h3 className="text-lg font-bold mb-4">Help</h3>
        <ul>
          <li>Customer Service</li>
          <li>Track Order</li>
          <li>Returns & Exchanges</li>
          <li>Shipping</li>
          <li>International Orders</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul>
          <li>Size Charts</li>
          <li>Offers & Promotions</li>
          <li>My Favorites</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-4 sm:mb-0 text-right">
        <h3 className="text-lg font-bold mb-4">About J.Crew</h3>
        <ul>
          <li>Our Story</li>
          <li>Careers</li>
          <li>Social Responsibility</li>
          <li>California Transparency Act/Modern Slavery Act</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Responsible Disclosure Policy</li>
          <li>California Do Not Sell My Personal Information</li>
          <li>Diversity, Equity and Inclusion at J.Crew Group</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer