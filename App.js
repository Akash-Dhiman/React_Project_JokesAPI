import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
const [jokes,setJokes] = useState("Loading...");
const [fname,setFname] = useState("Enter Your Name");
const [sname,setSname] = useState("Enter Another Name");

const newJoke =  (first,second) =>{

  fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).then
  (res=>res.json()).then(res2=>{
     setJokes(res2.value.joke)
  })
}

 useEffect(()=>{
          newJoke(fname,sname)
 },[])



  return (
    <div className="App">
      <h1 style={{backgroundColor:"skyblue"}}>Random Jokes Website</h1>
      <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} />
      <input type="text" value={sname} onChange={(e)=>setSname(e.target.value)} />
      <h3>{jokes}</h3>
      <button onClick={()=>newJoke(fname,sname)}>Get Another</button>
   </div>
  );
}
export default App;
