import React from 'react'
import { useState } from 'react'
import CementConcreteFeet from './CementConcreteFeet';
import CementConcreteMeter from './CementConcreteMeter';

const CementConcrete = () => {
    const [selectedUnits, setSelectedUnits] = useState("Feet");

    const handleChange = (event) => {
      setSelectedUnits(event.target.value);
    }
  return (
    
        <div className="CementConcrete-Calculation">
            <h3>CementConcrete CALCULATION</h3>
            <div className="CementConcrete-Container">
            <div className="Unit-Container">
            <h3>Unit</h3>

      <select value={selectedUnits} onChange={handleChange}>
        <option value="Feet">Feet/Inches</option>
        <option value="Meter">Meter/CM</option>
      </select>

      {selectedUnits === "Feet" && <div className='CementConcreteFeet'><CementConcreteFeet/></div>}

      {selectedUnits === "Meter" && <div className='CementConcreteMeter'><CementConcreteMeter/></div>}

      </div>
      </div>
    </div>
  )
}

export default CementConcrete


















// import React from 'react'
// import { useState } from 'react'


// const CementConcrete = () => {

//     const [unit, setUnit] = useState('feet');
//     const [grade, setGrade] = useState('M20');
//     const [length, setLength] = useState(10);
//     const [length, setLength] = useState(10);
//     const [length, setLength] = useState(10);

//     return (
//         <>
//             <div className="ConstCost">
//                 <h3>CONSTRUCTION COST ESTIMATOR</h3>
//                 <div className="CostCost-Top">
//                     <div className="ConstCost-Container-Left">
//                         left
//                         <div className="Unit-Container">
//                             <p>Unit</p>
//                             <span>
//                                 <select value={unit} onChange={e => setUnit(e.target.value)}>
//                                     <option value="feet">feet</option>
//                                     <option value="meters">meters</option>
//                                 </select>
//                             </span>
//                             <div className="GOC-Container">
//                                 <p>Grade of Concrete</p>
//                                 <select value={grade} onChange={e => setGrade(e.target.value)}>
//                                     <option value="M20">M20 (1:1.5:3)</option>
//                                     <option value="M15">M15 (1:2:4)</option>
//                                     <option value="M10">M10 (1:3:6)</option>
//                                     <option value="M7.5">M7.5 (1:4:8)</option>
//                                 </select>
//                             </div>
//                             <div className="Width-container">
//                                 <input type="number" value={ } />
//                             </div>
//                         </div>

//                     </div>
//                     <div className="ConstCost-Container-right">
//                         right

//                     </div>

//                 </div>
//                 <div className="ConstCost-Bottom">
//                     Bottom

//                 </div>

//             </div>
//         </>
//     )
// }

// export default CementConcrete 