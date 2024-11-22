
import Image from "next/image"
import "../styles/card.css"
import React, { useState, useEffect } from "react";


interface proopsType {
    title:string;
    description:string;
    img:string;
    tags:string[];
}

const Card: React.FC<proopsType> = ({ title, tags, description, img }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`ard ${isSmallScreen ? "card-sm" : ""}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? "card-image-sm" : ""}`}
          src={img}
          alt={title}
          width={200}  // Set appropriate width
          height={150} // Set appropriate height
        />
        </div>
      <div className="card-content">
        <div className="card-title">{title} </div>
        <div>{description}</div>
<div>
    {tags.map((el)=>(
        <div className="card-tags" key={el}>
    {el}
</div>))}
</div>
      </div>
    </div>
  )
}

export default Card;