import React from 'react'
import { useState } from 'react'

const SumpTankFeet = () => {

    const [lengthFeet, setLengthFeet] = useState("");
    const [lengthInches, setLengthInches] = useState("");
    const [breadthFeet, setBreadthFeet] = useState("");
    const [breadthInches, setBreadthInches] = useState("");
    const [depthFeet, setDepthFeet] = useState("");
    const [depthInches, setDepthInches] = useState("");
    const [tankLiters, setTankLiters] = useState("0");
    const [volumeInFeet, setVolumeInFeet] = useState("0");
    const [volumeInMeter, setVolumeInMeter] = useState("0");
    const [error, setError] = useState(false);


//To Perform reset action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setLengthFeet("");
        setLengthInches("");
        setBreadthFeet("");
        setBreadthInches("");
        setDepthFeet("");
        setDepthInches("");
        setTankLiters("0");
        setVolumeInFeet("0");
        setVolumeInMeter("0");

    }

//To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        if (lengthFeet.length == 0 || lengthInches.length == 0 || breadthFeet.length == 0 || breadthInches.length == 0 || depthFeet.length == 0 || depthInches.length == 0 ) {
            setError(true);
           
            setTankLiters("0");
        setVolumeInFeet("0");
        setVolumeInMeter("0");
            return;

        }


//Convert integer to number
        

        const lengthFeetParse = parseFloat(lengthFeet);
        const lengthInchesParse = parseFloat(lengthInches);
        const breadthFeetParse = parseFloat(breadthFeet);
        const breadthInchesParse = parseFloat(breadthInches);
        const depthFeetParse = parseFloat(depthFeet);
        const depthInchesParse = parseFloat(depthInches);


        //Convert Feet to Meter

        

        const volumeInFeet = (lengthFeetParse + (lengthInchesParse/12)) * (breadthFeetParse + (breadthInchesParse/12)) * (depthFeetParse + (depthInchesParse/12));
        setVolumeInFeet(volumeInFeet.toFixed(2))


        const volumeInMeter= (volumeInFeet/35.32);
        setVolumeInMeter(volumeInMeter.toFixed(4))

        console.log(volumeInMeter)

        //Calculate tank Liters

        const tankLiters = volumeInMeter * 1000;
        setTankLiters(Math.ceil(tankLiters))
        console.log(tankLiters)

        


    }












    return (
        <>
            <div className="SumpTankFeet-Top">
                <div className="SumpTankFeet-Left">
                    
                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="10" value={lengthFeet} onChange={e => setLengthFeet(e.target.value)} />Feet</span>
                            </div>
                            {error && lengthFeet.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={lengthInches} onChange={e => setLengthInches(e.target.value)} />Inches</span>
                            </div>
                            {error && lengthInches.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                        <h3>Breadth</h3>
                        <div className="Breadth-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="6" value={breadthFeet} onChange={e => setBreadthFeet(e.target.value)} />Feet</span>
                            </div>
                            {error && breadthFeet.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={breadthInches} onChange={e => setBreadthInches(e.target.value)} />Inches</span>
                            </div>
                            {error && breadthInches.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        </div>
                        <div className="Depth-Container">
                        <h3>Depth</h3>
                        <div className="Depth-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="5" value={depthFeet} onChange={e => setDepthFeet(e.target.value)} />Feet</span>
                            </div>
                            {error && depthFeet.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={depthInches} onChange={e => setDepthInches(e.target.value)} />Inches</span>
                            </div>
                            {error && depthInches.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        </div>

                    </div>
                    

                </div>
                <div className="SumpTankFeet-Right">
                    Right
                    <div className="SumpTankFeet-Ads">
                        here is google ads

                    </div>
                    <div className="SumpTankFeet-Btn">
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
            <div className="SumpTankFeet-Bottom">
                Bottom
                <div className="SumpTankFeet-Bottom-Left">

                    <div className='SumpTankFeetVolume'><h4>Volume in M3</h4>
                    <h3>{volumeInMeter} m3</h3>
                    </div>
                    <div className='SumpTankMeterVolume'><h4>Volume in CFT</h4>
                    <h3>{volumeInFeet} ft3</h3>
                    </div>

                    <div className="SumpTankFeet-Bottom-Right">
                    <div className='SumpTankLiterVolume'>
                         <h4>
                         Capacity of Water-Sump/Tank
                        </h4>
                        <h3>{tankLiters} Lt</h3>
                        </div>
                        
                        

                    </div>
                </div>


            </div>

        </>
    )
}

export default SumpTankFeet