import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <h1>Todo App</h1>
      <div className="row">
        <div className="col-6"><input type="text" /></div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">Buy Mobile Phone</div>
        <div className="col-4">
          29-4-2024
        </div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">Buy Milk Phone</div>
        <div className="col-4">
          29-4-2024
        </div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
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
