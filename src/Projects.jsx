import React from "react";
import Chatapp from './assets/Chatapp.jpg';
import Todo from './assets/Todo.jpg';
import BooksLibrary from './assets/BooksLibrary.jpg';
import { FaPlay, FaGithub } from "react-icons/fa"; // Import icons

const projectsData = [
    {
        name: "Chat Application",
        description:
            "A real-time chat application that allows users to communicate in using this app. Developed a Real Time Chat Application using the MERN Stack (MongoDB, Express.js, React.js, Node.js) integrated with Bootstrap for responsive design, socket.io for real-time communication, and Toastify for notification management.",
        liveDemo: "https://transcendent-cuchufli-eda898.netlify.app/",
        github: "https://github.com/Ajithduraisamy/ChatApp_Frontend",
        image: Chatapp,
    },
    {
        name: "Books Library",
        description:
            "The Books Library is a full-stack application designed to manage book records efficiently. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this project allows users to perform CRUD (Create, Read, Update, Delete) operations on a database of books.",
        liveDemo: "https://gilded-kitten-a2e735.netlify.app/",
        github: "https://github.com/Ajithduraisamy/FullStack-P1-FE",
        image: BooksLibrary,
    },
    {
        name: "Todo List Application",
        description:
            "The Todo List Application is a full-stack project that allows users to manage their tasks efficiently. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this application provides a seamless user experience for creating, editing, and deleting tasks while ensuring secure user authentication.",
        liveDemo: "https://startling-banoffee-3ad241.netlify.app/",
        github: "https://github.com/Ajithduraisamy/FullStack-P2-FE",
        image: Todo,
    },
];

function Projects() {
    return (
        <div className="container">
            <h4 className="my-4">Projects</h4>
            <div className="row">
                {projectsData.map((project, index) => (
                    <div className="col-md-12 mb-4" key={index}>
                        <div className="card mb-3 h-100" style={{ maxWidth: "100%" }}>
                            <div className="row g-0 d-flex align-items-stretch">
                                <div className="col-md-8 d-flex">
                                    <div className="card-body d-flex flex-column justify-content-between" style={{ paddingBottom: "10px" }}>
                                        <h5 className="card-header">{project.name}</h5>
                                        <p className="card-text m-2">{project.description}</p>
                                        <div className="mt-1">
                                            <a
                                                href={project.liveDemo}
                                                className="btn btn-primary mx-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaPlay size={20} /> Live Demo
                                            </a>
                                            <a
                                                href={project.github}
                                                className="btn btn-secondary mx-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub size={20} /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 p-3 d-flex align-items-center">
                                    <img
                                        src={project.image}
                                        className="img-fluid rounded-end"
                                        alt={project.name}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                            padding: "5px"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;