import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../../store/store';
import { TodoItemType } from '../../../types/TodoType';

const useDetail = () => {
  const todoId = Number(useParams<string>().paramId);
  const { todoItemsData } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState<TodoItemType>({
    id: 0,
    title: '',
    content: ''
  });

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
      }
    });
  }, [todoId]);

  return { todo };
};

export default useDetail;
