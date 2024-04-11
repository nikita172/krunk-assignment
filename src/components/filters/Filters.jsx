import React from 'react'
import "./filters.css";
import filter from "../../assets/images/filter.png";
import cross from "../../assets/images/cross.png";
import blueCross from "../../assets/images/blueCross.png";

const Filters = () => {
  const filterData = ["Colour", "Size", "Brand", "Material"]

  return (
    <div className='filterContainer'>
      <div className="heading">
        <span className='headingTitle'>Select filters</span>
        <div className='filterTag'>
          <img src={filter} />
          <span>Filter</span>
        </div>
      </div>
      <div className='allFilters'>
        <div className='filterSuggestion'>
          <span>Strap - Long</span>
          <img src={blueCross} />
        </div>
        {filterData.map((data, index) => (
          <div className='filterSuggestion unSelected' key={index}>
            <span>{data}</span>
            <img src={cross} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Filters