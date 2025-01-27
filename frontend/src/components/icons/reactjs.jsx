import React from 'react';
import { FaReact } from "react-icons/fa6";

const ReactJS = () => {
    return(
        <div className="px-4 py-2 rounded-xl border-white border-2 flex flex-row gap-4 items-center">
            <FaReact color="var(--background)" size={40} />
            <p className="font-bold text-2xl text-background"> React.js </p>
        </div>
    );
}

export default ReactJS;