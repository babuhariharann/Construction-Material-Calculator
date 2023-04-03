import React from 'react'
import BrickCalculation from './Bricks/BrickCalculation'
import CementConcrete from './CementConcrete/CementConcrete'
import ConstCost from './Construction Cost/ConstCost'
import Flooring from './Flooring/Flooring'
import SteelCalculation from './Steelcalculation/SteelCalculation'
import SumpTank from './SumpTankCalculation/SumpTank'
import UnitConverter from './UnitConvertor/UnitConverter'
import './Element.css'

const Element = () => {
    return (
        <>
            <div className="Main-Container">
                <div className="Main-Container-Left">
                    <div className="Calculation-List">
                        <ul>
                            <li>UnitConverter</li>
                            <li>CementConcrete</li>
                            <li>ConstCost</li>
                            <li>BrickCalculation</li>
                            <li>SumpTank</li>
                            <li>Flooring </li>
                        </ul>
                    </div>

                </div>
                <div className="Main-Container-Right">

                    <UnitConverter/>
                    <CementConcrete/>
                    <ConstCost/>
                    <BrickCalculation/>
                    <SteelCalculation/>
                    <SumpTank/>
                    <Flooring/>
                </div>
                

            </div>
        </>
    )
}

export default Element