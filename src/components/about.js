import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const about = () => {
    return (
        <div id="about">
            <h2 className="title">About me</h2>
            <div className="text-box">
                <p>I’m an apprentice software developer at Sunrise GmbH, where I am learning to create innovative solutions and improve user experiences. I am passionate about coding and always eager to learn new technologies.
                Feel free to connect with me on LinkedIn or check out my GitHub for my latest projects!
                Thank you for visiting my portfolio!</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/Kleif298" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="link-text">GitHub</span>
                    <span className="link-icon"><FaGithub size={40} color="white" /></span>
                </a>
                <a href="https://www.linkedin.com/in/leif-fieger-96aa1b2aa/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="link-text">LinkedIn</span>
                    <span className="link-icon"><FaLinkedin size={40} color="white" /></span>
                </a>           
                <a href="mailto:leif.fieger@gmail.com" className="social-link">
                    <span className="link-text">Email</span>
                    <span className="link-icon"><FaEnvelope size={40} color="white" /></span>
                </a>
            </div>
            <div className="image-box">
                <img src={`%PUBLIC_URL%/bild-leif-angle.jpg`} alt="Leif" />
            </div>
        </div>
    )
};

export default about;