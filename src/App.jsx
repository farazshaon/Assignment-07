import {v4 as uuidv4} from 'uuid';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Header from './components/Header';
import todoData from './data/TodoData';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  
  const [todo, setTodo] = useState([]);
  // const [todoText, setTodoText] = useState('');
  // const [todoTitle, setTodoTitle] = useState('');
  const [todoObject, setTodoObject] = useState({
    title: "",
    text: "",
    id: ""
  }); 

  const addTodo = (data) => {
    // newTodo.id = uuidv4()
    if(data.title === "" || data.text === ""){
      alert("Field can not be empty!");
      return false; 
    }
    const payload = {
      title:data.title,
      text: data.text,
      id: uuidv4()
    }
    setTodo([payload, ...todo]);
    setTodoObject({
      title: "",
      text: "",
      id: ""
    });

  }

  const handleUpdate = () => {
    const updatedTodo = todo.map(item => {
      if (item.id === todoObject.id) {
        return {
          ...item,
          title: todoObject.title,
          text: todoObject.text
        };
      }
      return item;
    }); 
    setTodo(updatedTodo);

    setTodoObject({
      title: "",
      text: "",
      id: ""
    });
  }

  const deleteTodo = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setTodo(todo.filter((item) => item.id !== id))
    }
  }

  const handleEdit = (id) => {
    const selectedItem = todo.find(item => item.id === id);
    if(selectedItem){
      setTodoObject({
        title: selectedItem.title,
        text: selectedItem.text,
        id: selectedItem.id
      })
    }
  }

  return (
    <>
       <Header header='Feed Back App'/>
       <TodoForm handelAdd={() => addTodo(todoObject)} todoObject={todoObject} setTodoObject={setTodoObject} handleUpdate={handleUpdate} />
        <TodoList todo={todo} handleDelete={deleteTodo} handleEdit={handleEdit} />
       
    </>
  )
}

export default App
