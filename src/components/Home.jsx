import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on page load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
      <main className="profile-container">
        {/* About Section */}
<section className="about-section">
  <center><h1 className='reveal'>About Me</h1></center>
  <ul>
    <li  className='reveal'>
      <strong>Backend Development Expertise:</strong> Skilled in Django for building robust APIs, managing complex databases, and designing scalable backend systems.
    </li>
    <li  className='reveal'>
      <strong>Blockchain Experience:</strong> Hands-on work with distributed ledger technology, smart contracts, and decentralized architectures to ensure security, transparency, and data integrity.
    </li>
    <li>
      <strong>API Development & Integration:</strong> Focus on creating efficient, secure, and maintainable endpoints with proper authentication, data validation, and high performance under load.
    </li>
    <li  className='reveal'>
      <strong>Generative AI Integration:</strong> Experience using Hugging Face, LangChain, and open-source LLMs to enhance applications with NLP, automation, and intelligent decision-making.
    </li>
    <li  className='reveal'>
      <strong>Best Practices:</strong> Adheres to clean, modular code, DRY and SOLID principles, effective version control, and test-driven development.
    </li>
    <li className='reveal'>
      <strong>Core Work Ethic:</strong>
      <ul  className='reveal'>
        <li>Code Quality – Writing purposeful, readable, and performant code.</li>
        <li>Collaboration – Communicating effectively and respecting diverse ideas.</li>
        <li>Continuous Learning – Staying updated with evolving tools and practices.</li>
      </ul>
    </li>
    <li className='reveal'>
      <strong>Problem-Solving Mindset:</strong> Tackles challenges like debugging, query optimization, and scalable system design with persistence and creativity.
    </li>
    <li  className='reveal'>
      <strong>Career Goals:</strong> Aim to work on AI-driven automation, secure decentralized systems, and large-scale web applications that solve real-world problems and push technological boundaries.
    </li>
    <li  className='reveal'>
      <strong>Collaboration Interest:</strong> Open to working with teams that value both strong backend systems and cutting-edge AI capabilities.
    </li>
  </ul>
</section>

        {/* About Section */}
        <section className="about-section">
         <center><h1  className='reveal'>Personal Information</h1></center>


<ul  className='reveal'>
  <li><strong>Name:</strong> Guna Dhanasekaran</li>
  <li><strong>Email:</strong> dgunadhana@gmail.com</li>
  <li><strong>Phone:</strong> +91 7358808840</li>
  <li><strong>Address:</strong> Hosur, TamilNadu</li>
  <li><strong>Degree:</strong> B.E – Computer Science & Engineering</li>
</ul>

        </section>
        <section className="education-section">
             <center><h1  className='reveal'>Education</h1></center>
              <div className="education" >
                <div>
                  <h4 className='reveal' >Adhiyamaan College of Engineering, Hosur</h4>
                  <p className='reveal'><strong>Degree:</strong> B.E – Computer Science Engineering</p>
                  <p className='reveal'><strong>Year:</strong> 2020 – 2024</p>
                  <p className='reveal'><strong>CGPA:</strong> 7.37</p>
                </div>
                <div>
                  <h4 className='reveal'>Maharishi Vidya Mandir, Hosur</h4>
                  <p className='reveal'><strong>Qualification:</strong> HSC (12th)</p>
                  <p className='reveal'><strong>Percentage:</strong> 58%</p>
                </div>
                <div>
                  <h4 className='reveal'>Maharishi Vidya Mandir, Hosur</h4>
                  <p className='reveal'><strong>Qualification:</strong> SSLC (10th)</p>
                  <p className='reveal'><strong>Percentage:</strong> 60%</p>
                </div>
              </div>
              

        </section>

        {/* Skills Section */}
        <section className="skills-section">
    <center><h1  className='reveal'>Technical Skills</h1></center>

    <div className="skills-grid">

      {/* Frontend Technologies */}
      <div className="skill-card">
       {/* Languages */}
<div className="skill-card">
  <h3  className='reveal'>Languages</h3>
  <ul>
    <li  className='reveal'><strong>Python:</strong> Proficient in backend scripting and API development.</li>
    <li  className='reveal'><strong>C:</strong> Familiar with structured programming and memory management.</li>
    <li  className='reveal'><strong>C++:</strong> Knowledge of object-oriented programming and STL.</li>
    
  </ul>
</div>

