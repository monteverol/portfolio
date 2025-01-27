import React from 'react';
import DynamicBox from '../components/dynamicBox';
import CustomCard from '../components/CustomCard';

const LandingPage = () => {
    return(
        <div className="relative snap-center h-screen w-screen bg-background">
            <DynamicBox row={8} col={12} top={10} left={0} height={10} width={10} />
            <DynamicBox row={8} col={12} top={80} left={80} height={10} width={10} />

            <div className="h-screen w-screen flex flex-row px-20">
                <div className="h-full w-1/2 flex items-center justify-center">
                    <CustomCard />
                </div>
                <div className="h-full w-1/2 flex flex-col items-start justify-center">
                    <h1 className="text-cc_bg font-bold text-9xl">Batulan,<br />Ayan</h1>
                    <h5 className="text-cc_bg text-xl mt-8">
                        An aspiring Computer Scientist with a strong foundation in Machine Learning, Data Science, and Software Development, seeking to leverage
                        analytical and programming skills to develop innovative solutions and contribute to impactful projects in a dynamic, growth-oriented organization.
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;