import React from 'react';
import { BiLogoPostgresql } from "react-icons/bi";

const PostgreSQL = () => {
    return(
        <div className="px-4 py-2 rounded-xl border-white border-2 flex flex-row gap-4 items-center">
            <BiLogoPostgresql color="var(--background)" size={40} />
            <p className="font-bold text-2xl text-background"> PostgreSQL </p>
        </div>
    );
}

export default PostgreSQL;