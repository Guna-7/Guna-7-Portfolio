import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithubSquare, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpeg";

export default function Profile() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/home"); 
     window.scrollTo({ top: 0, behavior: "smooth" }); // Navigates to Home.jsx
  };

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
    revealOnScroll(); // trigger on page load
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <main
      className="landing-container"
      style={{ textAlign: "center", padding: "2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Profile"
        className="reveal"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #14141493",
          boxShadow: "0px 4px 12px rgba(240, 140, 255, 1)",
          marginBottom: "1.5rem",
        }}
      />

      {/* Name & Basic Info */}
      <h1 className="reveal" style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}>
        Guna Dhanasekaran
      </h1>
      <p className="reveal" style={{ fontSize: "1.15rem", marginBottom: "0.3rem", fontWeight: "500", color: "black" }}>
        Full-Stack Developer
      </p>
      <p
        className="reveal"
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: "1.6",
          color: "#1d1d1dff",
        }}
      >
        Backend-focused developer with real-world project experience in Django and
        Blockchain-based systems. Skilled in API development, secure architecture,
        and integrating Generative AI workflows. Known for building solutions with
        high code quality, collaboration, and innovation.
      </p>

      {/* Explore Me Button */}
      <button
        className="reveal"
        onClick={handleExploreClick}
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.6rem",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "25px",
          background: "linear-gradient(90deg, #070707ff, #514178ff)",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.1s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Explore Me
      </button>

      {/* Social Icons */}
      <div className="reveal" style={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
        <a
          href="https://github.com/Guna-7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 12px", color: "#000" }}
        >
          <FaGithubSquare size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/guna-d-8070a4279"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 12px", color: "#0e76a8" }}
        >
          <FaLinkedinIn size={28} />
        </a>
        <a
          href="mailto:dgunadhana@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 12px", color: "#d44638" }}
        >
          <FaEnvelope size={28} />
        </a>
        <p style={{ fontSize: "1rem", marginBottom: "0.3rem", color: "#000000ff", marginTop: "0.5rem" }}>
          📞 +91 7358808840 &nbsp; | &nbsp; ✉{" "}
          <a href="mailto:dgunadhana@gmail.com" style={{ color: "#000000ff", textDecoration: "none" }}>
            dgunadhana@gmail.com
          </a>{" "}
          &nbsp; | &nbsp; 📍 Hosur, Tamil Nadu
        </p>
      </div>
    </main>
  );
}
