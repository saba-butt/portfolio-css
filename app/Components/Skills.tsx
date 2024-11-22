import React from "react"
import "../styles/skills.css"


const Skills = () => {
  return (
    <div id="Skills" className="skills-container">
        <div className="skills-grid">

            {/* 1st col heading and paragraph */}
            <div data-aos="zoom-in-up" className="skills-left">

<h2 className="skills-heading">Technologies i work with</h2>
<p className="skills.text">
    I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js

</p>
            </div>

            {/* second column skills */}

                <div className="skills-right">
                    <div className="skills-icon-grid">
                        <div className="skills-space">
                        
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
</div>
<div className="skills-space">

                    <h2 data-aos="zoom-in-up">Tailwind Css</h2>
                        <h2 data-aos="zoom-in-up">Html</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>

                </div>
            </div>

        </div>
        </div>
        </div>
      

  )
}

export default Skills
