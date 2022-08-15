import React, { useState, useRef, useCallback } from 'react'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'First TodoList',
      checked: true,
    },
    {
      id: 2,
      text: 'React Practice',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱',
      checked: false,
    },
  ]);
  //ref 사용 변수 담기
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos.concat(todo))
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  )
}

export default App;