import React from 'react';
import { RiTailwindCssFill } from "react-icons/ri";

const TailwindCSS = () => {
    return(
        <div className="px-4 py-2 rounded-xl border-white border-2 flex flex-row gap-4 items-center">
            <RiTailwindCssFill color="var(--background)" size={40} />
            <p className="font-bold text-2xl text-background"> TailwindCSS </p>
        </div>
    );
}

export default TailwindCSS;