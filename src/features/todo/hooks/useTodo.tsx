import React, { FC, useCallback, useEffect, useState } from 'react';
import { AppDispatch, useSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { save, updateTodo } from '../slice';
import { TodoItemType } from '../../../types/TodoType';
import { useParams } from 'react-router-dom';
import { EventType } from '../../../types/EventType';

const useTodo = () => {
  const dispatch: AppDispatch = useDispatch();
  const [todo, setTodo] = useState<TodoItemType>({ id: 0, title: '', content: '' });
  const { todoItemsData } = useSelector((state) => state.todo);
  const todoId = Number(useParams().paramId);
  const { isOpen } = useSelector((state) => state.modal);
  const [errors, setErrors] = useState({ title: null, content: null });

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
      }
    });
  }, [todoId]);

  //   if (!todo.title?.trim()) {
  //     _errors.title = 'タイトルを設定してください';
  // };
  // if (!todo.content?.trim()) {
  //     _errors.content = '内容を設定してください';
  // };

  // setErrors(_errors);
  // return !!Object.keys(_errors).length;

  //   const createTodoSubmit: EventType["onSubmit"] = useCallback((e) => {
  //       e.preventDefault();
  //       const isTitle = todoTitle?.trim() !== "";
  //       const isContent = todoContent?.trim() !== "";
  //       if (isTitle && isContent) {
  //         dispatch(addTodo({ title: todoTitle?.trim(), content: todoContent?.trim() }));
  //       } else {
  //         alert("タイトルと詳細内容をどちらも入力してください。");
  //       }
  //     }, [todoTitle, todoContent]);

  const updateTodoSubmit: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      const isTitle = todo.title?.trim() !== '';
      const isContent = todo.content?.trim() !== '';
      if (isTitle && isContent) {
        dispatch(
          updateTodo({
            id: todo?.id,
            title: todo.title?.trim(),
            content: todo.content?.trim()
          })
        );
      } else {
        alert('タイトルと詳細内容をどちらも入力してください。');
      }

      // if (errors.title) {
      //     alert(errors.title);
      //     return;
      // }
      // if (errors.content) {
      //     alert(errors.content);
      //     return;
      // }

      // dispatch(
      //     updateTodo({
      //         id: todo?.id,
      //         title: todo.title?.trim(),
      //         content: todo.content?.trim(),
      //     })
      // );
    },
    [todo.title, todo.content]
  );

  return {
    sampleTodo: todo,
    setTodo,
    updateTodoSubmit
  };
};

export default useTodo;
