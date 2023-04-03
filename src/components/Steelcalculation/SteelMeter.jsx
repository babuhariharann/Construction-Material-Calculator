import React from 'react'
import { useState } from 'react'

const Steelmeter = () => {


    const [diameter, setDiameter] = useState("");
    const [meter, setMeter] = useState("");
    const [cm, setCM] = useState("");
    const [quantity, setQuantity] = useState("");
    const [weightKG, setWeightKG] = useState("0");
    const [weightTon, setWeightTon] = useState("0");
    const [error, setError] = useState(false);


    //To Perform reset action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setDiameter("");
        setMeter("");
        setCM("");
        setQuantity("");
        setWeightKG("0");
        setWeightTon("0");

    }

    //To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        

        if (diameter.length == 0 || meter.length == 0 || cm.length == 0 || quantity.length == 0) {
            setError(true);

            setWeightKG("0");
            setWeightTon("0");
            return;

        }


        //Convert integer to number


        const diameterParse = parseFloat(diameter);
        const meterParse = parseFloat(meter);
        const cmParse = parseFloat(cm);
        const quantityParse = parseFloat(quantity);


        //Convert feet to Meter

        const lengthMeter = (meterParse + (cmParse / 100)) ;
        console.log(lengthMeter.toFixed(4));


        //Calculate weight in KG

        const weightKG = (((diameterParse * diameterParse) / 162.28) * (lengthMeter) * (quantityParse));
        console.log(weightKG.toFixed(4));
        setWeightKG(weightKG.toFixed(4));

        //Calculate weight in Ton

        const weightTon = (weightKG / 1000);
        console.log(weightTon.toFixed(4));
        setWeightTon(weightTon.toFixed(4));


    }












    return (
        <>
            <div className="Steel-Top">
                <div className="Steel-Container-Left">
                    <div className="Diameter-Container">
                        <h3>Diameter</h3>
                        <div className="Diameter-Input">
                            <span><input type="number" placeholder="8" value={diameter} onChange={e => setDiameter(e.target.value)} />mm</span>

                        </div>
                        {error && diameter.length <= 0 ?
                            <label>Diameter should not be empty (or) Enter 0</label> : ""}
                    </div>
                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='meter-Input'>
                                <span><input type="number" placeholder="40" value={meter} onChange={e => setMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && meter.length <= 0 ?
                                <label>Meter should not be empty (or) Enter 0</label> : ""}
                            <div className='cm-Input'>
                                <span><input type="number" placeholder="0" value={cm} onChange={e => setCM(e.target.value)} />CM</span>
                            </div>
                            {error && cm.length <= 0 ?
                                <label>CM should not be empty (or) Enter 0</label> : ""}
                        </div>

                    </div>
                    <div className="Quantity-Container">
                        <h3>Quantity</h3>

                        <div className="Quantity-Input">
                            <span><input type="number" placeholder="1" value={quantity} onChange={e => setQuantity(e.target.value)} />Nos</span>
                        </div>
                    </div>
                    {error && quantity.length <= 0 ?
                        <label>Diameter should not be empty</label> : ""}

                </div>
                <div className="Steel-Container-Right">
                    Right
                    <div className="Steel-Ads">
                        here is google ads

                    </div>
                    <div className="Steel-Btn">
                        <div className="Btn Calculate">
                            <button onClick={handleCalculate}>Calculate</button>
                        </div>
                        <div className="Btn Reset">
                            <button onClick={handleReset}>Reset</button>
                        </div>
                        <div className="Btn MoreCalculation">
                            <button>Detail Cal.</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="Steel-Bottom">
                Bottom
                <div className="Steel-Bottom-Left">

                    <h4>Weight of steel in kg.</h4>
                    <h3>{weightKG}Kg</h3>

                    <div className="Steel-Bottom-Right">
                        <h4>
                            Weight of steel in ton
                        </h4>
                        <h3>{weightTon}Ton</h3>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Steelmeter