import React from 'react'
import { useState } from 'react'
import SumpTankFeet from './SumpTankFeet';
import SumpTankMeter from './SumpTankMeter';

const SumpTank = () => {
    const [selectedUnits, setSelectedUnits] = useState("Feet");

    const handleChange = (event) => {
      setSelectedUnits(event.target.value);
    }
  return (
    
        <div className="SumpTank-Calculation">
            <h3>WATER-SUMP/TANK CALCULATION</h3>
            <div className="SumpTank-Container">
            <div className="Unit-Container">
            <h3>Unit</h3>

      <select value={selectedUnits} onChange={handleChange}>
        <option value="Feet">Feet/Inches</option>
        <option value="Meter">Meter/CM</option>
      </select>

      {selectedUnits === "Feet" && <div className='SumpTankFeet'><SumpTankFeet/></div>}
      {selectedUnits === "Meter" && <div className='SumpTankMeter'><SumpTankMeter/></div>}
      </div>
      </div>
    </div>
  )
}

export default SumpTank