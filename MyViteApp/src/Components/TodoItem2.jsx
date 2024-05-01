function TodoItem2() {
  let ItemName = "Buy Milk Powder";
  let ItemDate = "29-4-2024";
  return (
    <div>
      <div className="row my-row">
        <div className="col-6">{ItemName}</div>
        <div className="col-4">{ItemDate}</div>
        <div className="col-2">
          <button className="btn btn-danger my-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
