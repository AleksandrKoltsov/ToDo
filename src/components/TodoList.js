import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) { //получаю список в качестве параметра
    return (
        <ul>
            {props.list.map((item, i) =>{ //обрабатываю массив списка
                return <TodoItem
                            list = {item}
                            key = {item.id}
                            index = {i}
                            onChange={props.onToggle}
                />; //возвращаю элемент в виде компонента
                // список и
                // указываю дополнительный специальный параметр key с уникальным идентификатором для итерируемого
                // объектав в реакте
            })}
        </ul>
    )
}

export default TodoList;