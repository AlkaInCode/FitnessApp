// UserProfile.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // Replace this with your actual state management logic
  const user = {
    name: 'A.Kumar', // Placeholder for user's name
    email: '@kumarEmail' // Placeholder for user's email
  };

  const menuItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Task History', path: '/tasks' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Support', path: '/support' },
    { name: 'Cart', path: '/cart' },
    // ... more items
  ];

  return (
    <div className="user-profile-container">
      <div className="user-info">
        <h2>{user.name}</h2> {/* Display the user's name */}
        <p>{user.email}</p> {/* Display the user's email */}
      </div>
      <div className="menu-items">
        {menuItems.map(item => (
          <Link key={item.name} to={item.path} className="menu-item">
            {item.name}
          </Link>
        ))}
      </div>
      {/* ... */}
    </div>
  );
};

export default UserProfile;
