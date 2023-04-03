import React from 'react'
import { useState } from 'react'
import './ConstCost.css'

const ConstCost = () => {
    const [areaDetails, setAreaDetails] = useState("1000")
    const [cost, setCost] = useState("1000.00")
    const [initialValue, setInitialValue] = useState("10,00,000.00")
    const [cement, setCement] = useState("1,64,000.00")
    const [sand, setSand] = useState("1,23,000.00")
    const [aggregate, setAggregate] = useState("74,000.00")
    const [steel, setSteel] = useState("2,46,000.00")
    const [finishers, setFinishers] = useState("2,28,000.00")
    const [fittings, setFittings] = useState("2,28,000.00")
    const [totalCost, setTotalCost] = useState("10,00,000.00")


    console.log(areaDetails);

    const handleSubmit = () => {
        
        const initialCost = areaDetails * cost;
        setInitialValue(initialCost);
        setCement(initialCost * 0.164)
        setSand(initialCost * 0.123)
        setAggregate(initialCost * 0.074)
        setSteel(initialCost * 0.246)
        setFinishers(initialCost * 0.228)
        setFittings(initialCost * 0.228)
        setTotalCost(initialCost)


    }

    const handleDelete = () => {
        setAreaDetails("1000.00")
        setCost("1000.00")
        setInitialValue("10,00,000.00")
        setCement("1,64,000.00")
        setSand("1,23,000.00")
        setAggregate("74,000.00")
        setSteel("2,46,000.00")
        setFinishers("2,28,000.00")
        setFittings("2,28,000.00")
        setTotalCost("10,00,000.00")
    }


    return (
        <>
            <div className="ConstCost">
                <h3>CONSTRUCTION COST ESTIMATOR</h3>
                <div className="CostCost-Top">
                    <div className="ConstCost-Container-Left">
                        right
                        <div className="ConstCost-Builtup">
                            <h4>Builtup Area</h4>
                            <span className='Feet-Meter'>ft2</span>
                            <input
                                value={areaDetails}
                                type="number"
                                onChange={e => setAreaDetails(e.target.value)} />
                        </div>
                        <div className="ConstCost-TotalCost">
                            <h4>Approx Cost (Per Square Feet)</h4>
                            <span className='Cost-Amount'>Rs</span>
                            <input
                            
                                value={cost}
                                type="number"
                                onChange={e => setCost(e.target.value)}
                            />

                            
                        </div>
                    </div>
                    <div className="ConstCost-Container-Right">
                        <h3>Approx amount of cost for given construction is {initialValue} Rs.</h3>
                        <div className="Material-Details">
                            <h4>Approximate cost on various work of materialas per thumb rule</h4>
                            <div className="Material-List">
                                <div className="Each-Material">
                                    <p>Cement (16.4 %)</p>
                                    <span> {cement}Rs.</span>
                                </div>
                                <div className="Each-Material">
                                    <p>Sand (12.3 %)</p>
                                    <span> {sand} Rs.</span>
                                </div>
                                <div className="Each-Material">
                                    <p>Aggregate (7.4 %)</p>
                                    <span> {aggregate} Rs.</span>
                                </div>
                                <div className="Each-Material">
                                    <p>Steel (24.6 %)</p>
                                    <span>{steel} Rs.</span>
                                </div>
                                <div className="Each-Material">
                                    <p>Finishers include Paint,Tiles,Bricks</p>
                                    <span> {finishers} Rs.</span>
                                </div>
                                <div className="Each-Material">
                                    <p>Fittings include Window,Doors,Electical etc.,</p>
                                    <span> {fittings} Rs.</span>
                                </div>
                                <div className="Material-Total">
                                    <p>TOTAL COST</p>
                                    <span>{totalCost} Rs.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ConstCost-Bottom">
                    <div className="Btn Calculate" onClick={handleSubmit}>Calculate</div>
                    <div className="Btn Reset" onClick={handleDelete}>Reset</div>
                    <div className="Btn Detail">Get detail Calculations</div>
                </div>

            </div>
        </>
    )
}

export default ConstCost