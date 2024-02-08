// Import the FontAwesomeIcon component and the specific icon you need
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  // ... rest of your component code ...

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Use the FontAwesomeIcon component with the imported icon */}
        <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: '10px' }}>My List</span>
        </div>
        {/* ... rest of your navbar code ... */}
      </div>
    </nav>
  );
}
