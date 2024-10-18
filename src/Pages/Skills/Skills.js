import React from 'react'
import './Skills.css'

function Skills() {


  
const listofskills = [
  {
    name: "Java Script",
    path: require("../../Source/jslogo-removebg-preview.png"),
    size: "40%"
  },
  {
    name: "Angular",
    path: require("../../Source/Angularlogo.png"),
    size: "40%"
  },
  {
    name: "Type Script",
    path: require("../../Source/Tslogo.webp"),
    size: "40%"
  },
  {
    name: "React.js",
    path: require("../../Source/Reactlogo.webp"),
    size: "40%"
  },
  {
    name: "jQuery",
    path: require("../../Source/jQeurylogo.png"),
    size: "40%"
  },
  {
    name: "Node.js",
    path: require("../../Source/nodelogo.png"),
    size: "40%"
  },
  {
    name: "React Native",
    path: require("../../Source/reactnativelogo.png"),
    size: "40%"
  },
  {
    name: "HTML5",
    path: require("../../Source/Html5.png"),
    size: "40%"
  },
  {
    name: "CSS3",
    path: require("../../Source/css3logo.png"),
    size: "40%"
  },
  {
    name: "My SQL",
    path: require("../../Source/sqllogo.png"),
    size: "40%"
  },
  {
    name: "Mongo DB",
    path: require("../../Source/mongodblog.png"),
    size: "40%"
  },
  {
    name: "Bootstrap5",
    path: require("../../Source/bootstraplogo.png"),
    size: "40%"
  },
  {
    name: "Material Ui",
    path: require("../../Source/materialui.png"),
    size: "40%"
  },

  {
    name: "Git",
    path: require("../../Source/Gitlogonew.webp"),
    size: "40%"
  },
  {
    name: "Express.js",
    path: require("../../Source/expressjs.png"),
    size: "80%"
  },
  {
    name: "VS Code",
    path: require("../../Source/vscodelogo.png"),
    size: "40%"
  },
  {
    name: "Jira",
    path: require("../../Source/ziralogo.png"),
    size: "40%"
  },
  {
    name: "Sourcetree",
    path: require("../../Source/sourcetreelogo.png"),
    size: "40%"
  }
];

  return (
    <div className='skillscontain pt-3'>
      {/* <div className="layer2"></div> */}
      <div className="row skillsection pt-5">
      <div className="col-md"></div>
        <div className="col-md-9 leftsec">
        <h2 className='abouthead' style={{fontSize:"40px"}}>Skills</h2>
        <p className='mx-auto' style={{ fontSize: "16px", width:"97%"}}>Experienced in creating high-performance web and mobile applications with Angular, React, React Native and Node.js. Strong expertise in JavaScript, TypeScript, MySQL for robust and scalable solutions. Adept at designing responsive interfaces and implementing efficient state management for optimal user experiences.</p>
          <div className='parentcardrow'>
            <div className="skillcardrow">
              {listofskills && listofskills.map((item, index) => {
                return (
                  <div key={index} className="skillcard">
                    <div><img src={item.path} alt="" width={item.size} /></div> 
                    <div>{item.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  )
}

export default Skills