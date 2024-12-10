import React, { useState } from 'react'

const Hamburger: React.FC  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu =()=>{
        setIsOpen((prev) => !prev);
    }
  return (
    <div>
        <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className={`hamburger ${isOpen ? "open" : ""}`}
            >
                <span className={`line ${isOpen ? "open" : ""}`}></span>
                <span className={`line ${isOpen ? "open" : ""}`}></span>
                <span className={`line ${isOpen ? "open" : ""}`}></span>

            </button>
            <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
                    <a href="/" className="nav-link">
                    Product
                    </a>
                    <a href="/services" className="nav-link">
                    Resources
                    </a>
                    <a href="/our-work" className="nav-link">
                    Developers
                    </a>
                    <a href="/careers" className="nav-link">
                    Pricing
                    </a>
                    <a href="/careers" className="nav-link">
                    Cloud
                    </a>
      </nav>
    </div>
  )
}

export default Hamburger
