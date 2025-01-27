import React from 'react';
import Carousel from '../components/carousel';
import Project from '../components/project';

const ProjectPage = () => {
    const projects = [
        {
            title: "Reserach Gap Finder",
            date: "December, 2024",
            description: "A website tool to collect and analyze thesis libraries to identify research gaps and underexplored fields in various disciplines.",
            languages: ["reactjs", "tailwindcss", "python"],
        },
        {
            title: "Inarawan",
            date: "July, 2024",
            description: "Developed a Point-of-Sale and Inventory Management System for a coffee shop using ReactJS, TailwindCSS, Python, NodeJS, and PostgreSQL.",
            languages: ["reactjs", "tailwindcss", "python", "postgresql"],
        },
        {
            title: "Algorithmic Abyss: Applying Procedural Algorithms for Dungeon Map Generation in Games",
            date: "May, 2024",
            description: "Developed a Python-based Dungeon Crawler Game with random map generation using Drunkard's Walk, Binary Space Partitioning, and Cellular Automata algorithms.",
            languages: ["python"],
        },
        {
            title: "Advanced Encryption Standard (AES) and Least Significant Bit (LSB) Steganography",
            date: "May, 2024",
            description: "Developed a Python system that uses encryption technique such as AES and LSB and presented using Tkinter",
            languages: ["python"],
        },
        {
            title: "Comparative Assessment of Renewable Energy in the Philippines",
            date: "April, 2024",
            description: "Conducted a simulation-based analysis comparing wind and solar energy resources for sustainable energy planning in the Philippines.",
            languages: ["reactjs", "tailwindcss", "python"],
        },
    ];

    return(
        <div className="relative snap-center h-screen w-screen bg-cc_bg">
            <div className="h-screen w-screen flex flex-col p-20 gap-8">
                <h1 className="text-background text-5xl font-bold"> Projects </h1>
                <Carousel>
                    {
                        projects.map((project, index) => (
                            <Project
                                key={index}
                                title={project.title}
                                date={project.date}
                                description={project.description}
                                languages={project.languages}
                            />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default ProjectPage;