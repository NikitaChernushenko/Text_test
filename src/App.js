import React from "react";
import "./App.css";
import TodoList from "./app/Containers/TodoList/TodoList";
// import TodoItem from "./app/Components/TodoItem/TodoItem";
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Your todo list</h2>
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
