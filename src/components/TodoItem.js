import React, { useContext } from "react";
import Context from "../context";

function TodoItem({ list, index, onChange}) { //получаю список в качестве параметра
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(list.completed){ //определяю состояние тудушки
        classes.push('done'); //если тру то добавляю имя класса в массив (для возможности добавления других классов)
    }
    return (
        <li>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={list.completed} //привязка чекбокса к сосотоянию списка
                    onChange={() => onChange(list.id)} //клик по чекбоксу
                    id={index}
                />

                <strong>{index + 1}</strong>
                &nbsp;&nbsp;
                <label for={index}>{list.title}</label>
            </span>
            <button className='rm' onClick={() => removeTodo(list.id)}>&times;</button>
        </li>
    );
}

export default TodoItem;