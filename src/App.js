

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import UserProfile from "./MyComponents/UserProfile";
import PublicList from './MyComponents/PublicList';
import './App.css';
import SettingsComponent from './MyComponents/SettingsComponent';


import AddTodo from "./MyComponents/AddTodo";
import SplashScreen from "./MyComponents/SplashScreen"; // Make sure you have this component
import './App.css';

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
            {/* Other routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
 
  );
}

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
        {/* <Todos todos={publicTodos} onToggle={toggleComplete} onDelete={onDelete} listType="public" /> */}
        

       
     
    
    </>
  );
}

export default App;
