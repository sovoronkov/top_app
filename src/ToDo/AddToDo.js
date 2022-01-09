
import propTypes from "prop-types";
import React , {useState} from "react";

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind : {
            value,
            onChange : (event) => setValue(event.target.value)
    
        },
        clear : () => setValue(''),
        value : () => value
    }
  
}

function AddToDo ( {onCreate}) {
    const input = useInputValue('');

    function submitHandler(event) {
      event.preventDefault();

      if (input.value().trim()) {
          onCreate(input.value());
          input.clear();
        
      }
    }

    return (
        <form style={{marginBottom : '1rem'}} onSubmit={submitHandler}>
          <input {...input.bind}></input>
          <button type="submit"> Add to do  </button>
        </form>
    ) 
}

export default AddToDo;

AddToDo.prototype ={
    onCreate: propTypes.func.isRequired
}
