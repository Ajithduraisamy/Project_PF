import React, { useState } from 'react';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaBootstrap, FaPaperPlane } from 'react-icons/fa'; // Updated import

const skillsData = {
    Languages: [
        { name: 'JavaScript', icon: <FaJsSquare size={40} color='orange' /> },
        { name: 'HTML', icon: <FaHtml5 size={40} color='red' /> },
        { name: 'CSS', icon: <FaCss3Alt size={40} color='blue' /> },
    ],
    Frameworks: [
        { name: 'Express.js', icon: <FaNodeJs size={40} color='green' /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} color='darkgreen' /> },
    ],
    Library: [
        { name: 'React', icon: <FaReact size={40} color='blue' /> },
        { name: 'Bootstrap', icon: <FaBootstrap size={40} color='darkcyan' /> },
    ],
    Database: [
        { name: 'MongoDB', icon: <FaDatabase size={40} color='green' /> },
        { name: 'MySQL', icon: <FaDatabase size={40} color='blue' /> }, // Using the same icon for MongoDB and MySQL
    ],
    DevelopmentTools: [
        { name: 'Git', icon: <FaGitAlt size={40} color='red' /> },
        { name: 'Visual Studio Code', icon: <FaGitAlt size={40} color='blue' /> }, // Using the same icon for Git
    ],
    APIsIntegration: [
        { name: 'Postman', icon: <FaPaperPlane size={40} color='orange' /> }, // Replaced with FaPaperPlane
    ],
};

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('Languages'); // Default category

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container">
            <h4 className='my-4'>Technologies</h4>
            <div className="row">
                <div className="col-md-12 my-2">
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('Languages')}>
                        Languages
                    </button>
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('Frameworks')}>
                        Frameworks
                    </button>
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('Library')}>
                        Library
                    </button>
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('Database')}>
                        Database
                    </button>
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('DevelopmentTools')}>
                        Development Tools
                    </button>
                    <button type="button" className="btn btn-secondary m-1" onClick={() => handleCategoryChange('APIsIntegration')}>
                        APIs & Integration
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                {skillsData[selectedCategory].map((skill, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card text-center">
                            <div className="card-body">
                                {skill.icon}
                                <h5 className="card-title mt-2">{skill.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;