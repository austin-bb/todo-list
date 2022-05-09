import React, { useState } from 'react'
import TodoList from './TodoList'

const ShowTodoList = () => {

  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (deleteIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== deleteIdx;
    });
    setTodos(filteredTodos);
  }

  const handleComplete = (idx) => {
    const completedTodos = todos.map((todo, i) => {
      if (idx === i){
        todo.complete = !todo.complete;
      }
      
      return todo;
    });

    setTodos(completedTodos);
  }



  return (
    <div className='ListCard'>
      <h1 style={{ fontSize: 60, textAlign: 'center'}}>Todo List</h1>

      <TodoList todos = { todos } setTodos = { setTodos }/>

      <div className='ListItems'>
        {
          todos.map((todo, i) => {
            const todoClasses = [];

            if (todo.complete) {
              todoClasses.push("Completed")
            }
            return (
              <div key={i}>
                <ul>
                  <li className='List'>
                    <div>
                      <input onChange={(e) => {
                        handleComplete(i);
                      }} 
                      checked={todo.complete} style={{ marginRight: 15 }} type="checkbox" name="" id="" />
                      <span className={todoClasses.join(" ")}>{ todo.text }</span>
                    </div>
                    <button style={{ marginLeft: 30}} onClick={(e) => {
                      handleDeleteTodo(i);
                    }}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShowTodoList