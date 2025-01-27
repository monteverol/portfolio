import React from 'react';
import ReactJS from './icons/reactjs';
import TailwindCSS from './icons/tailwindcss';
import PostgreSQL from './icons/postgresql';
import Python from './icons/python';

const Project = ({ key, title, date, description, languages }) => {
    const iconMapping = {
        reactjs: <ReactJS />,
        tailwindcss: <TailwindCSS />,
        postgresql: <PostgreSQL />,
        python: <Python />,
    };

    return(
        <div key={key} className="h-full w-full flex flex-row justify-between items-center">
            {/* DESCRIPTION */}
            <div className="h-full w-1/2 flex flex-col gap-4">
                <h1 className="text-6xl text-background font-bold"> {title} </h1>
                {/* PROGRAMMING LANGUAGES */}
                <div className="w-full flex flex-wrap gap-4">
                    {languages.map((lang) => iconMapping[lang.toLowerCase()] || null)}
                </div>
                <h2 className="font-bold text-2xl text-background text-right"> {date} </h2>
                <p className="text-2xl text-background">
                    {description}
                </p>
            </div>
            {/* IMAGE */}
            <div className="w-1/2 h-full rounded-3xl overflow-hidden">

            </div>
        </div>
    );
}

export default Project;

// const projects = [
//     {
//         title: "Inarawan",
//         date: "",
//         description: "",
//         languages: [].
//     }
// ]