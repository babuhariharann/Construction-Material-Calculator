import React from 'react'
import { useState } from 'react'

const FlooringFeet = () => {

    const [lengthFeet, setLengthFeet] = useState("");
    const [lengthInches, setLengthInches] = useState("");
    const [widthFeet, setWidthFeet] = useState("");
    const [widthInches, setWidthInches] = useState("");
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
        setLengthFeet("");
        setLengthInches("");
        setWidthFeet("");
        setWidthInches("");
        setTdLength("");
        setTdWidth("");
        setNoOfTiles("0");
        setAreaInFeet("0");
        setAreaInMeter("0");

    }

    //To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        if (lengthFeet.length == 0 || lengthInches.length == 0 || widthFeet.length == 0 || widthInches.length == 0 ) {
            setError(true);

            setNoOfTiles("0");
            setAreaInFeet("0");
            setAreaInMeter("0");
            return;

        }


        //Convert integer to number


        const lengthFeetParse = parseFloat(lengthFeet);
        const lengthInchesParse = parseFloat(lengthInches);
        const widthFeetParse = parseFloat(widthFeet);
        const widthInchesParse = parseFloat(widthInches);
        const tdLengthParse = parseFloat(tdLength);
        const tdWidthParse = parseFloat(tdWidth);


        //Convert Feet to Meter



        const areaInFeet = (lengthFeetParse + (lengthInchesParse / 12)) * (widthFeetParse + (widthInchesParse / 12));
        console.log(areaInFeet.toFixed(2))
        setAreaInFeet(areaInFeet.toFixed(2))


        const areaInMeter = (areaInFeet / 10.76);
        console.log(areaInMeter.toFixed(2))
         setAreaInMeter(areaInMeter.toFixed(2))

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
                                <span><input type="number" placeholder="10" value={lengthFeet} onChange={e => setLengthFeet(e.target.value)} />Feet</span>
                            </div>
                            {error && lengthFeet.length <= 0 ?
                                <label>Feet should not be empty (or) Enter "0"</label> : ""}
                            <div className='Inches-Input'>
                                <span><input type="number" placeholder="0" value={lengthInches} onChange={e => setLengthInches(e.target.value)} />Inches</span>
                            </div>
                            {error && lengthInches.length <= 0 ?
                                <label>Inches should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                            <h3>Width</h3>
                            <div className="Breadth-Input">
                                <div className='Feet-Input'>
                                    <span><input type="number" placeholder="6" value={widthFeet} onChange={e => setWidthFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && widthFeet.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='Inches-Input'>
                                    <span><input type="number" placeholder="0" value={widthInches} onChange={e => setWidthInches(e.target.value)} />Inches</span>
                                </div>
                                {error && widthInches.length <= 0 ?
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

export default FlooringFeet