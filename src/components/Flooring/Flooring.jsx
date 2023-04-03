import React from 'react'
import { useState } from 'react'
import FlooringFeet from './FlooringMeter.jsx';
import FlooringMeter from './FlooringFeet';

const Flooring = () => {
    const [selectedUnits, setSelectedUnits] = useState("Feet");

    const handleChange = (event) => {
      setSelectedUnits(event.target.value);
    }
  return (
    
        <div className="Flooring-Calculation">
            <h3>FLOORING CALCULATION</h3>
            <div className="Flooring-Container">
            <div className="Unit-Container">
            <h3>Unit</h3>

      <select value={selectedUnits} onChange={handleChange}>
        <option value="Feet">Feet/Inches</option>
        <option value="Meter">Meter/CM</option>
      </select>

      {selectedUnits === "Feet" && <div className='FlooringFeet'><FlooringFeet/></div>}
      {selectedUnits === "Meter" && <div className='FlooringMeter'><FlooringMeter/></div>}
      </div>
      </div>
    </div>
  )
}

export default Flooring