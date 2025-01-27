import React from 'react';
import './App.css'
import SkillTile from './components/skillTile';
import LandingPage from './pages/landingPage';
import ExperiencePage from './pages/experiencePage';
import ProjectPage from './pages/projectPage';

function App() {
  return (
    <div className="snap-y snap-mandatory flex flex-col overflow-y-scroll overflow-x-hidden h-screen">
      <LandingPage />
      <ProjectPage />
      {/* <div className="relative snap-center h-screen w-screen bg-cc_bg">
        <div className="h-screen w-screen flex flex-row px-20">
          <div className="w-1/2 h-full"></div>
          <div className="w-1/2 h-full flex flex-col justify-center items-start gap-8">
            <SkillTile language="JavaScript" />
            <SkillTile language="React" />
            <SkillTile language="Python" />
            <SkillTile language="MySQL" />
            <SkillTile language="Java" />
            <SkillTile language="TailwindCSS" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
