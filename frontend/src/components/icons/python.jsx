import React from 'react';
import { FaPython } from "react-icons/fa6";

const Python = () => {
    return(
        <div className="px-4 py-2 rounded-xl border-white border-2 flex flex-row gap-4 items-center">
            <FaPython color="var(--background)" size={40} />
            <p className="font-bold text-2xl text-background"> Python </p>
        </div>
    );
}

export default Python;