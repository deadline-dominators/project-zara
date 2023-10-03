import './App.css';
import React,{useState} from 'react';
import Account from "./componetes/account.js"
import Card from "./componetes/card"
function App() {
  const [view,setView]=useState("card")

const render=()=>{
if(view==='account'){
  return <Account />
}
if(view==="card"){
  return <Card/>
}
}
  return (
    <div>
<div>

{render()}
 
</div>

 </div>
  )
}

export default App;
