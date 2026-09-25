import React from "react";
import mock01 from '../assets/images/Zeromedixine_web_app.webp';
import mock02 from '../assets/images/Zeromedixine_app.webp';
// import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/forparents.webp';
import mock05 from '../assets/images/Weather_app.webp';
import mock06 from '../assets/images/News_web_app.webp';
import mock07 from '../assets/images/pizzaa.webp';
import mock08 from '../assets/images/Travel_web_app.webp';
import mock09 from '../assets/images/CRM_Project_Image.webp';
import mock10 from '../assets/images/qrcode.webp';
import '../assets/styles/Project.scss';

// Replace each "#" with the real link to your project (web app, GitHub, or Play Store).
const links = {
    zeromedixineWeb: "https://zeromedixine.com/",
    zeromedixineAndroid: "https://play.google.com/store/apps/details?id=com.zeromedixine.app&pcampaignid=web_share",
    forParents: "https://forparents.zeromedixine.com/",
    travelSphere: "https://client-xi-seven-35.vercel.app/",
    crm: "https://next-js-task-of-advanced-crm-dashbo-liart.vercel.app",
    weather: "https://weather-app-react-js-self.vercel.app/",
    news: "https://news-app-omega-gold.vercel.app/",
    orderBot: "https://github.com/Gokul5001/LLM_Based_Pizza-order_Bot.git",
    qrcode: "https://github.com/Gokul5001/QR-Code-Generation-Project.git",
};

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={links.zeromedixineWeb} target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Zeromedixine Web App thumbnail" width="100%"/></a>
                <a href={links.zeromedixineWeb} target="_blank" rel="noreferrer"><h2>Zeromedixine: Web App</h2></a>
                <p>Built a full-stack healthcare SaaS web platform for automated patient processing and remote diagnostics with React, Node.js, Express, MongoDB, and Twilio. It includes appointment scheduling and reminders, billing, patient records, video consultation, and a multi-role system for patients, doctors, and admins.</p>
            </div>
            <div className="project">
                <a href={links.zeromedixineAndroid} target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Zeromedixine Android App thumbnail" width="100%"/></a>
                <a href={links.zeromedixineAndroid} target="_blank" rel="noreferrer"><h2>Zeromedixine: Android App</h2></a>
                <p>Developed the Android companion app for the Zeromedixine platform so patients can book appointments, receive reminders, access their records, and join video consultations from their phones.</p>
            </div>
            <div className="project">
                <a href={links.travelSphere} target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="Travel Sphere thumbnail" width="100%"/></a>
                <a href={links.travelSphere} target="_blank" rel="noreferrer"><h2>Travel Sphere: Travel Booking Platform</h2></a>
                <p>Built a full-stack travel booking platform for flights, hotels, buses, and holiday packages, with cart and checkout, sandbox payments, wallet, coupons, visa applications, and an admin dashboard. Created as a technical assessment for LemonTrip, with the client deployed on Vercel and the API on Render.</p>
            </div>
            <div className="project">
                <a href={links.crm} target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="Advanced CRM Dashboard thumbnail" width="100%"/></a>
                <a href={links.crm} target="_blank" rel="noreferrer"><h2>Advanced CRM Dashboard</h2></a>
                <p>Developed a customer management dashboard with Next.js and TypeScript. It handles 150 customers with search, filters, sortable columns, drag-to-reorder rows, bulk selection, CSV export, an add-customer form, and a dark mode toggle.</p>
            </div>
           
            <div className="project">
                <a href={links.forParents} target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Zeromedixine For Parents thumbnail" width="100%"/></a>
                <a href={links.forParents} target="_blank" rel="noreferrer"><h2>Zeromedixine For Parents: Elderly Recovery Platform</h2></a>
                <p>Built a home-based recovery system for elderly patients that combines physiotherapy, doctor consultation, and nutrition tracking. It uses the WhatsApp API for daily monitoring and keeps family members connected to the care plan.</p>
            </div>
       
            <div className="project">
                <a href={links.weather} target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="React Weather App thumbnail" width="100%"/></a>
                <a href={links.weather} target="_blank" rel="noreferrer"><h2>React Weather App</h2></a>
                <p>Developed a dynamic weather app with React.js that pulls real-time data from the Open Weather API. It supports location-based search, live UI updates, and error handling for API calls.</p>
            </div>
            <div className="project">
                <a href={links.news} target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="News App thumbnail" width="100%"/></a>
                <a href={links.news} target="_blank" rel="noreferrer"><h2>News App</h2></a>
                <p>Built a React.js news app that fetches the latest headlines from News API with category filtering and a dark/light mode toggle. The responsive Bootstrap UI uses React Hooks and handles loading and error states.</p>
            </div>
            <div className="project">
                <a href={links.qrcode} target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="LLM-Based Order Bot thumbnail" width="100%"/></a>
                <a href={links.qrcode} target="_blank" rel="noreferrer"><h2>QR Code Generator</h2></a>
                <p>Built a command-line tool that turns any URL into a scannable QR code image. It uses Inquirer to take the URL from the terminal and QR Image to save the QR code as a PNG. The Node.js File System module also stores each entry in a text file for future reference.</p>
            </div>
            <div className="project">
                <a href={links.orderBot} target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="LLM-Based Order Bot thumbnail" width="100%"/></a>
                <a href={links.orderBot} target="_blank" rel="noreferrer"><h2>LLM-Based Order Bot</h2></a>
                <p>Created a conversational food-ordering bot with OpenAI GPT-3.5 Turbo, Flask, Node.js, and Tailwind CSS. It guides users through the menu, delivery or pickup, order summary, and session reset in natural language.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;