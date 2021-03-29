import React, { useCallback, useState } from 'react';

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');
  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [value, onInsert]
  );

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={handleChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoInsert;
