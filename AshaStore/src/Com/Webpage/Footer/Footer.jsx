import React from 'react'
import './Footer.css'
import Button from '@mui/material/Button';
const Footer = () => {
  return (
    <div>
       <footer className="bg-[#f2bb53] text-black-500">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">    <img className="logo" src="img/logo.jpeg" alt="E-commerce Logo" /></h3>
            <p className="text-sm">
            ASHA BARTHAN STORE
            <br/>Building No./Flat No.: Ward No 4
            <br/> Road/Street: Jahota Road 
            <br/> City/Town/Village: Rampura ,  Jaipur  Rajasthan (303704)


            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Contact Us</a></li>
              <li>Email :- <a href="mailto:ashabarthanstore@gmail.com">ashabarthanstore@gmail.com</a></li>
              <li>Phone :- <a href="tel:+919680087623">+91-9680087623</a><br/>
                  Mob-No :- <a href="tel:+919982121540">+91-9982121540</a>  

              </li>
              <li><a href="#" className="text-sm hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Home</a></li>
              <li><a href="#" className="text-sm hover:text-white">Products</a></li>
              <li><a href="#" className="text-sm hover:text-white">About</a></li>
              <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="space-y-2">
              <input type="email" placeholder="Your email" className=" w-full p-2 bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-gray-800  text-white">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 ASHA BARTHAN STORE. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-900 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-900 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-900 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
