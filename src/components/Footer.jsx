import React from 'react'
import {FaGithubSquare , FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import '../styles/Footer.css'
export default function Footer() {
  return (
    < >
        <div className="footer" >
            <p>©  {new Date().getFullYear()}  Guna</p>
        
            <div className="footer_links">

                <a href="https://github.com/Guna-7" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare  size={24} />
                </a>                

                <a href="https://www.linkedin.com/in/guna-d-8070a4279" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size ={24}/>
                </a>

                <a href="mailto:dgunadhana@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope  size={22} />
                </a>
        
            </div>

        </div>
    </>
  )
}
