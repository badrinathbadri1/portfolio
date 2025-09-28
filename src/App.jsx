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
        <h2 className="he">PORTFOLIO</h2>
        <br></br>
        <h2 className="Name">Badrinath M S</h2>
        <h3 className="Dev">Full Stack Developer </h3>
        
      </header>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="card-container">
          <strong><div className="card"><h3>Technical skills</h3>ReactJS<br></br>
          Python<br></br>Java<br></br>NodeJS<br></br>HTML,CSS and JavaScript<br></br>SQL,NoSQL
          <br></br>Data Analysis <br></br>MS Word,Excel and Powerpoint
          <br></br>Github (Version Control)</div></strong>
          <strong><div className="card"><h3>Data Analytics skills</h3>Power BI<br></br>
          Tableau<br></br>MS Excel</div></strong>
          <strong><div className="card"><h3>Design skills</h3>Figma<br></br>Canva<br></br>Wireframing<br></br>UI/UX Design
          <br></br>Responsive Web Design</div></strong>
          <strong><div className="card"><h3>Soft skills</h3>Maintaining cross-disciplinary thinking<br></br>
           Cross-Functional Collaboration<br></br>Design Sensibility<br></br>Experimentation Mindset<br></br>Visualizations</div></strong>
          
           
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <div className="card-container">
          <div className="card">
            <img src={ethImg} alt="Ethereum Price predictor Using Python " />
            <h3>Ethereum Price predictor Using Python</h3>
            <p>I Built Python backend + JavaScript frontend with real-time API integration.</p>
            <a href="https://github.com/badrinathbadri1/eth-price-predictor" className="btn">
              Visit Project
            </a>
          </div>
          <div className="card">
            <img src={curlImg} alt="Biceps Curl Tracker" />
            <h3>Biceps Curl Motion Detector Using Python</h3>
            <p> I Implemented real-time Biceps Motion Detection 
              using Python and maintained system performance for accurate tracking.</p>
            <a href="https://github.com/badrinathbadri1/biceps-curl-predictor" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={dashImg} alt="Dashboard Generator" />
            <h3>Dashboard Generator</h3>
            <p>I Created and Deployed interactive data visualization dashboards using ReactJS </p>
            <a href="https://badrinathbadri1.github.io/dash-board-by-badri/" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={botrImg} alt="Chatbot for Reactjs" />
            <h3>Chatbot for Reactjs By Using ReactJS</h3>
            <p>I Developed and Deployed interactive conversation flow with state management using ReactJS</p>
            <a href="https://badrinathbadri1.github.io/reactjs-chatbot-by-badri/" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={botmImg} alt="chat bot for math" />
            <h3>Chatbot for solving math queries</h3>
            <p>I Developed Python-based chatbot for solving complex math problems.</p>
            <a href="https://github.com/badrinathbadri1/math-chatbot-by-badri" className="btn">
              Visit Project
            </a>
          </div>

          <div className="card">
            <img src={ecomImg} alt="E-commerce" />
            <h3>E-commerce Website</h3>
            <p>I Designed and Deployed and implemented HTML, CSS, JavaScript 
              UI/UX design, and responsive layout.</p>
            <a href="https://aravind-wood-decors.vercel.app" className="btn">
              Visit Project
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2>Education</h2>
        <div className="card-container">
          <div className="card">
            <h3>BE Computer Science and Engineering</h3>
            <p>2021 - 2025</p>
            <p>Sudharsan Engineering college, Pudukkottai.</p>
            <p>Anna University, Chennai.</p>
          </div>
        </div>
      </section>


      {/* Internship */}
      <section className="section">
        <h2>Internship</h2>
        <div className="card-container">
          <div className="card">
            <h3>ReactJS Developer Intern – Novotech</h3>
            <p> Developed interactive UI components using ReactJS,
               integrated REST APIs, and managed code versioning using Git.</p>
          </div>
        </div>

        <br></br>
        
        <div className="card-container">
          <div className="card">
            <h3>Data Analytics Intern – Novitech</h3>
            <p> Analyzed datasets, created dashboards and data visualizations
               using Power BI, Tableau, and MS Excel, and maintained reporting systems.</p>
          </div>
        </div>

        
        <br></br>
        <div className="card-container">
          <div className="card">
            <h3>Full Stack Development Intern – BrandBee Technologies</h3>
            <p> Built responsive full-stack applications using ReactJS, Node.js, and Express.js. Implemented database operations using SQL/NoSQL. 
              Worked in Agile/Scrum teams and deployed apps on cloud platforms (Vercel)..</p>
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

      

      

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <div className="card-container contact-icons">
          <a href="mailto:badrinathjuly23@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={40} /> <p className="p">E-mail</p>
          </a>
          
          <a href="https://linkedin.com/in/badri-nath-043554270" target="_blank" rel="noreferrer">
            <FaLinkedin size={40} /><p className="p">Linkedin</p>
          </a>
          
          <a href="tel:+919894405382" target="_blank" rel="noreferrer">
            <FaPhoneAlt size={40} /><p className="p">Mobile</p>
          </a>
          <a href="https://github.com/badrinathbadri1" target="_blank" rel="noreferrer">
            <FaGithub size={50} /><p className="p">Github</p>
          </a>
          <a href="http://sololearn.com/Profile/22757283" target="_blank" rel="noreferrer">
          <FaLaptopCode size={50} /> <p className="p">Sololearn</p>


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
