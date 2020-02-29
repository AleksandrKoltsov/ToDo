import React from 'react';
import TodoList from "./components/TodoList";
import Context from "./context";
import AddTodo from "./components/AddTodo";


function App() {
  const [list, setList] = React.useState([]);

  function toggleTodo(id) { //метод для переключения чекбокса
     setList(
         list.map(item => {
          if(item.id === id) {
              item.completed = !item.completed;
          }
          return item;
      })
    )
  }

  function removeTodo(id){ //удаляет строку
    setList(list.filter(item => item.id !== id));
  }

  function addTodo(title) {
      setList(list.concat([{
          title: title,
          id: Date.now(),
          completed: false
      }]))
  }

  return (
      <Context.Provider value = {{ removeTodo }}>
        <div className="wrapper">
            <h1>ToDo List:</h1>
            <AddTodo onCreate={addTodo}/>
            {list.length ? <TodoList list = {list} onToggle={toggleTodo}/> : <p className='noTodo'>No ToDo!</p>}

        </div>
      </Context.Provider>
  );
}

export default App;
