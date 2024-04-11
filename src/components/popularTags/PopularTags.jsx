import React from 'react'
import "./popularTags.css"
import arrow from "../../assets/images/arrow.png"
const PopularTags = () => {
  const tags = [
    "Clutch",
    "Fabric lining",
    "Baggit",
    "Multi Compartment"
  ]
  return (
    <div className='popularTags'>
      <div className='popularTagTitle'>Popular tags for handbag</div>
      <div className="allTags">
        <div className='tagsContainer'>
          {tags.map((item, index) => (
            <div className='tagTitle' key={index}>{item}</div>
          ))}
        </div>
        <img className="arrowIcon" src={arrow} />
      </div>
    </div>
  )
}

export default PopularTags