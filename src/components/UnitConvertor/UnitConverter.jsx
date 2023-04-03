import React, { useState } from 'react';
import convert from 'convert-units';

const UnitConverter = () => {
  const [unitFrom, setUnitFrom] = useState('inch');
  const [unitTo, setUnitTo] = useState('cm');
  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const units = convert().possibilities();

  const handleValueChange = (e) => {
    setValue(e.target.value);
    setConvertedValue(convert(e.target.value).from(unitFrom).to(unitTo));
  }

  return (
    <div>
      <label>
        Convert from:
        <select value={unitFrom} onChange={e => setUnitFrom(e.target.value)}>
          {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
        </select>
      </label>
      <br />
      <label>
        Convert to:
        <select value={unitTo} onChange={e => setUnitTo(e.target.value)}>
          {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
        </select>
      </label>
      <br />
      <label>
        Value:
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
        />
      </label>
      <br />
      <label>
        Converted Value:
        <input
          type="number"
          value={convertedValue}
          readOnly
        />
      </label>
    </div>
  );
};

export default UnitConverter;
