import { useState, useCallback } from 'react';
import { MdDoneOutline } from 'react-icons/md'
import './TodoInsert.scss';


const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChagne = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); //value값 초기화 
        e.preventDefault();
    },
        [onInsert, value],
    );
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChagne}
            />
            <button type='submit'>
                <MdDoneOutline />
            </button>
        </form>
    )
}

export default TodoInsert;