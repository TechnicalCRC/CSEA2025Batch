
function TodoItem({ItemName,ItemDate,handleTodoDelete}) {
  // let ItemName = "Buy Mobile Phone";
  // let ItemDate = "29-4-2024";
//   let {ItemName,ItemDate} = props;

    function handleClick(ItemName)
    {
        handleTodoDelete(ItemName)
//      console.log(ItemName + ' Deleted....');
    }
  
   return (
    <div>
      <div className="row my-row">
        <div className="col-6">{ItemName}</div>
        <div className="col-4">{ItemDate}</div>
        <div className="col-2">
          <button className="btn btn-danger my-button"
          onClick={()=>handleClick(ItemName)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
