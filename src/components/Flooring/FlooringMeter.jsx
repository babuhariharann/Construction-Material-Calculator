import React from 'react'
import { useState } from 'react'

const FlooringMeter = () => {

    const [lengthMeter, setLengthMeter] = useState("");
    const [lengthCM, setLengthCM] = useState("");
    const [widthMeter, setWidthMeter] = useState("");
    const [widthCM, setWidthCM] = useState("");
    const [tdLength, setTdLength] = useState("");
    const [tdWidth, setTdWidth] = useState("");
    const [noOfTiles, setNoOfTiles] = useState("0");
    const [areaInFeet, setAreaInFeet] = useState("0");
    const [areaInMeter, setAreaInMeter] = useState("0");
    const [cementBag, setCementBag] = useState("0");
    const [cementKG, setCementKG] = useState("0");
    const [sandTon, setSandTon] = useState("0");
    const [sandKG, setSandKG] = useState("0");
    const [error, setError] = useState(false);


    //To Perform reset action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setLengthMeter("");
        setLengthCM("");
        setWidthMeter("");
        setWidthCM("");
        setTdLength("");
        setTdWidth("");
        setNoOfTiles("0");
        setAreaInFeet("0");
        setAreaInMeter("0");

    }

    //To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        if (lengthMeter.length == 0 || lengthCM.length == 0 || widthMeter.length == 0 || widthCM.length == 0 ) {
            setError(true);

            setNoOfTiles("0");
            setAreaInFeet("0");
            setAreaInMeter("0");
            return;

        }


        //Convert integer to number


        const lengthMeterParse = parseFloat(lengthMeter);
        const lengthCMParse = parseFloat(lengthCM);
        const widthMeterParse = parseFloat(widthMeter);
        const widthCMParse = parseFloat(widthCM);
        const tdLengthParse = parseFloat(tdLength);
        const tdWidthParse = parseFloat(tdWidth);


        //Convert Units


        const areaInMeter = ((lengthMeterParse + (lengthCMParse/100)) * (widthMeterParse + (widthCMParse/100) ));
        console.log(areaInMeter.toFixed(2))
         setAreaInMeter(areaInMeter.toFixed(2));

         const areaInFeet = (areaInMeter * 10.76);
         console.log(areaInFeet.toFixed(2));
         setAreaInFeet(areaInFeet.toFixed(2))

        //No of Tiles Calculate

        const areaOfTiles = (tdLengthParse * tdWidthParse );
        console.log(areaOfTiles);

        //No of Tiles required

        const noOfTiles = (areaInFeet / areaOfTiles);
        setNoOfTiles(Math.ceil(noOfTiles));
        console.log(Math.ceil(noOfTiles));

        //Amount of Cement Calculate

        const beddingVolume = (areaInMeter * 0.07);
        console.log(beddingVolume.toFixed(2));

        const cementBags = (((beddingVolume * 1)/7) / 0.035);
        console.log(cementBags.toFixed(2));
        setCementBag(Math.ceil(cementBags));

        const cementKG = 50 * cementBags;
        setCementKG(Math.ceil(cementKG))
        console.log(Math.ceil(cementKG))

        //Amount of Sand Calculate

        

        const sandKG = (((beddingVolume * 6)/7) * 1550);
        setSandKG(sandKG.toFixed(2))
        console.log(sandKG.toFixed(2));

        const sandTon = (sandKG / 1000);
        setSandTon(sandTon.toFixed(2))
        console.log(sandTon.toFixed(2))


        




    }

    return (
        <>
            <div className="FlooringMeter-Top">
                <div className="FlooringMeter-Left">

                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='Feet-Input'>
                                <span><input type="number" placeholder="10" value={lengthMeter} onChange={e => setLengthMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && lengthMeter.length <= 0 ?
                                <label>Feet should not be empty (or) Enter "0"</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={lengthCM} onChange={e => setLengthCM(e.target.value)} />CM</span>
                            </div>
                            {error && lengthCM.length <= 0 ?
                                <label>Inches should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                            <h3>Width</h3>
                            <div className="Breadth-Input">
                                <div className='Feet-Input'>
                                    <span><input type="number" placeholder="6" value={widthMeter} onChange={e => setWidthMeter(e.target.value)} />Meter</span>
                                </div>
                                {error && widthMeter.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='Inches-Input'>
                                    <span><input type="number" placeholder="0" value={widthCM} onChange={e => setWidthCM(e.target.value)} />CM</span>
                                </div>
                                {error && widthCM.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>
                        <div className="TileDimension-Container">
                            <h3>Tile Dimension</h3>

                            <div className="tdLength-Input">
                                <h3>Length</h3>
                                <div className='Feet-Input'>
                                    <span><input type="number" placeholder="5" value={tdLength} onChange={e => setTdLength(e.target.value)} />Feet</span>
                                </div>
                                {error && tdLength.length <= 0 ?
                                     <label>Length should not be empty (or) Enter "0"</label> : ""} 
                                <div className='TdWidth-Input'>
                                    <h3>Width</h3>
                                     <span><input type="number" placeholder="0" value={tdWidth} onChange={e => setTdWidth(e.target.value)} />Feet</span> 
                                </div>
                                 {error && tdWidth.length <= 0 ? 
                                     <label>Width should not be empty (or) Enter "0"</label> : ""} 
                            </div>
                        </div>

                    </div>


                </div>
                <div className="FlooringMeter-Right">
                    Right
                    <div className="FlooringMeter-Ads">
                        here is google ads

                    </div>
                    <div className="FlooringMeter-Btn">
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
            {/* <div className="FlooringMeter-Bottom">
                Bottom
                <div className="FlooringMeter-Bottom-Left">

                    <div className='FlooringMeterVolume'><h4>Volume in M3</h4>
                    <h3>{areaInMeter} m3</h3>
                    </div>
                    <div className='SumpTankMeterVolume'><h4>Volume in CFT</h4>
                    <h3>{areaInFeet} ft3</h3>
                    </div> 

                    <div className="FlooringMeter-Bottom-Right">
                    <div className='SumpTankLiterVolume'>
                         <h4>
                         Capacity of Water-Sump/Tank
                        </h4>
                        <h3>{tankLiters} Lt</h3>
                        </div>
                        
                        

                    </div>
                </div>


            </div> */}
            <div className="FlooringMeter-Bottom">
                Bottom
                <div className="Tiles-Bottom-Left">
                    <div className="Tiles-Required">
                        <h4>Total Tiles Required</h4>
                        <h3>{noOfTiles}</h3>
                    </div>
                    <div className="Tiles-Volume">
                        <h4>
                            Volume of Construction \^2
                        </h4>
                        <p> {areaInMeter}m² OR {areaInFeet} ft² </p>
                    </div>
                </div>
                <div className="Tiles-Bottom-Right">
                    <div className="Tiles-Table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        S.No
                                    </td>
                                    <td>
                                        Material
                                    </td>
                                    <td>
                                        Quantity
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        1.
                                    </td>
                                    <td>
                                        Tiles
                                    </td>
                                    <td>
                                        {noOfTiles} Nos
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        Cement
                                    </td>
                                    <td>
                                        {cementBag} Bag <span>({cementKG}kg)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        Sand
                                    </td>
                                    <td>
                                        {sandTon} TON <span>({sandKG}kg)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
1
            </div>

        </>
    )
}

export default FlooringMeter