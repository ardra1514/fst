import {TextField ,Button} from '@mui/material'
import React, { useState } from 'react'

const Maping = () => {

    var [imp,setImp]=useState(["abc"]);

    var [data,setData]=useState("");

    const inputHandle=(e)=>{
        console.log('on');
        setData(e.target.value)
        console.log('imp',data)

        }
    const add =()=>{
    console.log("c");
    setImp([...imp,data])
    console.log("sub",imp)
    setData("");


    }
  return (
    <div style={{marginTop:'50px'}}>

        <br/>  
             <TextField variant='filled' onChange={inputHandle}  value={data} label='enter'/>
             <Button variant='text'  onClick={add} >submit</Button>
             <ul>

                {
                    imp.map((v,i)=>{ 
                    return <li key={i}>{v}</li>
                    }
                    )}



             </ul>
       
    </div>
     )
}
export default Maping