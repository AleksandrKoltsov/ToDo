import React, { useState } from "react";

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');
    
    function submitHandler(event) { //обработка кнопки AddTodo
        event.preventDefault(); //отменяем стандарное действие submit(перегружает страницу)
        if(value.trim()){ //валидация input
            onCreate(value);
            setValue('');
        }
    }

    return (
        <form className='formAddTodo' onSubmit={submitHandler}>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
                className='addInput'
            />
            <button type='submit' className='addBtn'>Add</button>
        </form>
    );
}

export default AddTodo;