// src/App.jsx
import { useState } from "react";
import "./App.css";

// 🔹 React Icons import
import { FaEnvelope, FaGithub, FaLaptopCode, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

// 🔹 Assets import

// Certificates
import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.jpg";
import cert4 from "./assets/cert4.jpg";
import cert5 from "./assets/cert5.jpg";
import cert6 from "./assets/cert6.jpg";

// Projects
import botmImg from "./assets/botma.jpg";
import botrImg from "./assets/botr.jpg";
import curlImg from "./assets/curl.jpg";
import dashImg from "./assets/d.jpg";
import ecomImg from "./assets/ecom1.jpg";
import ethImg from "./assets/eth.jpg";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const certificates = [
    { id: 1, src: cert1, name: "Certificate 1" },
    { id: 2, src: cert2, name: "Certificate 2" },
    { id: 3, src: cert3, name: "Certificate 3" },
    { id: 4, src: cert4, name: "Certificate 4" },
    { id: 5, src: cert5, name: "Certificate 5" },
    { id: 6, src: cert6, name: "Certificate 6" },
  ];

  return (
    <div className="App">
      {/* Badri Section */}
      <header className="Badri">
        <h2>PORTFOLIO</h2>
        <br></br>
        <h2>Badrinath M S</h2>
        <h3>Full Stack Developer  React.js & Python Enthusiast</h3>
        
      </header>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="card-container">
          <div className="card">React.js</div>
          <div className="card">Python</div>
          <div className="card">Data Analysis </div>
          <div className="card">HTML,CSS and JavaScript</div>
          <div className="card">GitHub</div>
          <div className="card">MS Word,Excel and Powerpoint</div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <div className="card-container">
          <div className="card">
            <img src={ethImg} alt="Ethereum Price predictor Using Python " />
            <h3>Ethereum Price predictor Using Python</h3>
            <p>Developed  a live Ethereum price tracker.</p>
            <a href="https://github.com/badrinathbadri1/eth-price-predictor" className="btn">
              Visit Project
            </a>
          </div>
          <div className="card">
            <img src={curlImg} alt="Biceps Curl Tracker" />
            <h3>Biceps Curl Motion Detector Using Python</h3>
            <p>I Built fitness tracker using computer vision by using python.</p>
            <a href="https://github.com/badrinathbadri1/biceps-curl-predictor" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={dashImg} alt="Dashboard Generator" />
            <h3>Dashboard Generator</h3>
            <p>I Developed and deployed a Dashboard Generator.</p>
            <a href="https://badrinathbadri1.github.io/dash-board-by-badri/" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={botrImg} alt="Chatbot for Reactjs" />
            <h3>Chatbot for Reactjs By Using Reactjs</h3>
            <p>I Developed and deployed a Chatbot for Reactjs by using reactjs.</p>
            <a href="https://badrinathbadri1.github.io/reactjs-chatbot-by-badri/" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={botmImg} alt="chat bot for math" />
            <h3>Chatbot for solving math queries</h3>
            <p>I Built a Chatbot for solving math queries by using python.</p>
            <a href="https://github.com/badrinathbadri1/math-chatbot-by-badri" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={ecomImg} alt="E-commerce" />
            <h3>E-commerce Website</h3>
            <p>I Developed and deployed a E-commerce Website by using HTML/CSS and JavaScript.</p>
            <a href="https://aravind-wood-decors.vercel.app" className="btn">
              Visit Project
            </a>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section">
        <h2>Certificates</h2>
        <div className="card-container">
          <div className="card">
            <h3>My Certificates</h3>
            <p>Click below to view and download my certificates.</p>
            <button className="btn" onClick={() => setOpenModal(true)}>
              View Certificates
            </button>
          </div>
        </div>
      </section>

      {/* Certificates Modal */}
      {openModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setOpenModal(false)}>
              &times;
            </span>
            <h2>My Certificates</h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="cert-item">
                <img src={cert.src} alt={cert.name} />
                <a href={cert.src} download className="download-btn">
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Internship */}
      <section className="section">
        <h2>Internship</h2>
        <div className="card-container">
          <div className="card">
            <h3>Frontend Intern</h3>
            <p>Worked on React.js components and UI improvements.</p>
          </div>
        </div>

        <br></br>
        
        <div className="card-container">
          <div className="card">
            <h3>Data Analysis Intern</h3>
            <p>I worked on Power BI tools to collect and clean data, analyze datasets, and develop visualizations.</p>
          </div>
        </div>

        
        <br></br>
        <div className="card-container">
          <div className="card">
            <h3>Fulls Stack Intern</h3>
            <p>I Worked on HTML, CSS, JavaScript, and PHP for both frontend design and backend development.” .</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <div className="card-container">
          <div className="card">
            <h3>Bachelor of Computer Science </h3>
            <p>2021 - 2025</p>
            <p>Sudharsan Engineering college, Pudukkottai.</p>
            <p>Anna University, Chennai.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <div className="card-container contact-icons">
          <a href="mailto:badrinathjuly23@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={40} /> <p>E-mail</p>
          </a>
          
          <a href="https://linkedin.com/in/badri-nath-043554270" target="_blank" rel="noreferrer">
            <FaLinkedin size={40} /><p>Linkedin</p>
          </a>
          
          <a href="tel:+919894405382" target="_blank" rel="noreferrer">
            <FaPhoneAlt size={40} /><p>Mobile</p>
          </a>
          <a href="https://github.com/badrinathbadri1" target="_blank" rel="noreferrer">
            <FaGithub size={50} /><p>Github</p>
          </a>
          <a href="https://www.sololearn.com/en/profile/3456789" target="_blank" rel="noreferrer">
          <FaLaptopCode size={50} /> <p>Sololearn</p>


          </a>
        </div>
      </section>

      <footer>
        <p>© 2025 Badrinath MS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