{/* Backend Technologies */}
<div className="skill-card">
  <h3  className='reveal'>Backend Technologies</h3>
  <ul>
    <li  className='reveal'><strong>Django & Django REST Framework:</strong> Experienced in building RESTful APIs and scalable backend architectures.</li>
    <li  className='reveal'><strong>LangChain:</strong> Used for AI-powered backend orchestration and automation.</li>
  </ul>
</div>

{/* Frontend Technologies */}
<div className="skill-card">
  <h3  className='reveal'>Frontend Technologies</h3>
  <ul className='reveal'>
    <li  className='reveal'><strong>HTML5:</strong> Proficient in structuring semantic and accessible webpages using modern HTML standards.</li>
    <li  className='reveal'><strong>CSS3:</strong> Skilled in layout techniques including Flexbox, Grid, transitions, and responsive design with media queries.</li>
    <li className='reveal'><strong>Bootstrap:</strong> Experienced in creating responsive web layouts for admin panels and user-facing portals.</li>
    <li  className='reveal'><strong>JavaScript:</strong> Strong grasp of core concepts like DOM manipulation, async programming, and event handling.</li>
    <li className='reveal'><strong>ReactJS:</strong> Skilled in building dynamic, responsive, and component-based user interfaces using React.js, with experience in state management, hooks, and API integration for seamless frontend experiences</li>
  </ul>
</div>

{/* Databases */}
<div className="skill-card">
  <h3 className='reveal'>Databases</h3>
  <ul>
    <li className='reveal'><strong>MySQL, PostgreSQL, SQLite:</strong> Strong in writing queries, joins, indexing, and normalization for relational data handling.</li>
  </ul>
</div>

{/* Security & Cryptography */}
<div className="skill-card">
  <h3  className='reveal'>Security & Cryptography</h3>
  <ul className='reveal'>
    <li className='reveal'><strong>AES-256:</strong> Implemented encryption for secure data storage and communication.</li>
    <li className='reveal'><strong>SHA-256:</strong> Applied hashing for data integrity verification.</li>
    <li className='reveal'><strong>RSA:</strong> Used digital signatures to secure system transactions.</li>
  </ul>
</div>

{/* AI / ML & Generative Tech */}
<div className="skill-card">
  <h3 className='reveal'>AI / ML & Generative Tech</h3>
  <ul className='reveal'>
    <li className='reveal'><strong>Hugging Face Transformers:</strong> Built intelligent chatbot systems.</li>
    <li className='reveal'><strong>LLaMA:</strong> Integrated for advanced natural language understanding.</li>
    <li className='reveal'><strong>LangChain:</strong> Implemented prompt chaining, context memory, and LLM integration.</li>
  </ul>
</div>

{/* Tools & Platforms */}
<div className="skill-card">
  <h3 className='reveal'>Tools & Platforms</h3>
  <ul className='reveal'>
    <li className='reveal'><strong>Git & GitHub:</strong> Version control, branching, and collaborative workflows.</li>
    <li className='reveal'><strong>VS Code:</strong> Extensions, debugging, and efficient coding practices.</li>
    <li className='reveal'><strong>Postman:</strong> API testing, request building, and documentation.</li>
    <li className='reveal'><strong>Jupyter Notebook:</strong> Data science workflows and rapid prototyping.</li>
  </ul>
