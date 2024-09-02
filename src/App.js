import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="navbar">
            <h1>Darshan Patil</h1>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
              </ul>
            </nav>
          </div>
          <div className="intro" id="home">
            <img className="profile-pic" src="/images/profile3.png" alt="Profile of Darshan Patil" />
            <h2>Hey There,</h2>
            <h1>I'm Darshan Patil.</h1>
            <div className="social-buttons">
              <a href="https://www.linkedin.com/in/darshan-patil-/" className="social-button" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/DarshanPatil1128" className="social-button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <p>
              I am a software engineer and data analyst with a strong foundation in computer science and mathematics, currently pursuing my B.S. at NYU. My experience spans developing user-centric software applications, performing data analysis for actionable insights, and driving business growth through strategic partnerships.
            </p>
          </div>
        </div>
      </header>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="container">
          <h2>My Resume</h2>
          <p>You can download my resume by clicking the link below:</p>
          {/* Display Resume Image */}
          <img src="/images/resumesc.png" alt="Screenshot of Darshan Patil's Resume" className="resume-image" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container project-container">
          <div className="project-image">
            <img src="/images/project1.png" alt="Fairshare Project Screenshot" />
          </div>
          <div className="project-description">
            <h2>Fairshare</h2>
            <p>FairShare is an app inspired by the challenges of splitting bills accurately during group dining experiences. It ensures precise division of costs, including taxes and service charges, using a combination of React Native for the frontend and advanced technologies like Firebase, Google Cloud, Azure Form Recognizer, and OpenAI for the backend. Despite facing challenges in maintaining data accuracy across varied receipt formats, the team successfully created a user-friendly interface emphasizing simplicity and reliability. Moving forward, FairShare plans to enhance user convenience by integrating nearby user detection, digital payment options, and machine learning to improve OCR efficiency.</p>
            <a href="https://github.com/jivi3/HackRU/" className="github-link-button" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
        <div className="container project-container">
          <div className="project-image">
            <img src="/images/project2.png" alt="Investment Data Analysis Project Screenshot" />
          </div>
          <div className="project-description">
            <h2>Investment Data Analysis</h2>
            <p>The project focused on conducting a comprehensive data analysis for a cab company to enhance investment returns. Using Python, the analysis involved gathering and examining data on market trends and competitor strategies to support informed decision-making. The project also included developing data visualizations to clearly convey insights to stakeholders, leading to the identification of high-yield investment opportunities that maximized the company's financial returns.</p>
            <a href="https://github.com/DarshanPatil1128/Cab_Investment_Analysis" className="github-link-button" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;
