import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <section>
      <h1>완료 목록</h1>
      <ul>
        {todoList.map(
          (el) => el.done === true && <li key={el.id}>{el.text}</li>,
        )}
      </ul>
    </section>
  );
}