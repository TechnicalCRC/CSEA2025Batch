import AppName from "./Components/AppName";
import AppInput from "./Components/AppInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import Component from "./Component";
import { useState } from "react";
import Container from "./Container";

// function App() {
// //  let ListItems = ["BBA", "BCA", "BA", "B.Com", "B.Sc"];

//    let [ListItems, setListItems] = useState(['BBA']);

//   function handleOnClick(course) {
//     alert(course + " is Selected...");
//   }
//   let handleOnChange = () => {
//     if(event.key === 'Enter'){
//       let course = event.target.value;
//        let newCourse = [...ListItems, course];
//        setListItems(newCourse);
//     }
//   }

//   return (
//     <>
//       <Component>
//         <h1>Course List</h1>
//         <input
//           type="text"
//           placeholder="Enter Course Here..."
//           onKeyDown={handleOnChange}
//         />
//         <ul className="list-group">
//           {ListItems.map((course) => (
//             <li key={course} className="list-group-item">
//               {course}
//               <button
//                 className="btn btn-primary"
//                 style={{
//                   backgroundColor: "yellowgreen",
//                   fontWeight: "bolder",
//                   float: "right",
//                 }}
//                 onClick={() => handleOnClick(course)}
//               >
//                 Choose Course
//               </button>
//             </li>
//           ))}
//         </ul>
//       </Component>
//     </>
//   );
// }

// export default App;

function App() {
  
  let [todoItems, setTodoItems] = useState([]);

  function handleOnClick(todoName, todoDate) {
    let newTodo = { name: todoName, date: todoDate };
    let newTodoList = [...todoItems, newTodo];
    setTodoItems(newTodoList);
    //console.log(`${name} : ${date}`);
  }

  function handleTodoDelete(todoName) {
    let newTodoList = todoItems.filter((item)=>item.name !== todoName);
  setTodoItems(newTodoList);
 //   console.log(`${todoName} item Deleted.....`);
  }

  // function conditionrender()
  // {
  //   if(todoItems.length === 0)
  //     return `No task Pending.. Enjoy your Day`;
  //   else
  //      return null;
  // }
  return (
    <center>
      <AppName></AppName>
      <Container>
      <AppInput handleOnClick={handleOnClick}></AppInput>
      <div className="todo-item-container">
        {todoItems.length === 0 && <h1>No task Pending.. Enjoy your Day</h1>}
        <TodoItems todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}></TodoItems>
      </div>
      </Container>
    </center>
  );
}
export default App;

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
