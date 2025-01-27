import React from 'react';

const SkillTile = ({ language }) => {
    return(
        <div className="w-2/3 px-8 py-4 rounded-2xl border-4 border-background flex flex-row items-center cursor-pointer">
            <h1 className="font-bold text-4xl text-background pksans">{language}</h1>
        </div>
    );
}

export default SkillTile;