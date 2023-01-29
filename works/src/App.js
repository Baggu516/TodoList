import React,{useState,useEffect} from "react";
import './App.css';
import ata from "./Data";
import File from "./File"
function App() {
 
  return (
    <div className="App">
     {/* <h1>Searchinggg</h1>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}></input>
      {d.map((item,i)=>
      <div>
      <p key={item.id}>{item.name}</p>
      <p key={item.name}>{item.img}</p>
      </div>
      )}*/}
      <File/>
    </div>
  );
}

export default App;
