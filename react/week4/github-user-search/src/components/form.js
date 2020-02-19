import React, { useContext } from 'react';
import { stateContext } from '../App';

function Form(){
    const {input, setInput, setLoading} = useContext(stateContext);
    console.log(input)
    
    return (
      <React.Fragment>
        <form>
          <label>
            User Name :
            <input
              type="text"
              value={input}
              placeholder="Enter user name"
              onChange={e => {setInput(e.target.value.trim()); setLoading(true);}}
            />
          </label>
        </form>
      </React.Fragment>
    );

}

export default Form;