
import { useRef, useState } from 'react';
import './App.css';

function App() {
     
     const [x, setx] = useState([])
     const inputRef = useRef()
     const Add = () => {
      const value = inputRef.current.value
      const newData = {Completed : false, value }
      setx([...x, newData])
      inputRef.current.value = ""
     }

     const itemdone = (index) => {
      const newx = [...x]
      x[index].Completed = !x[index].Completed
      setx(newx)
     }

     const toDelete = (index) => {
      const newx = [...x]
      newx.splice(index, 1)
      setx(newx)
     }


  return (
    <div className="App">
      <h2>To Do List</h2>

      <ul>
        {
          x.map(({value, Completed}, index) => {
            return<div className='div1' ><li className={Completed ? "diffstyle" : ""} onClick={() => {itemdone(index)}}>{value}</li>
                   <span onClick={() => {toDelete(index)}} >X</span>
                   </div>
          })
        }
      </ul> 
       
      <input ref = {inputRef} placeholder='Enter New Task.....'></input>
      <button onClick={Add}>Add</button> 
    </div>
  );
}

export default App;
