import AppName from "./Components/AppName";
import AppInput from "./Components/AppInput";
import TodoItem2 from "./Components/TodoItem2";
import TodoItem1 from "./Components/TodoItem1";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
let ListItems = ['BBA','BCA','BA','B.Com','B.Sc'];

  return (
    <>
      <h1>Course List</h1>
      <ul className="list-group">
        {ListItems.map((course) => <li className="list-group-item">
          {course}</li>)}


      </ul>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <center>
//       <AppName></AppName>
//       <AppInput></AppInput>
//       <div className="todo-item-container">
//       <TodoItem1></TodoItem1>
//       <TodoItem2></TodoItem2>
//       </div>
//     </center>
//   );
// }
// export default App;

// import Hello from "./Hello";
// import MyButton from "./MyButton";
// import Random from "./Random";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return (
//     <div>
//       <Hello></Hello>
//       <MyButton></MyButton>
//       <MyButton></MyButton>
//       <MyButton></MyButton>
//       <Random></Random>
//       <Random></Random>
//       <Random></Random>
//       <Random></Random>
//     </div>
//   );
// }

// export default App;
