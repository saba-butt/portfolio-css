import React from "react"
import "../styles/heading.css"


interface proopsType {
    title: string;
}

const Heading:React.FC<proopsType> = ({title}) => {
  return (
    <div className="heading-container">
      <p className="heading-title">{title}</p>
    </div>
  )
}

export default Heading
