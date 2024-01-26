
// import './App.css';
// import Header from "./MyComponents/Header";
// import Todos from "./MyComponents/Todos";
// import Footer from "./MyComponents/Footer";
// import AddTodo from "./MyComponents/AddTodo";
// // import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';



// function App() {
//   let intiTodo;
//   if(localStorage.getItem("todos")){
//     intiTodo=[];
//   }
//   else{
//     intiTodo = JSON.parse(localStorage.getItem("todos"));
//   }
//   const onDelete=(todo)=>{
//     console.log("I am ondelete of todo",todo);
//     //Deleting this way in react does not work 
//     // let index=todos.indexOf(todo);
//     // todos.splice(index,1);

//     setTodos(todos.filter((e)=>{
//       return e!==todo;
//     }));
//     localStorage.setItem("todos",JSON.stringify(todos));
//   }

//   const addTodo =(title,desc)=>{
//     console.log("I am adding this todo",title , desc)
//     let newSno;
//     if(todos.length===0){
//       newSno=1;
//     }
//     else{
//       newSno=todos[todos.length-1].newSno + 1;
//     }
    
//     const myTodo={
//       newSno:newSno,
//       title:title,
//       desc:desc,
//     };
//     setTodos([...todos,myTodo]);
//     console.log(myTodo);
//   }
  
//     localStorage.setItem("todos",JSON.stringify(todos));
  
//   const [ todos,setTodos] = useState([
//     // {
//     //   newSno:1,
//     //   title:"Go to the market",
//     //   desc:"you need to go the market to get this job done"
//     // },
//     // {
//     //   newSno:2,
//     //   title:"Go to the Gym",
//     //   desc:"you need to go the Gym to get this job done"
//     // },
//     // {
//     //   newSno:3,
//     //   title:"Go for Running",
//     //   desc:"you need to go the  Running to get this job done"
//     // },
//     // {
//     //   newSno:4,
//     //   title:"Go for games",
//     //   desc:"you need to go the games to get this job done"
//     // }
//   ])
//   return (
//     <>
//    <Header title={"My Todos List"} searchBar={false}/>
//    <AddTodo addTodo={addTodo}/>
//    <Todos todos={todos} onDelete={onDelete}/>
//    <Footer/>
//     </>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";

import AddTodo from "./MyComponents/AddTodo";
import SplashScreen from "./MyComponents/SplashScreen"; // Make sure you have this component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<HomeContent />} />
        <Route path="/about" element={<About />} /> {/* Ensure this route is defined */}
        {/* Other routes can go here */}
      </Routes>
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

  return (
    <>
      <Header title={"My Todos List"} searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