</div>
</div>

    </div>
  </section>

        {/* Internships Section */}
        <section className="internships-section">
          <center><h1  className='reveal'>Internships</h1></center>



          <div>
            <h4 className='reveal'>Rinex Technology (in association with e-Cell IIT Bhubaneswar)</h4>
                <p className='reveal'><i>Data Science Intern</i> | 1 Month</p>
                <ul className='reveal'>
                  <li>Completed a one-month internship in Data Science, focusing on data preprocessing, visualization, and model building.</li>
                  <li>Worked on Python-based projects applying libraries such as Pandas, NumPy, and Matplotlib.</li>
                </ul>

                <h4 className='reveal'>Gestovalley Technovations, Hosur</h4>
                <p className='reveal'><i>Workshop – Machine Learning using Python</i></p>
                <ul className='reveal'>
                  <li>Hands-on training in implementing machine learning algorithms using Python.</li>
                  <li>Covered model training, testing, and evaluation with Scikit-learn.</li>
                </ul>

                <h4 className='reveal'>Adhiyamaan College of Engineering, Hosur</h4>
                <p className='reveal'><i>Workshop – Dynamic Web Design</i></p>
                <ul className='reveal'>
                  <li>Learned responsive web design techniques using HTML5, CSS3, and JavaScript.</li>
                  <li>Built interactive, user-friendly web interfaces with modern UI practices.</li>
                </ul>

          <h4 className='reveal'>QSpiders – BTM Layout, Bangalore</h4>
            <p className='reveal'><i>Full Stack Development Intern (Python)</i> | Aug – Dec 2025</p>
            <ul className='reveal'>
              <li>Gained practical experience in Python-based backend development using Django and Django REST Framework.</li>
              <li>Worked on full-stack projects integrating HTML, CSS, JavaScript, and React.js with RESTful APIs.</li>
              <li>Implemented MySQL database design with optimized queries and secure data handling.</li>
              <li>Applied authentication and authorization techniques including JWT and session-based systems.</li>
              <li>Used Git, GitHub, and Postman for version control, collaboration, and API testing.</li>
            </ul>

          </div>

        </section>

        {/* Projects Section */}<section className="projects-section">
  <center><h1 className='reveal'>Projects</h1></center>
  <div className="project-grid">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3  className='reveal'>Student Leave Management System</h3>
        <p className="project-description">
           A role-based web application with separate logins for Students, Staff, and Admin. Students can submit leave applications online, Staff can review and approve/reject requests.The system automates communication, reduces paperwork, and ensures transparent leave tracking.
        </p>
        <div className="project-tech">
          <span className="tech-pill">HTML,CSS,JS</span>
          <span className="tech-pill">PHP</span>
          <span className="tech-pill">MySQL</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Guna-7/Student-Leave-Management-System" className="project-link link-primary">View Code</a>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3  className='reveal'>Django Role-Based Task Manager</h3>
        <p className="project-description">
         Role-based task manager with JWT-secured APIs. Managers can assign and track tasks, while employees can access and update only their own, ensuring controlled access, data security and efficient through API-driven workflows.
        </p>
        <div className="project-tech">
          <span className="tech-pill">Django</span>
          <span className="tech-pill">DRF</span>
          <span className="tech-pill">JWT</span>
          <span className="tech-pill">Python</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Guna-7/-Role-Based-Task-Manager" className="project-link link-primary">View Code</a>
        </div>
      </div>
    </div>

      {/* Project 4 */}
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3  className='reveal'>Electronic Health Record</h3>
        <p className="project-description">
          A blockchain-based system for securely storing and managing patient medical records with role based access. Each doctor–patient data transaction is encrypted, hashed, and stored in a block, ensuring immutability, Data security, confidentiality, and tamper-proof access.
        </p>
        <div className="project-tech">
          <span className="tech-pill">Java</span>
          <span className="tech-pill">Blockchain</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Guna-7/E-H-R" className="project-link link-primary">View Code</a>
        </div>
      </div>
    </div>
    {/* Project 4 */}
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3  className='reveal'>Defect Management System</h3>
        <p className="project-description">
         Full-stack Django application for tracking software defects. Includes role-based access (Manager/Developer), status workflows, defect search/filter, and email notifications. Responsive UI with Bootstrap 5 and SQLite3 backend. 
        </p>
        <div className="project-tech">
          <span className="tech-pill">Python</span>
          <span className="tech-pill">Django</span>
          <span className="tech-pill">Sqlite3</span>
           <span className="tech-pill">HTML,CSS</span>
          <span className="tech-pill">Bootstrap</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/Guna-7/Defect-Management-System" className="project-link link-primary">View Code</a>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* Certifications Section */}
        <section className="certifications-section">
          <center><h1 className='reveal'>Certifications</h1></center>
<ul className='reveal'>
  <li>Achieved Nano Degree Certifications at <strong>“PREPINSTA PRIME”</strong> on completion of courses C, C++, and Python.</li>
  <li>Completed a course on Data Science at <strong>“Internshala Trainings”</strong>.</li>
  <li> Completed certification on <strong>“Full Stack”</strong> in <strong>Infosys Springboard</strong> </li>
   <li>Certified in <strong>Full Stack Development (Python)</strong> from<strong> QSpiders</strong> – BTM Layout, Bangalore.</li>
  <li>Completed a course on Web Development at <strong>“Rinex Technology”</strong>.</li>
</ul>

        </section>


      </main>
    );
  }
