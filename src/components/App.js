
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [value,setValue] = useState(0)
function handleClick(){
setValue(value+1)
}
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {value} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
