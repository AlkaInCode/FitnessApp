import React, { useState } from 'react';

const SettingsComponent = () => {
  // States to keep track of range values
  const [tokenValue, setTokenValue] = useState(30); // Assuming default value of 30
  const [creditValue, setCreditValue] = useState(40); // Assuming default value of 40
  const [timelineValue, setTimelineValue] = useState(15); // Default value
  const [timelineUnit, setTimelineUnit] = useState('days');

  const handleTimelineChange = (value) => {
    // Convert value to a number since input type="range" returns a string
    const numericValue = Number(value);
    setTimelineValue(numericValue);

    if (numericValue <= 30) {
      setTimelineUnit('days');
    } else if (numericValue <= 60) {
      setTimelineUnit('weeks');
    } else {
      setTimelineUnit('a month');
    }
  };

  return (
    <div className="settings-container" style={{ padding: '20px' }}>
      <h2 style={{ fontWeight: 'bold' }}>Filters</h2>
      <div className="settings-item" style={{ marginBottom: '10px' }}>
        <label htmlFor="location" style={{ fontWeight: 'bold' }}>• Location</label>
        <input type="text" id="location" placeholder="Enter your location" />
      </div>
      <div className="settings-item" style={{ marginBottom: '10px' }}>
        <label htmlFor="pin" style={{ fontWeight: 'bold' }}>• PIN</label>
        <input type="text" id="pin" placeholder="Enter your PIN code" />
      </div>
      <div className="settings-item" style={{ marginBottom: '10px' }}>
        <label htmlFor="space" style={{ fontWeight: 'bold' }}>• Space</label>
        <input type="text" id="space" placeholder="Gym/Travel/Event/etc." />
      </div>
      {/* Rewards label was empty in the original code. Added bold style. */}
      <div className="settings-item" style={{ marginBottom: '10px' }}>
        <label style={{ fontWeight: 'bold' }}>• Rewards</label>
      </div>

      <div className="settings-item" style={{ marginBottom: '10px' }}>
        <label htmlFor="token" style={{ fontWeight: 'bold' }}>Token ({tokenValue})</label>
        <input
          type="range"
          id="token"
          min="0"
          max="100"
          value={tokenValue}
          onChange={(e) => setTokenValue(Number(e.target.value))}
        />
      </div>
      <div className="settings-item">
        <label htmlFor="credit" style={{ fontWeight: 'bold' }}>Credit ({creditValue})</label>
        <input
          type="range"
          id="credit"
          min="0"
          max="100"
          value={creditValue}
          onChange={(e) => setCreditValue(Number(e.target.value))}
        />
      </div>
      <div className="settings-item" style={{ marginBottom: '20px' }}>
        <label htmlFor="timeline" style={{ fontWeight: 'bold' }}>Timeline</label>
        <input
          type="range"
          id="timeline"
          min="0"
          max="100"
          value={timelineValue}
          onChange={(e) => handleTimelineChange(e.target.value)}
        />
        <span style={{ fontWeight: 'bold' }}>{`${timelineValue} ${timelineUnit} to accomplish`}</span>
      </div>
      
      <button type="button" style={{ marginTop: '20px', padding: '10px 20px', width: 'auto' }}>Save</button>
    </div>
  );
};

export default SettingsComponent;
