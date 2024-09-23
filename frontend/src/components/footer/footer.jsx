import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Company Info */}
        <div className="text-sm">
          <p className="font-semibold">Your Company Name</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-twitter-icon.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path-to-linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
