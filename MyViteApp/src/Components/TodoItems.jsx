import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleTodoDelete }) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          ItemName={item.name}
          ItemDate={item.date}
          handleTodoDelete={handleTodoDelete}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
