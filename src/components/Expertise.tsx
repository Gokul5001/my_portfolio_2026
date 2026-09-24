import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Flask",
    "REST APIs",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Postman"
];

const labelsMobile = [
    "Flutter",
    "Dart",
    "React Native",
    "REST API Integration",
    "Authentication",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Hostinger VPS",
    "Chrome DevTools",
    "Aisensy",
];

const labelsThird = [
    "OpenAI",
    "Gemini API",
    "LangChain",
    "RAG",
    "Pinecone",
    "NLP",
    "Scikit-learn",
    "MediaPipe",
    "Prompt Engineering",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build responsive, production-ready web applications from scratch using React and Node.js. I work across the whole stack: reusable front-end components, REST APIs, databases, authentication, and third-party integrations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreenButton} size="3x"/>
                    <h3>Mobile App Development</h3>
                    <p>I build cross-platform mobile apps for Android and iOS using Flutter and React Native, connecting them to the same REST APIs and backends that power my web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsMobile.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I containerize applications, set up CI/CD pipelines, and deploy to cloud and VPS hosting. I also automate everyday workflows such as appointment scheduling and patient reminders.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I add LLMs, RAG, and NLP to real products, from customer-support chatbots to AI-powered healthcare workflows such as teleconsultation, follow-ups, and posture analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;