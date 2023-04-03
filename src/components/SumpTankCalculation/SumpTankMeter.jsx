import React from 'react'
import { useState } from 'react'

const SumpTankMeter = () => {

    const [lengthMeter, setLengthMeter] = useState("");
    const [lengthCM, setLengthCM] = useState("");
    const [breadthMeter, setBreadthMeter] = useState("");
    const [breadthCM, setBreadthCM] = useState("");
    const [depthMeter, setDepthMeter] = useState("");
    const [depthCM, setDepthCM] = useState("");
    const [tankLiters, setTankLiters] = useState("0");
    const [volumeInFeet, setVolumeInFeet] = useState("0");
    const [volumeInMeter, setVolumeInMeter] = useState("0");
    const [error, setError] = useState(false);


//To Perform reset action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setLengthMeter("");
        setLengthCM("");
        setBreadthMeter("");
        setBreadthCM("");
        setDepthMeter("");
        setDepthCM("");
        setTankLiters("0");
        setVolumeInFeet("0");
        setVolumeInMeter("0");

    }

//To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        if (lengthMeter.length == 0 || lengthCM.length == 0 || breadthMeter.length == 0 || breadthCM.length == 0 || depthMeter.length == 0 || depthCM.length == 0 ) {
            setError(true);
           
            setTankLiters("0");
        setVolumeInFeet("0");
        setVolumeInMeter("0");
            return;

        }


//Convert integer to number
        

        const lengthMeterParse = parseFloat(lengthMeter);
        const lengthCMParse = parseFloat(lengthCM);
        const breadthMeterParse = parseFloat(breadthMeter);
        const breadthCMParse = parseFloat(breadthCM);
        const depthMeterParse = parseFloat(depthMeter);
        const depthCMParse = parseFloat(depthCM);


        //Convert Feet to Meter

        

        const volumeInFeet = ((lengthMeterParse + (lengthCMParse/100)) * (breadthMeterParse + (breadthCMParse/100)) * (depthMeterParse + (depthCMParse/100)) * 35.3147);
        setVolumeInFeet(volumeInFeet.toFixed(2))


        const volumeInMeter= (lengthMeterParse + (lengthCMParse/100)) * (breadthMeterParse + (breadthCMParse/100)) * (depthMeterParse + (depthCMParse/100));
        setVolumeInMeter(volumeInMeter.toFixed(4))

        console.log(volumeInMeter)

        //Calculate tank Liters

        const tankLiters = volumeInMeter * 1000;
        setTankLiters(Math.ceil(tankLiters))
        console.log(tankLiters)

        


    }












    return (
        <>
            <div className="SumpTankMeter-Top">
                <div className="SumpTankMeter-Left">
                    
                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="10" value={lengthMeter} onChange={e => setLengthMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && lengthMeter.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={lengthCM} onChange={e => setLengthCM(e.target.value)} />CM</span>
                            </div>
                            {error && lengthCM.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                        <h3>Breadth</h3>
                        <div className="Breadth-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="6" value={breadthMeter} onChange={e => setBreadthMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && breadthMeter.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={breadthCM} onChange={e => setBreadthCM(e.target.value)} />CM</span>
                            </div>
                            {error && breadthCM.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        </div>
                        <div className="Depth-Container">
                        <h3>Depth</h3>
                        <div className="Depth-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="5" value={depthMeter} onChange={e => setDepthMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && depthMeter.length <= 0 ?
                                <label>Feet should not be empty (or) Enter 0</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={depthCM} onChange={e => setDepthCM(e.target.value)} />CM</span>
                            </div>
                            {error && depthCM.length <= 0 ?
                                <label>Inches should not be empty (or) Enter 0</label> : ""}
                        </div>
                        </div>

                    </div>
                    

                </div>
                <div className="SumpTankMeter-Right">
                    Right
                    <div className="SumpTankMeter-Ads">
                        here is google ads

                    </div>
                    <div className="SumpTankMeter-Btn">
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
            <div className="SumpTankMeter-Bottom">
                Bottom
                <div className="SumpTankMeter-Bottom-Left">

                    <div className='SumpTankMeterVolume'><h4>Volume in M3</h4>
                    <h3>{volumeInMeter} m3</h3>
                    </div>
                    <div className='SumpTankMeterVolume'><h4>Volume in CFT</h4>
                    <h3>{volumeInFeet} ft3</h3>
                    </div>

                    <div className="SumpTankMeter-Bottom-Right">
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

export default SumpTankMeter