
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import About from './components/About';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom"

function App() {let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
 const onDelete = (todo)=>{
console.log("I am onDelete", todo);
setTodos(todos.filter((e)=>{
  return e!==todo;
}));
localStorage.setItem("todos", JSON.stringify(todos));
 }

 const addTodo = (title, desc)=>{
   console.log("I am Adding this Todo", title, desc)
   let sno;
   if(todos.length===0){
     sno = 0;
   }
   else{
     sno = todos[todos.length-1].sno + 1;
   }
  
   const myTodo = {
     sno: sno,
     title: title,
     desc: desc,
   }
   setTodos([...todos, myTodo]);
   console.log(myTodo);
  
 
   
  
  }


  
 
 const [todos, setTodos] = useState(initTodo);
 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
 
  
 }, [todos])
 
  return (
    <>
      <BrowserRouter>
        <Header title="MyTodo List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;

