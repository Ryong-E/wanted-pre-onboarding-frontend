import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { deleteTodoApi, updateTodoApi } from '../../api/todo';

function TodoContent({ data, refetch, todoDelete, todoUpdate }) {
  const [isWrite, setIsWrite] = useState(false);
  const checkRef = useRef();
  const [editContent, setEditContent] = useState(false);
  const [checked, setChecked] = useState(false);
  const { todo, id, isCompleted } = data;

  const handleCheck = async (value) => {
    setChecked(value);
    todoUpdate(id, editContent, value);
    await updateTodoApi(editContent, id, value);
  };

  const handleModify = async () => {
    if (isWrite) {
      const isCompleted = checkRef.current.checked;
      await updateTodoApi(editContent, id, isCompleted);
      todoUpdate(id, editContent, isCompleted);
      setIsWrite(false);
      return;
    }

    setIsWrite(!isWrite);
  };

  const handleSubmit = async () => {
    if (isWrite) {
      return setIsWrite(!isWrite);
    }

    await deleteTodoApi(id);
    todoDelete(id);
  };

  useEffect(() => {
    setEditContent(todo);
    setChecked(isCompleted);
  }, [data]);

  return (
    <Todo>
      <TodoContainer>
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e.target.checked)}
          checked={checked}
          ref={checkRef}
        />
        <div>
          {isWrite ? (
            <input
              data-testid="modify-input"
              onChange={(e) => setEditContent(e.target.value)}
              type="text"
              defaultValue={todo}
            />
          ) : (
            todo
          )}
        </div>
        <button onClick={handleModify} data-testid="submit-button">
          {isWrite ? '제출' : '수정'}
        </button>
        <button onClick={handleSubmit} data-testid="cancel-button">
          {isWrite ? '취소' : '삭제'}
        </button>
      </TodoContainer>
    </Todo>
  );
}

const Todo = styled.li``;
const TodoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export default TodoContent;
