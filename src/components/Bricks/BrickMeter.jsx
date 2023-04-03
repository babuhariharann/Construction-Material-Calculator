
import React from 'react'
import { useState, useRef } from 'react'

const BrickMeter = () => {

    const cementRef = useRef(null);
    const sandRef = useRef(null);
    const lengthMeterRef = useRef(null);
    const lengthCMRef = useRef(null);
    const heightMeterRef = useRef(null);
    const heightCMRef = useRef(null);
    const thicknessMeterRef = useRef(null);
    const thicknessCMRef = useRef(null);
    const brickLengthRef = useRef(null);
    const brickHeightRef = useRef(null);
    const brickThicknessRef = useRef(null);



    const [ratioCement, setRatioCement] = useState('');
    const [ratioSand, setRatioSand] = useState('');
    const [wallLengthMeter, setWallLengthMeter] = useState("");
    const [wallLengthCM, setWallLengthCM] = useState("");
    const [wallHeightMeter, setWallHeightMeter] = useState("");
    const [wallHeightCM, setWallHeightCM] = useState("");
    const [wallThicknessMeter, setWallThicknessMeter] = useState("");
    const [wallThicknessCM, setWallThicknessCM] = useState("");
    const [BrickLengthCM, setBrickLengthCM] = useState("");
    const [BrickHeightCM, setBrickHeightCM] = useState("");
    const [BrickThicknessCM, setBrickThicknessCM] = useState("");
    const [noOfBricks, setNoOfBricks] = useState("0");
    const [volumeInMeter, setVolumeInMeter] = useState("0");
    const [volumeInFeet, setVolumeInFeet] = useState("0");
    const [cementBag, SetCementBag] = useState("0");
    const [cementKG, SetCementKG] = useState("0");
    const [sandTON, SetSandTON] = useState("0");
    const [sandKG, SetSandKG] = useState("0");
    const [error, setError] = useState(false);




    //To set Focus


    const handleKeyPressSand = (event) => {
        if (event.key === 'Enter') {
            sandRef.current.focus();
        }
    }
    const handleKeyPressLengthMeter = (event) => {
        if (event.key === 'Enter') {
            lengthMeterRef.current.focus();
        }
    }
    const handleKeyPressLengthCM = (event) => {
        if (event.key === 'Enter') {
            lengthCMRef.current.focus();
        }
    }
    const handleKeyPressHeightMeter = (event) => {
        if (event.key === 'Enter') {
            heightMeterRef.current.focus();
        }
    }
    const handleKeyPressHeightCM = (event) => {
        if (event.key === 'Enter') {
            heightCMRef.current.focus();
        }
    }
    const handleKeyPressThicknessMeter = (event) => {
        if (event.key === 'Enter') {
            thicknessMeterRef.current.focus();
        }
    }
    const handleKeyPressThicknessCM = (event) => {
        if (event.key === 'Enter') {
            thicknessCMRef.current.focus();
        }
    }
    const handleKeyPressBrickLength = (event) => {
        if (event.key === 'Enter') {
            brickLengthRef.current.focus();
        }
    }
    const handleKeyPressBrickHeight = (event) => {
        if (event.key === 'Enter') {
            brickHeightRef.current.focus();
        }
    }
   
    const handleKeyPressBrickThickness = (event) => {
        if (event.key === 'Enter') {
            brickThicknessRef.current.focus();
        }
    }
   

       //To Perform Reset Action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setRatioCement("")
        setRatioSand("")
        setWallLengthMeter("")
        setWallLengthCM("");
        setWallHeightMeter("");
        setWallHeightCM("");
        setWallThicknessMeter("");
        setWallThicknessCM("");
        setBrickLengthCM("");
        setBrickHeightCM("");
        setBrickThicknessCM("");
        setNoOfBricks("0");
        setVolumeInMeter("0");
        SetCementBag("0");
        SetCementKG("0");
        SetSandTON("0");
        SetSandKG("0");

    }



