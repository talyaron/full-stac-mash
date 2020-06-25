import React,{useState} from 'react';

//controlers
import * as g from '../../../controlers/general';

function Rect(props) {

    const [counter, setCounter] = useState(1)
  
    return (
      <div className='rect' onClick={() => {
        setCounter(counter + 1);
        props.setSum(props.sum + 1)
      }}>
          <h3>Hi: {g.multy(counter)}</h3>
          <h3>Add: {g.add(counter, 3)}</h3>
          </div>
    );
  }

  export default Rect;


  
  