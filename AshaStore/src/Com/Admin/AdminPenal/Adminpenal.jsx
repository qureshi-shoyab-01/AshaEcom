import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'

const Adminpenal = () => {
  return (
    <>
    <div className="Admin-Header">
    <div className="container mx-auto flex justify-between items-center py-4">
                <div>
                  <a href="#" className="text-xl font-bold">
                  ASHA BARTHAN STORE
                  </a>
                </div>
                <nav>
                  <ul className="flex space-x-4">
                  <li> <Link to='/Product'>Product</Link> </li>
                  <li> <Link to='/AddProduct'>Add-Product</Link> </li>
                  <li> <Link to='/UpdateProduct'>Update-Product</Link> </li>
                  <li> <Link to='/Users'>User-Profile</Link> </li>
                  </ul>
                </nav>
                <div>
                  <a href="#" className="text-secondary">
                    <img src="https://placehold.co/30?text=🛒" alt="cart" className="mr-2" />
                    Cart
                  </a>
                </div>
              </div>
    </div>
    </>
  )
}

export default Adminpenal