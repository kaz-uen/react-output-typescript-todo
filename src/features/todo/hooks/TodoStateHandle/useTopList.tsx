import { useState } from 'react';
import { useSelector } from '../../../../store/store';

const useTopList = () => {
  const { todoItemsData, amount, searchKeyword } = useSelector((state) => state.todo);
  const [filterVal, setFilterVal] = useState('');
  const { isOpen } = useSelector((state) => state.modal);

  return {
    todoItemsData,
    amount,
    searchKeyword,
    filterVal,
    setFilterVal,
    isOpen
  };
};

export default useTopList;
