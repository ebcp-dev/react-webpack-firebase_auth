import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/store';

import CustomButton from '../../components/CustomButton/CustomButton';
import Todo from './components/Todo/Todo';

import './TodoList.scss';
import { addTodo } from './todoListSlice';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState('');

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (!todoInput) {
      console.log('Enter a task to add.');
    } else {
      dispatch(addTodo(todoInput));
      setTodoInput('');
    }
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  const todoList = useSelector((state: RootState) => state.todoList.value);

  const renderTodoList = todoList.map((item, index) => {
    return <Todo todoName={item} todoIndex={index} key={index} />;
  });

  return (
    <section className="todoList-section">
      <div className="todoList-container">
        <h1>Todo List Home</h1>
        <input
          className="todoInput"
          type="text"
          name="todoInput"
          placeholder="Add a task"
          value={todoInput}
          onChange={handleInputChange}
        />
        <CustomButton onClick={handleAddTodo}>Add Todo</CustomButton>
        {renderTodoList}
      </div>
    </section>
  );
};

export default TodoList;