//To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();



        //To Convert String as a number

        const wallLengthMeterParse = parseFloat(wallLengthMeter);
        const wallLengthCMParse = parseFloat(wallLengthCM);
        const wallHeightMeterParse = parseFloat(wallHeightMeter);
        const wallHeightCMParse = parseFloat(wallHeightCM);
        const wallThicknessMeterParse = parseFloat(wallThicknessMeter);
        const wallThicknessCMParse = parseFloat(wallThicknessCM);
        const ratioCementParse = parseFloat(ratioCement);
        const ratioSandParse = parseFloat(ratioSand);



        //To Find Volume of Brickmasonry in Meter



        const BrickMasonryLengthMeter = wallLengthMeterParse + (wallLengthCMParse / 100);
        const BrickMasonryHeightMeter = wallHeightMeterParse + (wallHeightCMParse / 100);
        const BrickMasonryThicknessMeter = wallThicknessMeterParse + (wallThicknessCMParse / 100);
        const BrickMasonryVolume = (BrickMasonryLengthMeter * BrickMasonryHeightMeter * BrickMasonryThicknessMeter)

        setVolumeInMeter((BrickMasonryVolume).toFixed(2));


        //To Find Volume of Brickmasonry in Feet

        setVolumeInFeet((BrickMasonryVolume * 35.32).toFixed(2));


        const BrickLengthCMParse = parseFloat(BrickLengthCM);
        const BrickHeightCMParse = parseFloat(BrickHeightCM);
        const BrickThicknessCMParse = parseFloat(BrickThicknessCM);


        //To Find Volume of Brick with mortar and without mortar


        const BrickWithMortar = (((BrickLengthCMParse / 100) + 0.01) * ((BrickHeightCMParse / 100) + 0.01) * ((BrickThicknessCMParse / 100) + 0.01));
        const BrickWithoutMortar = ((BrickLengthCMParse / 100) * (BrickHeightCMParse / 100) * (BrickThicknessCMParse / 100));


        //To Find No of Brick 


        const NoOfBricks = BrickMasonryVolume / BrickWithMortar;
        console.log(Math.ceil(NoOfBricks));
        setNoOfBricks(Math.ceil(NoOfBricks));

        const BricksMortarVolume = ((NoOfBricks) * (BrickWithoutMortar));
        console.log((BricksMortarVolume).toFixed(4));




        //Quantity of Mortar

        const MortarQuantity = ((BrickMasonryVolume) - (BricksMortarVolume));
        console.log((MortarQuantity).toFixed(4));


        //Add 15% more for wastage, Non - uniform thickness of mortar joins

        const MortarQuantity15 = (MortarQuantity + (MortarQuantity * 0.15));
        console.log((MortarQuantity15).toFixed(4))


        //Add 25% more for wastage, Non - uniform thickness of mortar joins

        const MortarQuantity25 = (MortarQuantity15 + (MortarQuantity15 * 0.25));
        console.log((MortarQuantity25).toFixed(4))



        //Amount of Cement Calculate

        const SumOfRatio = ratioCementParse + ratioSandParse;
        console.log(SumOfRatio);


        //Amount of Cement Calculate

        const CementAmount = (ratioCementParse / SumOfRatio) * MortarQuantity25;
        console.log((CementAmount).toFixed(4));

        //1 Bag of Cement = 0.035 m3
        const CementAmountBag = CementAmount / 0.035;
        SetCementBag(Math.ceil(CementAmountBag));
        console.log(Math.ceil(CementAmountBag))

        const CementAmountKG = CementAmountBag * 50;
        SetCementKG(Math.ceil(CementAmountKG));
        console.log(Math.ceil(CementAmountKG))

        //Amount of Sand Calculate

        const SandAmount = (ratioSandParse / SumOfRatio) * MortarQuantity25;
        console.log((SandAmount).toFixed(4));

        //By Considering dry loose bulk density of sand 1500 kg/m3

        const SandAmountKG = SandAmount * 1500;
        SetSandKG(Math.ceil(SandAmountKG));
        console.log((SandAmountKG).toFixed(2))

        const SandAmountTON = SandAmountKG / 1000;
        SetSandTON(SandAmountTON.toFixed(2));
        console.log((SandAmountTON).toFixed(2))


    }

    return (
        <>

         <div className="Brick-Top">
                <div className="Brick-Container-Left">
                    left
                    <div className="Unit-Container">

                        <div className="Ratio">
                            <h3>Ratio(Cement : Sand)</h3>
                            <div className="Total-Ratio">
                                <div className="Cement-Ratio">
                                    <span><input
                                        type="number"
                                        value={ratioCement}
                                        placeholder='1'
                                        ref={cementRef}
                                        onKeyDown={handleKeyPressSand}
                                        onChange={e => setRatioCement(e.target.value)} />Cement</span>
                                </div>
                                {error && ratioCement.length <= 0 ?
                                    <label>Cement Ratio should not be empty (or) Enter "0"</label> : ""}
                                <div className="Sand-Ratio">
                                    <span><input
                                        type="number"
                                        value={ratioSand}
                                        placeholder='6'
                                        ref={sandRef}
                                        onKeyDown={handleKeyPressLengthMeter}
                                        onChange={e => setRatioSand(e.target.value)} />Sand</span>
                                </div>
                                {error && ratioSand.length <= 0 ?
                                    <label>Sand Ratio should not be empty (or) Enter "0"</label> : ""}
                            </div>

                        </div>
                        <div className="WallLength">
                            <h3>Wall Length</h3>
                            <div className="Total-Length">
                                <div className="Length-Meter">
                                    <span><input
                                        type="number"
                                        value={wallLengthMeter}
                                        placeholder='10'
                                        ref={lengthMeterRef}
                                        onKeyDown={handleKeyPressLengthCM}
                                        onChange={e => setWallLengthMeter(e.target.value)} />Feet</span>
                                </div>
                                {error && wallLengthMeter.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className="Length-CM">

                                    <span><input
                                        type="number"
                                        value={wallLengthCM}
                                        placeholder='0'
                                        ref={lengthCMRef}
                                        onKeyDown={handleKeyPressHeightMeter}
                                        onChange={e => setWallLengthCM(e.target.value)} />Inches</span>
                                </div>
                                {error && wallLengthCM.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>
                        <div className="WallHeight">
                            <h3>Wall Height</h3>
                            <div className="Total-Height">
                                <div className="Height-Meter">

                                    <span><input
                                        type="number"
                                        value={wallHeightMeter}
                                        placeholder='10'
                                        ref={heightMeterRef}
                                        onKeyDown={handleKeyPressHeightCM}
                                        onChange={e => setWallHeightMeter(e.target.value)} />Feet</span>
                                </div>
                                {error && wallHeightMeter.length <= 0 ?
                                    <label>Feet not be empty (or) Enter "0"</label> : ""}
                                <div className="Height-CM">

                                    <span><input
                                        type="number"
                                        value={wallHeightCM}
                                        placeholder='0'
                                        ref={heightCMRef}
                                        onKeyDown={handleKeyPressThicknessMeter}
                                        onChange={e => setWallHeightCM(e.target.value)} />Inches</span>
                                </div>
                                {error && wallHeightCM.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>


                        </div>
                        <div className="WallThickness">
                            <h3>Wall Width</h3>
                            <div className="Total-Thickness">
                                <div className="Thickness-Meter">

                                    <span><input
                                        type="number"
                                        value={wallThicknessMeter}
                                        placeholder='0'
                                        ref={thicknessMeterRef}
                                        onKeyDown={handleKeyPressThicknessCM}
                                        onChange={e => setWallThicknessMeter(e.target.value)} />Feet</span>
                                </div>
                                {error && wallThicknessMeter.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className="Thickness-CM">

                                    <span><input
                                        type="number"
                                        value={wallThicknessCM}
                                        placeholder='9'
                                        ref={thicknessCMRef}
                                        onKeyDown={handleKeyPressBrickLength}
                                        onChange={e => setWallThicknessCM(e.target.value)} />Inches</span>
                                </div>
                                {error && wallThicknessCM.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}

                            </div>


                        </div>
                        <div className="Brick-Dimensions">
                            <h3>Size of Brick </h3>
                            <div className="BrickLength">
                                <h4>Brick Length</h4>

                                <span><input
                                    type="number"
                                    value={BrickLengthCM}
                                    placeholder='19'
                                    ref={brickLengthRef}
                                    onKeyDown={handleKeyPressBrickHeight}
                                    onChange={e => setBrickLengthCM(e.target.value)} />cm</span>
                            </div>
                            {error && BrickLengthCM.length <= 0 ?
                                <label>Length should not be empty (or) Enter "0"</label> : ""}

                            <div className="BrickHeight" >
                                <h4>Brick Height</h4>

                                <span><input
                                    type="number"
                                    value={BrickHeightCM}
                                    placeholder='9'
                                    ref={brickHeightRef}
                                    onKeyDown={handleKeyPressBrickThickness}
                                    onChange={e => setBrickHeightCM(e.target.value)} />cm</span>

                            </div>
                            {error && BrickHeightCM.length <= 0 ?
                                <label>Height should not be empty (or) Enter "0"</label> : ""}
                            <div className="WallThickness">
                                <h4>Brick Thickness</h4>

                                <span><input
                                    type="number"
                                    value={BrickThicknessCM}
                                    placeholder='9'
                                    ref={brickThicknessRef}
                                    onChange={e => setBrickThicknessCM(e.target.value)} />cm</span>

                            </div>
                            {error && BrickThicknessCM.length <= 0 ?
                                <label>Thickness should not be empty (or) Enter "0"</label> : ""}
                        </div>



                    </div>

                </div>
                <div className="Brick-Container-Left">
                    left
                    <div className="Brick_Ad">
                        here is google ads

                    </div>
                    <div className="Brick-Btn">
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
            <div className="BrickFeet-Bottom">
                Bottom
                <div className="Brick-Bottom-Left">
                    <div className="Brick-Required">
                        <h4>Total Bricks Required</h4>
                        <h3>{noOfBricks}</h3>
                    </div>
                    <div className="Brick-Volume">
                        <h4>
                            Volume of Construction
                        </h4>
                        <p> {volumeInMeter}m³ OR {volumeInFeet} ft³ </p>
                    </div>
                </div>
                <div className="Brick-Bottom-Right">
                    <div className="Brick-Table">
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
                                        Bricks
                                    </td>
                                    <td>
                                        {noOfBricks} Nos
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
                                        {sandTON} TON <span>({sandKG}kg)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            {/* <div className="Brick-Top">
                <div className="Brick-Container-Left">
                    This is meter
                    <div className="Unit-Container">

                        <div className="Ratio">
                            <p>Ratio(Cement : Sand)</p>
                            <span><input type="number" value={ratioCement} onChange={e => setRatioCement(e.target.value)} />Cement</span><p>:</p>
                            <span><input type="number" value={ratioSand} onChange={e => setRatioSand(e.target.value)} />Sand</span>

                        </div>


                        <div className="WallLength">
                            <p>Wall Length</p>

                            <span><input type="number" value={wallLengthMeter} onChange={e => setWallLengthMeter(e.target.value)} />Meter</span>
                            <span><input type="number" value={wallLengthCM} onChange={e => setWallLengthCM(e.target.value)} />CM</span>

                        </div>
                        <div className="WallHeight">
                            <p>Wall Height</p>

                            <span><input type="number" value={wallHeightMeter} onChange={e => setWallHeightMeter(e.target.value)} />Meter</span>
                            <span><input type="number" value={wallHeightCM} onChange={e => setWallHeightCM(e.target.value)} />CM</span>

                        </div>
                        <div className="WallThickness">
                            <p>Wall Width</p>

                            <span><input type="number" value={wallThicknessMeter} onChange={e => setWallThicknessMeter(e.target.value)} />Meter</span>
                            <span><input type="number" value={wallThicknessCM} onChange={e => setWallThicknessCM(e.target.value)} />CM</span>

                        </div>
                        <div className="Brick-Dimensions">
                            <h3>Size of Brick </h3>
                            <div className="BrickLength">
                                <p>Brick Length</p>

                                <span><input type="number" value={BrickLengthCM} onChange={e => setBrickLengthCM(e.target.value)} />cm</span>

                            </div>
                            <div className="BrickHeight" >
                                <p>Brick Height</p>

                                <span><input type="number" value={BrickHeightCM} onChange={e => setBrickHeightCM(e.target.value)} />cm</span>

                            </div>
                            <div className="WallThickness">
                                <p>Brick Thickness</p>

                                <span><input type="number" value={BrickThicknessCM} onChange={e => setBrickThicknessCM(e.target.value)} />cm</span>

                            </div>
                        </div>



                    </div>

                </div>
                <div className="Brick-Container-Right">
                    Right
                    <div className="Brick_Ad">
                        here is google ads

                    </div>
                    <div className="Brick-Btn">
                        <div className="Btn Calculate">
                            <button onClick={handleCalculate}>Calculate</button>
                        </div>
                        <div className="Btn Reset">
                            <button>Reset</button>
                        </div>
                        <div className="Btn MoreCalculation">
                            <button>Detail Cal.</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="ConstCost-Bottom">
                Bottom
                <div className="Brick-Bottom-Left">
                    <div className="Brick-Required">
                        <h4>Total Bricks Required</h4>
                        <h3>{noOfBricks}</h3>
                    </div>
                    <div className="Brick-Volume">
                        <h4>
                            Volume of Construction
                        </h4>
                        <p> {volumeInMeter}m³ OR {volumeInFeet} ft³ </p>
                    </div>
                </div>
                <div className="Brick-Bottom-Right">
                    <div className="Brick-Table">
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
                                        Bricks
                                    </td>
                                    <td>
                                        {noOfBricks} Nos
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
                                        {sandTON} TON <span>({sandKG}kg)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div> */}


        </>
    )
}

export default BrickMeter










