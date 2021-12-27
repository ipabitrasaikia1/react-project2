import logo from './logo.svg';
import './App.css';
import { Grocery } from './components/Grocery';




function App() { 

 
  return (
    <div className="App">
      <h1>Hi</h1>
      <h2>Add Your Groceery</h2>
      
    
    <Grocery  />
    </div>
  );
}

//
// function child1({fun}){

//   const data = "From child to parent" 
//   console.log("INSIADE")
//   fun(data)  

// }


//
export default App;

