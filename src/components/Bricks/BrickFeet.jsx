
import React from 'react'
import { useState, useRef } from 'react'

const BrickFeet = () => {


    const cementRef = useRef(null);
    const sandRef = useRef(null);
    const lengthFeetRef = useRef(null);
    const lengthInchesRef = useRef(null);
    const heightFeetRef = useRef(null);
    const heightInchesRef = useRef(null);
    const thicknessFeetRef = useRef(null);
    const thicknessInchesRef = useRef(null);
    const brickLengthRef = useRef(null);
    const brickHeightRef = useRef(null);
    const brickThicknessRef = useRef(null);



    const [ratioCement, setRatioCement] = useState('');
    const [ratioSand, setRatioSand] = useState('');
    const [wallLengthFeet, setWallLengthFeet] = useState("");
    const [wallLengthInches, setWallLengthInches] = useState("");
    const [wallHeightFeet, setWallHeightFeet] = useState("");
    const [wallHeightInches, setWallHeightInches] = useState("");
    const [wallThicknessFeet, setWallThicknessFeet] = useState("");
    const [wallThicknessInches, setWallThicknessInches] = useState("");
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
    const handleKeyPressLengthFeet = (event) => {
        if (event.key === 'Enter') {
            lengthFeetRef.current.focus();
        }
    }
    const handleKeyPressLengthInches = (event) => {
        if (event.key === 'Enter') {
            lengthInchesRef.current.focus();
        }
    }
    const handleKeyPressHeightFeet = (event) => {
        if (event.key === 'Enter') {
            heightFeetRef.current.focus();
        }
    }
    const handleKeyPressHeightInches = (event) => {
        if (event.key === 'Enter') {
            heightInchesRef.current.focus();
        }
    }
    const handleKeyPressThicknessFeet = (event) => {
        if (event.key === 'Enter') {
            thicknessFeetRef.current.focus();
        }
    }
    const handleKeyPressThicknessInches = (event) => {
        if (event.key === 'Enter') {
            thicknessInchesRef.current.focus();
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
        setWallLengthFeet("")
        setWallLengthInches("");
        setWallHeightFeet("");
        setWallHeightInches("");
        setWallThicknessFeet("");
        setWallThicknessInches("");
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


        if (ratioCement.length == 0 || ratioSand.length == 0 || wallLengthFeet.length == 0 || wallLengthInches.length == 0 || wallHeightFeet.length == 0 || wallHeightInches.length == 0 || wallThicknessFeet.length == 0 || wallThicknessInches.length == 0 || BrickLengthCM.length == 0 || BrickHeightCM.length == 0 || BrickThicknessCM.length == 0) {
            setError(true);

            setVolumeInFeet("0");
            setVolumeInMeter("0");
            SetCementBag("0");
            SetCementKG("0");
            SetSandTON("0");
            SetSandKG("0");
            return;

        }







        const wallLengthFeetParse = parseFloat(wallLengthFeet);
        const wallLengthInchesParse = parseFloat(wallLengthInches);
        const wallHeightFeetParse = parseFloat(wallHeightFeet);
        const wallHeightInchesParse = parseFloat(wallHeightInches);
        const wallThicknessFeetParse = parseFloat(wallThicknessFeet);
        const wallThicknessInchesParse = parseFloat(wallThicknessInches);
        const ratioCementParse = parseFloat(ratioCement);
        const ratioSandParse = parseFloat(ratioSand);


        //To Find Volume of Brickmasonry in Meter


        const BrickMasonryLengthMeter = ((wallLengthFeetParse + (wallLengthInchesParse / 12)) / 3.281).toFixed(2);
        const BrickMasonryHeightMeter = ((wallHeightFeetParse + (wallHeightInchesParse / 12)) / 3.281).toFixed(2);
        const BrickMasonryThicknessMeter = ((wallThicknessFeetParse + (wallThicknessInchesParse / 12)) / 3.281).toFixed(2);
        const BrickMasonryVolume = ((BrickMasonryLengthMeter * BrickMasonryHeightMeter * BrickMasonryThicknessMeter).toFixed(2));
        console.log((BrickMasonryVolume));

        setVolumeInMeter(BrickMasonryVolume);


        //To Find Volume of Brickmasonry in Feet

        const BrickMasonryLengthFeet = ((wallLengthFeetParse + (wallLengthInchesParse / 12))).toFixed(2);
        const BrickMasonryHeightFeet = ((wallHeightFeetParse + (wallHeightInchesParse / 12))).toFixed(2);
        const BrickMasonryThicknessFeet = ((wallThicknessFeetParse + (wallThicknessInchesParse / 12))).toFixed(2);
        const BrickMasonryVolumeFeet = ((BrickMasonryLengthFeet * BrickMasonryHeightFeet * BrickMasonryThicknessFeet).toFixed(2));
        console.log((BrickMasonryVolumeFeet));

        setVolumeInFeet((BrickMasonryVolumeFeet));



        //To Find Volume of Bricksize in CM


        const BrickLengthCMParse = parseFloat(BrickLengthCM);
        const BrickHeightCMParse = parseFloat(BrickHeightCM);
        const BrickThicknessCMParse = parseFloat(BrickThicknessCM);


        //To Find Volume of Brick with mortar and without mortar


        const BrickWithMortar = (((BrickLengthCMParse / 100) + 0.01) * ((BrickHeightCMParse / 100) + 0.01) * ((BrickThicknessCMParse / 100) + 0.01));
        const BrickWithoutMortar = ((BrickLengthCMParse / 100) * (BrickHeightCMParse / 100) * (BrickThicknessCMParse / 100));

        console.log(BrickWithMortar);
        console.log(BrickWithoutMortar);

        //To Find No of Brick 


        const NoOfBricks = BrickMasonryVolume / BrickWithMortar;
        console.log(Math.ceil(NoOfBricks));
        setNoOfBricks(Math.ceil(NoOfBricks));

        const BricksMortarVolume = ((NoOfBricks) * (BrickWithoutMortar));
        console.log(BricksMortarVolume);



        //Quantity of Mortar

        const MortarQuantity = ((BrickMasonryVolume) - (BricksMortarVolume));
        console.log(MortarQuantity);


        //Add 15% more for wastage, Non - uniform thickness of mortar joins

        const MortarQuantity15 = (MortarQuantity + (MortarQuantity * 0.15));
        console.log(MortarQuantity15)


        //Add 25% more for wastage, Non - uniform thickness of mortar joins

        const MortarQuantity25 = (MortarQuantity15 + (MortarQuantity15 * 0.25));
        console.log(MortarQuantity25)

        //Amount of Cement Calculate

        const SumOfRatio = ratioCementParse + ratioSandParse;
        console.log(SumOfRatio);

        const CementAmount = (ratioCementParse / SumOfRatio) * MortarQuantity25;
        console.log(CementAmount);

        //1 Bag of Cement = 0.035 m3
        const CementAmountBag = CementAmount * 28.58;
        SetCementBag(Math.ceil(CementAmountBag));
        console.log(CementAmountBag)

        const CementAmountKG = CementAmountBag * 50;
        SetCementKG(Math.ceil(CementAmountKG));
        console.log(CementAmountKG)

        //Amount of Sand Calculate

        const SandAmount = (ratioSandParse / SumOfRatio) * MortarQuantity25;
        console.log(SandAmount);

        //By Considering dry loose bulk density of sand 1500 kg/m3

        const SandAmountKG = SandAmount * 1500;
        SetSandKG(Math.ceil(SandAmountKG));
        console.log(SandAmountKG)

        const SandAmountTON = SandAmountKG / 1000;
        SetSandTON(SandAmountTON.toFixed(2));
        console.log(SandAmountTON)


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
                                        onKeyDown={handleKeyPressLengthFeet}
                                        onChange={e => setRatioSand(e.target.value)} />Sand</span>
                                </div>
                                {error && ratioSand.length <= 0 ?
                                    <label>Sand Ratio should not be empty (or) Enter "0"</label> : ""}
                            </div>

                        </div>
                        <div className="WallLength">
                            <h3>Wall Length</h3>
                            <div className="Total-Length">
                                <div className="Length-Feet">
                                    <span><input
                                        type="number"
                                        value={wallLengthFeet}
                                        placeholder='10'
                                        ref={lengthFeetRef}
                                        onKeyDown={handleKeyPressLengthInches}
                                        onChange={e => setWallLengthFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && wallLengthFeet.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className="Length-Inches">

                                    <span><input
                                        type="number"
                                        value={wallLengthInches}
                                        placeholder='0'
                                        ref={lengthInchesRef}
                                        onKeyDown={handleKeyPressHeightFeet}
                                        onChange={e => setWallLengthInches(e.target.value)} />Inches</span>
                                </div>
                                {error && wallLengthInches.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>
                        <div className="WallHeight">
                            <h3>Wall Height</h3>
                            <div className="Total-Height">
                                <div className="Height-Feet">

                                    <span><input
                                        type="number"
                                        value={wallHeightFeet}
                                        placeholder='10'
                                        ref={heightFeetRef}
                                        onKeyDown={handleKeyPressHeightInches}
                                        onChange={e => setWallHeightFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && wallHeightFeet.length <= 0 ?
                                    <label>Feet not be empty (or) Enter "0"</label> : ""}
                                <div className="Height-Inches">

                                    <span><input
                                        type="number"
                                        value={wallHeightInches}
                                        placeholder='0'
                                        ref={heightInchesRef}
                                        onKeyDown={handleKeyPressThicknessFeet}
                                        onChange={e => setWallHeightInches(e.target.value)} />Inches</span>
                                </div>
                                {error && wallHeightInches.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>


                        </div>
                        <div className="WallThickness">
                            <h3>Wall Width</h3>
                            <div className="Total-Thickness">
                                <div className="Thickness-Feet">

                                    <span><input
                                        type="number"
                                        value={wallThicknessFeet}
                                        placeholder='0'
                                        ref={thicknessFeetRef}
                                        onKeyDown={handleKeyPressThicknessInches}
                                        onChange={e => setWallThicknessFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && wallThicknessFeet.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className="Thickness-Inches">

                                    <span><input
                                        type="number"
                                        value={wallThicknessInches}
                                        placeholder='9'
                                        ref={thicknessInchesRef}
                                        onKeyDown={handleKeyPressBrickLength}
                                        onChange={e => setWallThicknessInches(e.target.value)} />Inches</span>
                                </div>
                                {error && wallThicknessInches.length <= 0 ?
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


        </>
    )
}

export default BrickFeet




// import React from 'react'
// import { useState } from 'react'

// const BrickFeet = () => {

//     const [ratioCement, setRatioCement] = useState('1');
//     const [ratioSand, setRatioSand] = useState('6');
//     const [wallLengthFeet, setWallLengthFeet] = useState("10");
//     const [wallLengthInches, setWallLengthInches] = useState("0");
//     const [wallHeightFeet, setWallHeightFeet] = useState("10");
//     const [wallHeightInches, setWallHeightInches] = useState("0");
//     const [wallThicknessFeet, setWallThicknessFeet] = useState("0");
//     const [wallThicknessInches, setWallThicknessInches] = useState("9");
//     const [BrickLengthCM, setBrickLengthCM] = useState("19");
//     const [BrickHeightCM, setBrickHeightCM] = useState("9");
//     const [BrickThicknessCM, setBrickThicknessCM] = useState("9");
//     const [noOfBricks, setNoOfBricks] = useState("1070");
//     const [volumeInMeter, setVolumeInMeter] = useState("2.14");
//     const [volumeInFeet, setVolumeInFeet] = useState("75.00");
//     const [cementBag, SetCementBag] = useState("3");
//     const [cementKG, SetCementKG] = useState("145");
//     const [sandTON, SetSandTON] = useState("0.91");
//     const [sandKG, SetSandKG] = useState("912");

//     const handleCalculate = (e) => {
//         e.preventDefault();




//         const wallLengthFeetParse = parseFloat(wallLengthFeet);
//         const wallLengthInchesParse = parseFloat(wallLengthInches);
//         const wallHeightFeetParse = parseFloat(wallHeightFeet);
//         const wallHeightInchesParse = parseFloat(wallHeightInches);
//         const wallThicknessFeetParse = parseFloat(wallThicknessFeet);
//         const wallThicknessInchesParse = parseFloat(wallThicknessInches);
//         const ratioCementParse = parseFloat(ratioCement);
//         const ratioSandParse = parseFloat(ratioSand);


//         //To Find Volume of Brickmasonry in Meter


//         const BrickMasonryLengthMeter = ((wallLengthFeetParse + (wallLengthInchesParse / 12)) / 3.281).toFixed(2);
//         const BrickMasonryHeightMeter = ((wallHeightFeetParse + (wallHeightInchesParse / 12)) / 3.281).toFixed(2);
//         const BrickMasonryThicknessMeter = ((wallThicknessFeetParse + (wallThicknessInchesParse / 12)) / 3.281).toFixed(2);
//         const BrickMasonryVolume = ((BrickMasonryLengthMeter * BrickMasonryHeightMeter * BrickMasonryThicknessMeter).toFixed(2));
//         console.log((BrickMasonryVolume));

//         setVolumeInMeter(BrickMasonryVolume);


//         //To Find Volume of Brickmasonry in Feet

//         const BrickMasonryLengthFeet = ((wallLengthFeetParse + (wallLengthInchesParse / 12))).toFixed(2);
//         const BrickMasonryHeightFeet = ((wallHeightFeetParse + (wallHeightInchesParse / 12))).toFixed(2);
//         const BrickMasonryThicknessFeet = ((wallThicknessFeetParse + (wallThicknessInchesParse / 12))).toFixed(2);
//         const BrickMasonryVolumeFeet = ((BrickMasonryLengthFeet * BrickMasonryHeightFeet * BrickMasonryThicknessFeet).toFixed(2));
//         console.log((BrickMasonryVolumeFeet));

//         setVolumeInFeet((BrickMasonryVolumeFeet));



//         //To Find Volume of Bricksize in CM


//         const BrickLengthCMParse = parseFloat(BrickLengthCM);
//         const BrickHeightCMParse = parseFloat(BrickHeightCM);
//         const BrickThicknessCMParse = parseFloat(BrickThicknessCM);


//         //To Find Volume of Brick with mortar and without mortar


//         const BrickWithMortar = (((BrickLengthCMParse / 100) + 0.01) * ((BrickHeightCMParse / 100) + 0.01) * ((BrickThicknessCMParse / 100) + 0.01));
//         const BrickWithoutMortar = ((BrickLengthCMParse / 100) * (BrickHeightCMParse / 100) * (BrickThicknessCMParse / 100));

//         console.log(BrickWithMortar);
//         console.log(BrickWithoutMortar);

//         //To Find No of Brick


//         const NoOfBricks = BrickMasonryVolume / BrickWithMortar;
//         console.log(Math.ceil(NoOfBricks));
//         setNoOfBricks(Math.ceil(NoOfBricks));

//         const BricksMortarVolume = ((NoOfBricks) * (BrickWithoutMortar));
//         console.log(BricksMortarVolume);


//         // if(ratio==="1:4"){
//         //     return 2+2;

//         // }

//         //Quantity of Mortar

//         const MortarQuantity = ((BrickMasonryVolume) - (BricksMortarVolume));
//         console.log(MortarQuantity);


//         //Add 15% more for wastage, Non - uniform thickness of mortar joins

//         const MortarQuantity15 = (MortarQuantity + (MortarQuantity * 0.15));
//         console.log(MortarQuantity15)


//         //Add 25% more for wastage, Non - uniform thickness of mortar joins

//         const MortarQuantity25 = (MortarQuantity15 + (MortarQuantity15 * 0.25));
//         console.log(MortarQuantity25)

//         //Amount of Cement Calculate

//         const SumOfRatio = ratioCementParse + ratioSandParse;
//         console.log(SumOfRatio);

//         const CementAmount = (ratioCementParse / SumOfRatio) * MortarQuantity25;
//         console.log(CementAmount);

//         //1 Bag of Cement = 0.035 m3
//         const CementAmountBag = CementAmount * 28.58;
//         SetCementBag(Math.ceil(CementAmountBag));
//         console.log(CementAmountBag)

//         const CementAmountKG = CementAmountBag * 50;
//         SetCementKG(Math.ceil(CementAmountKG));
//         console.log(CementAmountKG)

//         //Amount of Sand Calculate

//         const SandAmount = (ratioSandParse / SumOfRatio) * MortarQuantity25;
//         console.log(SandAmount);

//         //By Considering dry loose bulk density of sand 1500 kg/m3

//         const SandAmountKG = SandAmount * 1500;
//         SetSandKG(Math.ceil(SandAmountKG));
//         console.log(SandAmountKG)

//         const SandAmountTON = SandAmountKG / 1000;
//         SetSandTON(SandAmountTON.toFixed(2));
//         console.log(SandAmountTON)


//     }

//     return (
//         <>


//             <div className="Brick-Top">
//                 <div className="Brick-Container-Left">
//                     left
//                     <div className="Unit-Container">

//                         <div className="Ratio">
//                             <p>Ratio(Cement : Sand)</p>
//                             <span><input type="number" value={ratioCement} onChange={e => setRatioCement(e.target.value)} />Cement</span><p>:</p>
//                             <span><input type="number" value={ratioSand} onChange={e => setRatioSand(e.target.value)} />Sand</span>

//                         </div>
//                         <div className="WallLength">
//                             <p>Wall Length</p>

//                             <span><input type="number" value={wallLengthFeet} onChange={e => setWallLengthFeet(e.target.value)} />Feet</span>
//                             <span><input type="number" value={wallLengthInches} onChange={e => setWallLengthInches(e.target.value)} />Inches</span>

//                         </div>
//                         <div className="WallHeight">
//                             <p>Wall Height</p>

//                             <span><input type="number" value={wallHeightFeet} onChange={e => setWallHeightFeet(e.target.value)} />Feet</span>
//                             <span><input type="number" value={wallHeightInches} onChange={e => setWallHeightInches(e.target.value)} />Inches</span>

//                         </div>
//                         <div className="WallThickness">
//                             <p>Wall Width</p>

//                             <span><input type="number" value={wallThicknessFeet} onChange={e => setWallThicknessFeet(e.target.value)} />Feet</span>
//                             <span><input type="number" value={wallThicknessInches} onChange={e => setWallThicknessInches(e.target.value)} />Inches</span>

//                         </div>
//                         <div className="Brick-Dimensions">
//                             <h3>Size of Brick </h3>
//                             <div className="BrickLength">
//                                 <p>Brick Length</p>

//                                 <span><input type="number" value={BrickLengthCM} onChange={e => setBrickLengthCM(e.target.value)} />cm</span>

//                             </div>
//                             <div className="BrickHeight" >
//                                 <p>Brick Height</p>

//                                 <span><input type="number" value={BrickHeightCM} onChange={e => setBrickHeightCM(e.target.value)} />cm</span>

//                             </div>
//                             <div className="WallThickness">
//                                 <p>Brick Thickness</p>

//                                 <span><input type="number" value={BrickThicknessCM} onChange={e => setBrickThicknessCM(e.target.value)} />cm</span>

//                             </div>
//                         </div>



//                     </div>

//                 </div>
//                 <div className="Brick-Container-Left">
//                     left
//                     <div className="Brick_Ad">
//                         here is google ads

//                     </div>
//                     <div className="Brick-Btn">
//                         <div className="Btn Calculate">
//                             <button onClick={handleCalculate}>Calculate</button>
//                         </div>
//                         <div className="Btn Reset">
//                             <button>Reset</button>
//                         </div>
//                         <div className="Btn MoreCalculation">
//                             <button>Detail Cal.</button>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//             <div className="BrickFeet-Bottom">
//                 Bottom
//                 <div className="Brick-Bottom-Left">
//                     <div className="Brick-Required">
//                         <h4>Total Bricks Required</h4>
//                         <h3>{noOfBricks}</h3>
//                     </div>
//                     <div className="Brick-Volume">
//                         <h4>
//                             Volume of Construction
//                         </h4>
//                         <p> {volumeInMeter}m³ OR {volumeInFeet} ft³ </p>
//                     </div>
//                 </div>
//                 <div className="Brick-Bottom-Right">
//                     <div className="Brick-Table">
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         S.No
//                                     </td>
//                                     <td>
//                                         Material
//                                     </td>
//                                     <td>
//                                         Quantity
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         1.
//                                     </td>
//                                     <td>
//                                         Bricks
//                                     </td>
//                                     <td>
//                                         {noOfBricks} Nos
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         2
//                                     </td>
//                                     <td>
//                                         Cement
//                                     </td>
//                                     <td>
//                                         {cementBag} Bag <span>({cementKG}kg)</span>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         3
//                                     </td>
//                                     <td>
//                                         Sand
//                                     </td>
//                                     <td>
//                                         {sandTON} TON <span>({sandKG}kg)</span>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//             </div>


//         </>
//     )
// }

// export default BrickFeet

























