import { useState } from "react";

function AppInput({ handleOnClick }) {

  let [name, setName] = useState();
  let [date, setDate] = useState();

  function handleNameChange() {
    setName(event.target.value);
  }
  function handleDateChange() {
    setDate(event.target.value);
  }
  function handleClick(name,date) {
    handleOnClick(name,date);
    setName('');
    setDate('');
 //   console.log( ` ${name}  -- ${date}`);
  }
  return (
    <div>
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={date} 
          onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success my-button"
            onClick={() => handleClick(name,date)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppInput;
