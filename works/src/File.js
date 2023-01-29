import React , {useState,useEffect} from 'react'

import Button from '@mui/material/Button'
import { TextField, Typography,AppBar, Container,Toolbar } from '@mui/material';
import SearchAppBar from './SearchAppBar';

const File = () => {
  //.......styling component.........
  
  //..................
  //for searching..............
  const [search,setSearch]=useState("")
  const [d,setD]=useState([])

  //................
    const [text,setText]=useState("");
    const [a,setA]=useState([])
    const [show,setShow]=useState(false)
    const [updatingvalue,setUpdatingvalue]=useState("");
    useEffect(()=>{
      const newData=a.filter(items=>{
        return items.toLowerCase().includes(search.toLowerCase())
    });
      setD(newData)
    },[search])
    function TextHandler(event){
        setText(event.target.value);
        
    }
    function ButtonHandler(event){
        event.preventDefault();
            setA(b=>[...b,text])
            setText("")
    }
   console.log(a)
   function DeleteHandler(i){
    a.splice(i,1);
    setA([...a])
   }
   function EditHandler(i){
    setText(a[i])
    setShow(true)
    setUpdatingvalue(i)
   }
   function Update(event){
    event.preventDefault()
    a.splice(updatingvalue,1,text)
    setA([...a])
    setShow(false)
   }
  return (
    <div  >
      <SearchAppBar />
     {/* <AppBar style={{"Backgroundcolor":"black","display":"flex"}}>
      <Container>
    <Typography variant="h4" color="" component="div">
      Todo List Management
    </Typography>
    <TextField label="Search" varient="contained" style={{"width":"250px","marginleft":"50px"}}></TextField>
    </Container>
</AppBar> */}
      <Container style={{"marginTop":"70px",}} maxWidth="sm">
      <form>
        <TextField label="Search/add for the items" value={text} onChange={TextHandler} ></TextField>
        {!show?<Button onClick={ButtonHandler} variant="contained" style={{"marginTop":"10px","marginLeft":"5px","width":"100px"}}>ADD</Button>:
        <Button onClick={Update} variant="contained" style={{"marginTop":"10px","marginLeft":"5px","width":"100px"}}>Update</Button>}
      </form>
      {a.map((ele,index)=>
        <div>
             <Typography key={index}>{ele}</Typography>
             <Button onClick={()=>EditHandler(index)} variant="contained" style={{"margin":"5px"}}>Edit</Button>
             <Button onClick={()=>DeleteHandler(index)} variant="contained">Delete</Button>
        </div>
       )}
      {/*{store.map((a,index)=><li key={a.id}>{a.name}</li>)}*/}
      </Container>
    </div>
    
  )
}
export default File
