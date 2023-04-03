import React from 'react'
import { useState, useRef } from 'react'
import './CementConcreteMeter.css'


const CementConcreteMeter = () => {

    const cementRef = useRef(null);
    const sandRef = useRef(null);
    const aggregateRef = useRef(null);
    const lengthMeterRef = useRef(null);
    const lengthCMRef = useRef(null);
    const breadthMeterRef = useRef(null);
    const breadthCMRef = useRef(null);
    const depthMeterRef = useRef(null);
    const depthCMRef = useRef(null);

    const [cementRatio, setCementRatio] = useState('');
    const [sandRatio, setSandRatio] = useState('');
    const [aggregateRatio, setAggregateRatio] = useState('');
    const [lengthMeter, setLengthMeter] = useState("");
    const [lengthCM, setLengthCM] = useState("");
    const [breadthMeter, setBreadthMeter] = useState("");
    const [breadthCM, setBreadthCM] = useState("");
    const [depthMeter, setDepthMeter] = useState("");
    const [depthCM, setDepthCM] = useState("");
    const [volumeInFeet, setVolumeInFeet] = useState("0");
    const [volumeInMeter, setVolumeInMeter] = useState("0");
    const [cementBag, setCementBag] = useState("0");
    const [cementKG, setCementKG] = useState("0");
    const [sandTon, setSandTon] = useState("0");
    const [sandUnit, setSandUnit] = useState("0");
    const [aggregateTon, setAggregateTon] = useState("0");
    const [aggregateUnit, setAggregateUnit] = useState("0");
    const [error, setError] = useState(false);




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
    const handleKeyPressBreadthMeter = (event) => {
        if (event.key === 'Enter') {
            breadthMeterRef.current.focus();
        }
    }
    const handleKeyPressBreadthCM = (event) => {
        if (event.key === 'Enter') {
            breadthCMRef.current.focus();
        }
    }
    const handleKeyPressDepthMeter = (event) => {
        if (event.key === 'Enter') {
            depthMeterRef.current.focus();
        }
    }
    const handleKeyPressDepthCM = (event) => {
        if (event.key === 'Enter') {
            depthCMRef.current.focus();
        }
    }





    //To Perform reset action


    const handleReset = (e) => {
        e.preventDefault();
        console.log("value cleared");
        setCementRatio("")
        setSandRatio("")
        setAggregateRatio("")
        setLengthMeter("");
        setLengthCM("");
        setBreadthMeter("");
        setBreadthCM("");
        setDepthMeter("");
        setDepthCM("");
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

        if (cementRatio.length == 0 || sandRatio.length == 0 ||aggregateRatio.length == 0 ||lengthMeter.length == 0 || lengthCM.length == 0 || breadthMeter.length == 0 || breadthCM.length == 0 || depthMeter.length == 0 || depthCM.length == 0) {
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
        const lengthMeterParse = parseFloat(lengthMeter);
        const lengthCMParse = parseFloat(lengthCM);
        const breadthMeterParse = parseFloat(breadthMeter);
        const breadthCMParse = parseFloat(breadthCM);
        const depthMeterParse = parseFloat(depthMeter);
        const depthCMParse = parseFloat(depthCM);


        //Convert Feet to Meter


        const volumeInMeter = ((lengthMeterParse + (lengthCMParse / 100)) * (breadthMeterParse + (breadthCMParse / 100)) * (depthMeterParse + (depthCMParse / 100)));
        console.log(volumeInMeter.toFixed(4))
        setVolumeInMeter(volumeInMeter.toFixed(2));


        const volumeInFeet = (volumeInMeter * 35.3147);
        console.log(volumeInFeet.toFixed(4))
        setVolumeInFeet(volumeInFeet.toFixed(2))

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
                                    ref={aggregateRef}
                                    onKeyDown={handleKeyPressLengthMeter}
                                    placeholder='3'
                                    onChange={e => setAggregateRatio(e.target.value)} />Aggregate</span>
                            </div>
                            {error && aggregateRatio.length <= 0?
                            <label>Aggregate Ratio should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        

                    </div>
                    <div className="Length-Container">
                        <h3>Length</h3>
                        <div className="Length-Input">
                            <div className='Meter-Input'>
                                <span><input
                                    type="number"
                                    placeholder="10"
                                    ref={lengthMeterRef}
                                    onKeyDown={handleKeyPressLengthCM}
                                    value={lengthMeter}
                                    onChange={e => setLengthMeter(e.target.value)} />Meter</span>
                            </div>
                            {error && lengthMeter.length <= 0 ?
                                <label>Feet should not be empty (or) Enter "0"</label> : ""}
                            <div className='CM-Input'>
                                <span><input
                                    type="number"
                                    placeholder="0"
                                    value={lengthCM}
                                    ref={lengthCMRef}
                                    onKeyDown={handleKeyPressBreadthMeter}
                                    onChange={e => setLengthCM(e.target.value)} />CM</span>
                            </div>
                            {error && lengthCM.length <= 0 ?
                                <label>Inches should not be empty (or) Enter "0"</label> : ""}
                        </div>
                        <div className="Breadth-Container">
                            <h3>Width</h3>
                            <div className="Breadth-Input">
                                <div className='Meter-Input'>
                                    <span><input
                                        type="number"
                                        placeholder="10"
                                        value={breadthMeter}
                                        ref={breadthMeterRef}
                                        onKeyDown={handleKeyPressBreadthCM}
                                        onChange={e => setBreadthMeter(e.target.value)} />Meter</span>
                                </div>
                                {error && breadthMeter.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='CM-Input'>
                                    <span><input
                                        type="number"
                                        placeholder="0"
                                        value={breadthCM}
                                        ref={breadthCMRef}
                                        onKeyDown={handleKeyPressDepthMeter}
                                        onChange={e => setBreadthCM(e.target.value)} />CM</span>
                                </div>
                                {error && breadthCM.length <= 0 ?
                                    <label>Inches should not be empty (or) Enter "0"</label> : ""}
                            </div>
                        </div>
                        <div className="Depth-Container">
                            <h3>Depth</h3>
                            <div className="Depth-Input">
                                <div className='Meter-Input'>
                                    <span><input
                                        type="number"
                                        placeholder="0"
                                        value={depthMeter}
                                        ref={depthMeterRef}
                                        onKeyDown={handleKeyPressDepthCM}

                                        onChange={e => setDepthMeter(e.target.value)} />Meter</span>
                                </div>
                                {error && depthMeter.length <= 0 ?
                                    <label>Feet should not be empty (or) Enter "0"</label> : ""}
                                <div className='CM-Input'>
                                    <span><input
                                        type="number"
                                        placeholder="6"
                                        value={depthCM}
                                        ref={depthCMRef}
                                        onChange={e => setDepthCM(e.target.value)} />CM</span>
                                </div>
                                {error && depthCM.length <= 0 ?
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
                            Volume of Construction
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

export default CementConcreteMeter


