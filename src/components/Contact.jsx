import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Dynamic API base: localhost in dev, same domain in production
  const API_BASE = import.meta.env.DEV ? "http://localhost:8080" : "";

  // Scroll reveal effect
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on page load
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE}/contact`, {
        email,
        message
      });

      alert("Mail sent successfully ✅");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Error Occurred ❌");
      console.error(err);
    }
  };

  return (
    <>
      <div className="contact-details reveal">
        <p><strong>Email:</strong> dgunadhana@gmail.com</p>
        <p><strong>Phone:</strong> +91 7358808840</p>
        <p><strong>Location:</strong> Hosur, Tamil Nadu</p>
      </div>

      <section className="contact-section reveal">
        <h2>Contact me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
