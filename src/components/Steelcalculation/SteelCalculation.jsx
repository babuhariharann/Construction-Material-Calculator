import React from 'react'
import { useState } from 'react'
import SteelFeet from './SteelFeet';
import SteelMeter from './SteelMeter';

const SteelCalculation = () => {
    const [selectedUnits, setSelectedUnits] = useState("Feet");

    const handleChange = (event) => {
      setSelectedUnits(event.target.value);
    }
  return (
    
        <div className="Brick-Calculation">
            <h3>Steel Weight CALCULATION</h3>
            <div className="Brick-Container">
            <div className="Unit-Container">
            <h3>Unit</h3>

      <select value={selectedUnits} onChange={handleChange}>
        <option value="Feet">Feet/Inches</option>
        <option value="Meter">Meter/CM</option>
      </select>

      {selectedUnits === "Feet" && <div className='SteelFeet'><SteelFeet/></div>}
      {selectedUnits === "Meter" && <div className='SteelMeter'><SteelMeter/></div>}
      </div>
      </div>
    </div>
  )
}

export default SteelCalculation