import React from 'react'
import Logos from "../assets/logo/logo.png"

function Footer() {
  return (
    <>
    <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img src={Logos} alt="" />
    <p>Premium Lychee.<br/>"Harvesting Nature's Sweetness: Your Trusted Source for Organic Lychee Goodness"</p>
  </aside> 
  <nav>
    <header className="footer-title">Product</header> 
    <a className="link link-hover">Lychee</a> 
    <a className="link link-hover">Mango</a> 
    <a className="link link-hover">Rice</a> 
   
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Review</a> 
    
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </>
  )
}

export default Footer