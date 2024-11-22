import React from "react"
import Heading from "./Heading"
import Card from "./Card"
import "../styles/project.css"



const data = [
    {
        id: 0,
        title:"To Do List",
        description: "A React and Typescript based app for managing and organizing daily task",
        img: "/project0.jpg",
        tags:["React, Node, Css, Typescrip"],
    },
    {
    id: 1,
    title: "Countdown Timer",
    description: "A Next.js and Typescript based website for counting down to a specific time",
    img: "/project1.jpg",
    tags: ["Next.js, Node, Css, Typescrip"],
    },
    {
        id: 2,
        title: "Weather Widget",
        description: "A Next.js and Typescript based power tool for fetching and displaying real time weather data",
        img: "/project2.jpg",
        tags: ["Next.js, Node, Css, Typescrip"],
    },
    {
        id: 3,
        title: "Currency Converter App",
        description: "A simple Html and Typescript based power tool for converting currencies with real time rates",
        img:"/project3.jpg",
        tags: ["Html, Node, Css, Typescrip"],

    },
    {
        id: 4,
        title: "Static Interactive Resume",
        description:"A Typrscript based interactive resume built with html and css,allowing user to showcase their abilities dynamically",
        img:"/project4.jpg",  
        tags:["Typescript,html,node,css"],    
    
    },
]

const Project = () => {
  return (
    <div id="project" className="project-container">
      <Heading title="My Project"/>
      <div className="project-grid project-grid-xl project-grid-md-2 project-grid-lg-3 project-center">
{data.map((el)=>(<Card
key={el.id}
title={el.title}
description={el.description}
img={el.img}
tags={el.tags}
/>))}
      </div>
    </div>
  )
}

export default Project
