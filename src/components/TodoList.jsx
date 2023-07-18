import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, handleDelete, handleEdit}) => {
    if(!todo || todo.length === 0) {
        return <p className='text-center'>No Todo Yet</p>
    }

  return (
    <>
      <div>
        {todo.map((item) =>(
            <TodoItem key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
        ) )}
      </div>
    </>
  )
}

export default TodoList
