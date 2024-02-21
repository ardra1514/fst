import { Typography ,TextField,Button} from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   
    
   var[fname,setFname]=useState("ardra");
   var[Val,setVal]=useState();
    const handleInput=(e)=>{
        //console.log(e);
        setVal(e.target.value);
        console.log(Val);

    }

    const submitHandler=()=>{
        console.log("clicked");
        setFname(Val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography>
        <br /><br />
    

        <TextField varient='filled' onChange={handleInput} label='enter your name'/>
        <br /><br />
        <Button variant='text' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics