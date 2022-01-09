
import propTypes from "prop-types";
import React , {useState} from "react";

function AddToDo ( {onCreate}) {
    const [value, setValue] = useState("");
    console.log(onCreate);

    function submitHandler(event) {
      event.preventDefault();

      if (value.trim()) {
          onCreate(value);
          setValue('');
      }
    }

    return (
        <form style={{marginBottom : '1rem'}} onSubmit={submitHandler}>
          <input value={value} onChange={event=> setValue(event.target.value)}></input>
          <button type="submit"> Add to do  </button>
        </form>
    )
}

export default AddToDo;

AddToDo.prototype ={
    onCreate: propTypes.func.isRequired
}
