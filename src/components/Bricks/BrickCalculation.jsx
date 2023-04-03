import React from 'react'
import { useState } from 'react'
import BrickFeet from './BrickFeet';
import BrickMeter from './BrickMeter';

const BrickCalculation = () => {
    const [selectedUnits, setSelectedUnits] = useState("Feet");

    const handleChange = (event) => {
      setSelectedUnits(event.target.value);
    }
  return (
    
        <div className="Brick-Calculation">
            <h3>BRICK MASONRY CALCULATION</h3>
            <div className="Brick-Container">
            <div className="Unit-Container">
            <h3>Unit</h3>

      <select value={selectedUnits} onChange={handleChange}>
        <option value="Feet">Feet/Inches</option>
        <option value="Meter">Meter/CM</option>
      </select>

      {selectedUnits === "Feet" && <div><BrickFeet/></div>}
      {selectedUnits === "Meter" && <div><BrickMeter/></div>}
      </div>
      </div>
    </div>
  )
}

export default BrickCalculation