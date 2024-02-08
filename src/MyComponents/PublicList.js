// PublicList.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CustomIcon from './CustomIcon.webp';

const PublicList = () => {
  const [publicItems, setPublicItems] = useState([]);
  const [newEventName, setNewEventName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [eventSphere, setEventSphere] = useState('');
  const [buddySphere, setBuddySphere] = useState('');

  const addPublicItem = () => {
    if (!newEventName) return; // Don't add if the input is empty
    const newItem = {
      id: Date.now(), // unique identifier for each new item
      text: newEventName
    };
    setPublicItems([...publicItems, newItem]); // Add the new item to the list
    setNewEventName(''); // Clear the input field
  };

  const deletePublicItem = (id) => {
    setPublicItems(publicItems.filter(item => item.id !== id)); // Remove the item from the list
  };

  const handleCustomIconClick = () => {
    setShowModal(!showModal); // Toggle the modal display
  };
  const handleChooseSphere = (sphere) => {
    console.log("Chosen sphere: ", sphere);
    // Logic to handle sphere selection goes here
    // Placeholder for now, you'll need to implement this
  };
return (
  <div className="public-list-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <div className="list-container" style={{ overflowY: 'auto' }}>
      {publicItems.map(item => (
        <div key={item.id} className="public-item">
          {item.text}
          <button onClick={() => deletePublicItem(item.id)} className="delete-btn">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}></div>
    <div className="centered-content" style={{
      marginTop: 'auto',
      marginBottom: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div className="input-container">
        <input
          className="new-event-input"
          type="text"
          value={newEventName}
          onChange={(e) => setNewEventName(e.target.value)}
          placeholder="Enter new event name"
        />
      </div>
     
      <div className="icon-container">
  <FontAwesomeIcon 
    icon={faPlus} 
    onClick={addPublicItem} 
    className="icon-style" // Apply the shared icon class
  />
  <img 
    src={CustomIcon} 
    alt="Custom Icon" 
    onClick={handleCustomIconClick} 
    className="icon-style" // Apply the shared icon class
    style={{ width: '50px', height: '50px' }} // Ensure the custom icon has the same size
  />
</div>
{showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-item">
              <label>Post an Ad for an Event (Choose your sphere)</label>
              <input 
                type="text" 
                value={eventSphere}
                onChange={(e) => setEventSphere(e.target.value)}
                placeholder="Type your event sphere here"
                className="sphere-input"
              />
            </div>
            <div className="modal-item">
              <label>Post an Ad for Buddy Request (Choose your sphere)</label>
              <input 
                type="text" 
                value={buddySphere}
                onChange={(e) => setBuddySphere(e.target.value)}
                placeholder="Type your buddy sphere here"
                className="sphere-input"
              />
            </div>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );



};
export default PublicList;