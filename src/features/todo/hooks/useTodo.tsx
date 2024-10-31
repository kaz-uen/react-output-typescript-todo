import React, { FC, useCallback, useEffect, useState } from 'react';
import { AppDispatch, useSelector } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../slice';
import { TodoItemType } from '../../../types/TodoType';
import { useNavigate, useParams } from 'react-router-dom';
import { EventType } from '../../../types/EventType';


const useTodo = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const todoId = Number(useParams<string>().paramId);
    const { todoItemsData, amount, searchKeyword } = useSelector((state) => state.todo);

    // 検索キーワードのステート
    const [filterVal, setFilterVal] = useState('');

    //モーダルの真偽値
    const { isOpen } = useSelector((state) => state.modal);

    // 詳細ページの初期値
    const [todo, setTodo] = useState<TodoItemType>({
      id: 0,
      title: '',
      content: ''
    });

    // 新規作成ページ 兼 編集ページ
    const [title, setTitle] = useState<string | undefined>('');
    const [content, setContent] = useState<string | undefined>('');

    // 詳細ページ・編集ページの処理
    useEffect(() => {
      todoItemsData.map((item) => {
        if (item.id === todoId) {
          setTodo(item);
          setTitle(item.title);
          setContent(item.content);
        }
      });
    }, [todoId]);

    // 新規作成ページ・編集ページの処理
    const todoSubmit: EventType['onSubmit'] = useCallback(
      (e) => {
        e.preventDefault();
        const isTitle = title?.trim() !== '';
        const isContent = content?.trim() !== '';
        if (isTitle && isContent) {
          dispatch(
            saveTodo({
              id: todo.id,
              title: title?.trim(),
              content: content?.trim()
            })
          );
          navigate('/');
        } else {
          alert('タイトルと詳細内容をどちらも入力してください。');
        }
      },
      [title, content]
    );

    return {
      todoItemsData,
      amount,
      searchKeyword,
      filterVal,
      setFilterVal,
      isOpen,
      todo,
      title,
      setTitle,
      content,
      setContent,
      todoSubmit
    };
};

export default useTodo;
