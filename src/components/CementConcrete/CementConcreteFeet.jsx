import React from 'react'
import { useState,useRef } from 'react'

const CementConcreteFeet = () => {

    const cementRef = useRef(null);
    const sandRef = useRef(null);
    const aggregateRef = useRef(null);
    const lengthFeetRef = useRef(null);
    const lengthInchesRef = useRef(null);
    const breadthFeetRef = useRef(null);
    const breadthInchesRef = useRef(null);
    const depthFeetRef = useRef(null);
    const depthInchesRef = useRef(null);



    const [cementRatio, setCementRatio] = useState('');
    const [sandRatio, setSandRatio] = useState('');
    const [aggregateRatio, setAggregateRatio] = useState('');
    const [lengthFeet, setLengthFeet] = useState("");
    const [lengthInches, setLengthInches] = useState("");
    const [breadthFeet, setBreadthFeet] = useState("");
    const [breadthInches, setBreadthInches] = useState("");
    const [depthFeet, setDepthFeet] = useState("");
    const [depthInches, setDepthInches] = useState("");
    const [volumeInFeet, setVolumeInFeet] = useState("0");
    const [volumeInMeter, setVolumeInMeter] = useState("0");
    const [cementBag, setCementBag] = useState("0");
    const [cementKG, setCementKG] = useState("0");
    const [sandTon, setSandTon] = useState("0");
    const [sandUnit, setSandUnit] = useState("0");
    const [aggregateTon, setAggregateTon] = useState("0");
    const [aggregateUnit, setAggregateUnit] = useState("0");
    const [error, setError] = useState(false);



    //To set Focus


    const handleKeyPressSand = (event) => {
        if (event.key === 'Enter') {
            sandRef.current.focus();
        }
    }
    const handleKeyPressAggregate = (event) => {
        if (event.key === 'Enter') {
            aggregateRef.current.focus();
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
    const handleKeyPressBreadthFeet = (event) => {
        if (event.key === 'Enter') {
            breadthFeetRef.current.focus();
        }
    }
    const handleKeyPressBreadthInches = (event) => {
        if (event.key === 'Enter') {
            breadthInchesRef.current.focus();
        }
    }
    const handleKeyPressDepthFeet = (event) => {
        if (event.key === 'Enter') {
            depthFeetRef.current.focus();
        }
    }
    const handleKeyPressDepthInches = (event) => {
        if (event.key === 'Enter') {
            depthInchesRef.current.focus();
        }
    }




    //To Perform reset action

    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setCementRatio("")
        setSandRatio("")
        setAggregateRatio("")
        setLengthFeet("");
        setLengthInches("");
        setBreadthFeet("");
        setBreadthInches("");
        setDepthFeet("");
        setDepthInches("");
        setVolumeInFeet("0");
        setVolumeInMeter("0");
        setCementBag("0");
        setCementKG("0");
        setSandTon("0");
        setSandUnit("0");
        setAggregateTon("0");
        setAggregateUnit("0");

    }

    //To Perform Calculte action


    const handleCalculate = (e) => {
        e.preventDefault();

        if (cementRatio.length == 0 || sandRatio.length == 0 ||aggregateRatio.length == 0 || lengthFeet.length == 0 || lengthInches.length == 0 || breadthFeet.length == 0 || breadthInches.length == 0 || depthFeet.length == 0 || depthInches.length == 0) {
            setError(true);

            setVolumeInFeet("0");
            setVolumeInMeter("0");
            setCementBag("0");
            setCementKG("0");
            setSandTon("0");
            setSandUnit("0");
            setAggregateTon("0");
            setAggregateUnit("0");
            return;

        }


        //Convert integer to number


        const cementRatioParse = parseFloat(cementRatio);
        const sandRatioParse = parseFloat(sandRatio);
        const aggregateRatioParse = parseFloat(aggregateRatio);
        const lengthFeetParse = parseFloat(lengthFeet);
        const lengthInchesParse = parseFloat(lengthInches);
        const breadthFeetParse = parseFloat(breadthFeet);
        const breadthInchesParse = parseFloat(breadthInches);
        const depthFeetParse = parseFloat(depthFeet);
        const depthInchesParse = parseFloat(depthInches);


        //Convert Feet to Meter



        const volumeInFeet = (lengthFeetParse + (lengthInchesParse / 12)) * (breadthFeetParse + (breadthInchesParse / 12)) * (depthFeetParse + (depthInchesParse / 12));
        console.log(volumeInFeet.toFixed(2))
        setVolumeInFeet(volumeInFeet.toFixed(2))


        const volumeInMeter = (volumeInFeet / 35.32);
        console.log(volumeInMeter.toFixed(4))
        setVolumeInMeter(volumeInMeter.toFixed(4));

        const wetVolumeMix = volumeInMeter + (volumeInMeter * 0.524);
        console.log(wetVolumeMix.toFixed(4));

        //Sum of Ratio

        const sumOfRatio = (cementRatioParse + sandRatioParse + aggregateRatioParse);
        console.log(sumOfRatio)



        //Amount of cement required

        const cementVolume = ((cementRatioParse / sumOfRatio) * wetVolumeMix);

        const cementBag = (cementVolume / 0.035);
        console.log(Math.ceil(cementBag));
        setCementBag(Math.ceil(cementBag));

        const cementKG = cementBag * 50;
        console.log(Math.ceil(cementKG));
        setCementKG(Math.ceil(cementKG));



        //Amount of sand required

        const sandVolume = ((sandRatioParse / sumOfRatio) * wetVolumeMix);

        const sandKG = (sandVolume * 1550);
        console.log(sandKG);

        // //1 cft = 45kg

        // const sandCft = sandKG/45;
        // console.log(sandCft);

        //Ton calculation
        const sandTon = (sandKG / 1000);

        console.log(sandTon.toFixed(2));
        setSandTon(sandTon.toFixed(2));

        //1 unit = 100 cft

        // const sandUnit=sandCft/100;
        // console.log(sandUnit.toFixed(2));

        // setSandUnit(sandUnit.toFixed(2))
        // console.log(sandUnit)


        const sandCft = ((sandRatio / sumOfRatio) * 1.524 * volumeInFeet)

        const sandUnit = sandCft / 100
        setSandUnit(sandUnit.toFixed(2));


        //Amount of aggregate required

        const aggregateVolume = ((aggregateRatioParse / sumOfRatio) * wetVolumeMix);
        console.log(aggregateVolume.toFixed(2))


        const aggregateKG = (aggregateVolume * 1350);

        const aggregateTon = (aggregateKG / 1000);

        console.log(aggregateTon.toFixed(2));
        setAggregateTon(aggregateTon.toFixed(2));

        //1 cft = 48.14kg

        // const aggregateCft = aggregateKG/48.14;
        // console.log(aggregateCft);

        // //1 unit = 100 cft

        // const aggregateUnit=aggregateCft/100;
        // console.log(aggregateUnit.toFixed(2));
        // setAggregateUnit(aggregateUnit.toFixed(2))
        // console.log(aggregateUnit)

        //Ton calculation

        const aggregateCft = ((aggregateRatio / sumOfRatio) * volumeInFeet * 1.524);
        const aggregateUnit = (aggregateCft / 100);
        setAggregateUnit(aggregateUnit.toFixed(2))





    }

    return (
        <>
            <div className="CementConcreteFeet-Top">
                <div className="CementConcreteFeet-Left">
                    <div className="Grade-Container">
                        <h3>Grade of Concrete</h3>
                        <div className="Total-Ratio">
                            <div className="Cement-Ratio">
                                <span><input
                                    type="number"
                                    value={cementRatio}
                                    placeholder='1'
                                    ref={cementRef}
                                    onKeyDown={handleKeyPressSand}
                                    onChange={e => setCementRatio(e.target.value)} />Cement</span>
                            </div>
                            {error && cementRatio.length <= 0?
                            <label>Cement Ratio should not be empty (or) Enter "0"</label> : ""}
                            <div className="Sand-Ratio">
                                <span><input
                                    type="number"
                                    value={sandRatio}
                                    placeholder='1.5'
                                    ref={sandRef}
                                    onKeyDown={handleKeyPressAggregate}
                                    onChange={e => setSandRatio(e.target.value)} />Sand</span>
                            </div>
                            {error && sandRatio.length <= 0?
                            <label>Sand Ratio should not be empty (or) Enter "0"</label> : ""}
                            <div className="Aggregate-Ratio">
                                <span><input
                                    type="number"
                                    value={aggregateRatio}
                                    placeholder='3'
                                    ref={aggregateRef}
                                    onKeyDown={handleKeyPressLengthFeet}
                                    onChange={e => setAggregateRatio(e.target.value)} />Aggregate</span>
                            </div>
                            {error && aggregateRatio.length <= 0?
                            <label>Aggregate Ratio should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        

                    </div>
                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='Feet-Input'>
                                <span><input
                                    type="number"
                                    placeholder="10"
                                    value={lengthFeet}
                                    onKeyDown={handleKeyPressLengthInches}
                                    ref={lengthFeetRef}

                                    onChange={e => setLengthFeet(e.target.value)} />Feet</span>
                            </div>
                            {error && lengthFeet.length <= 0 ?
                                <label>Feet should not be empty (or) Enter "0"</label> : ""}
                            <div className='Inches-Input'>
                                <span><input
                                    type="number"
                                    placeholder="0"
                                    value={lengthInches}
                                    ref={lengthInchesRef}
                                    onKeyDown={handleKeyPressBreadthFeet}
                                    onChange={e => setLengthInches(e.target.value)} />Inches</span>
                            </div>
                            {error && lengthInches.length <= 0 ?
                                <label>Inches should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                            <h3>Width</h3>
                            <div className="Breadth-Input">
                                <div className='Feet-Input'>
                                    <span><input
                                        type="number"
                                        placeholder="10"
                                        value={breadthFeet}
                                        ref={breadthFeetRef}
                                        onKeyDown={handleKeyPressBreadthInches}
                                        onChange={e => setBreadthFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && breadthFeet.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='Inches-Input'>
                                    <span><input 
                                    type="number" 
                                    placeholder="0" 
                                    value={breadthInches} 
                                    ref={breadthInchesRef}
                                        onKeyDown={handleKeyPressDepthFeet}
                                    onChange={e => setBreadthInches(e.target.value)} />Inches</span>
                                </div>
                                {error && breadthInches.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>
                        <div className="Depth-Container">
                            <h3>Depth</h3>
                            <div className="Depth-Input">
                                <div className='Feet-Input'>
                                    <span><input 
                                    type="number" 
                                    placeholder="0" 
                                    value={depthFeet} 
                                    ref={depthFeetRef}
                                        onKeyDown={handleKeyPressDepthInches}
                                    onChange={e => setDepthFeet(e.target.value)} />Feet</span>
                                </div>
                                {error && depthFeet.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='Inches-Input'>
                                    <span><input 
                                    type="number" 
                                    placeholder="6" 
                                    value={depthInches} 
                                    ref={depthInchesRef}
                                    onChange={e => setDepthInches(e.target.value)} />Inches</span>
                                </div>
                                {error && depthInches.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>


                    </div>


                </div>
                <div className="CementConcreteFeet-Right">
                    Right
                    <div className="CementConcreteFeet-Ads">
                        here is google ads

                    </div>
                    <div className="CementConcreteFeet-Btn">
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

            <div className="CementConcreteFeet-Bottom">
                Bottom
                <div className="Tiles-Bottom-Left">

                    <div className="Tiles-Volume">
                        <h4>
                            Volume of Construction \^2
                        </h4>
                        <p> {volumeInMeter}m² OR {volumeInFeet} ft² </p>
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
                                        Cement
                                    </td>
                                    <td>
                                        {cementBag} Bag <span>({cementKG}kg)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        Sand
                                    </td>
                                    <td>
                                        {sandTon}Ton <span>{sandUnit}Unit</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        Aggregate
                                    </td>
                                    <td>
                                        {aggregateTon} Ton <span>{aggregateUnit} Unit</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>(1 Unit = 100 CFT)</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CementConcreteFeet