import React,{useState,useEffect} from 'react';



function App() {
const [todos,setTodos] = useState([])


  
useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("http://localhost:3000/api/gettodos");
      const data = await res.json();
      setTodos(data)
      console.log("res",data);
      console.log("todos",todos)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData(); // Call the async function immediately

}, []);

return (
    <div className="text-3xl">
     
      {todos.map((todo)=>{
        return <ul key={todo._id}>           

            <li>{todo.todoTitle}</li>
            <li>{todo.todoDescription}</li>
            </ul>
 
        
      })}
      
    </div>
  )
}

export default App