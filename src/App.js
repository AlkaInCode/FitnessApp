import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import UserProfile from "./MyComponents/UserProfile";
import PublicList from './MyComponents/PublicList';
import './App.css';

// AddTodo component
import AddTodo from "./MyComponents/AddTodo";

// SplashScreen component (make sure it's defined somewhere)
import SplashScreen from "./MyComponents/SplashScreen";

// SettingsComponent component
import SettingsComponent from './MyComponents/SettingsComponent';
// FontAwesomeIcon and specific icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header title={"My List"} searchBar={false} />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<HomeContent />} />
            <Route path="/public-list" element={<PublicList />} />
            <Route path="/profile" element={<UserProfile />} /> 
            <Route path="/settings" element={<SettingsComponent />} />
            {/* Routes for specific SVG files */}
            <Route path="/f-solid" element={<FPageComponent />} />
            <Route path="/c-solid" element={<CPageComponent />} />
            {/* Other routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// FPageComponent for "/f-solid" route
function FPageComponent() {
  return <div>This is the F Page</div>;
}

// CPageComponent for "/c-solid" route
function CPageComponent() {
  return <div>This is the C Page</div>;
}

// SplashScreen for "/" route
function Splash() {
  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Duration for the splash screen

    return () => clearTimeout(timer);
  }, [navigate]);

  return <SplashScreen />;
}

// HomeContent for "/home" route
function HomeContent() {
  // Initialize state based on localStorage
  const initialTodos = localStorage.getItem("todos") 
    ? JSON.parse(localStorage.getItem("todos")) 
    : [];

  const [todos, setTodos] = useState(initialTodos);

  // Effect for updating localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
  };

  const addTodo = (title, desc) => {
    let newSno = todos.length === 0 ? 1 : todos[todos.length - 1].newSno + 1;
    
    const myTodo = {
      newSno: newSno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  const toggleComplete = (todo) => {
    setTodos(todos.map(t => {
      if (t.newSno === todo.newSno) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onToggle={toggleComplete} onDelete={onDelete} listType="my" />
    </>
  );
}

export default App;
