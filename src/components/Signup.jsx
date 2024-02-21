import React, { useState } from 'react'
import { Typography ,Button,TextField} from '@mui/material'
const Signup = () => {
    var [data,setData]=useState();
    const inputHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }

  return (
    <div>
    
            <Typography variant='h6'>signup</Typography>
            <TextField varient='filled' name='name'onChange={inputHandler} label='Username'/>
        <br></br><br></br>
        <TextField variant='filled' name='psw' onChange={inputHandler} label='Password' />
        <br></br><br></br>

        <TextField variant='filled' name='mail' onChange={inputHandler} label='email'/>
        <br></br><br></br>
        <Button variant='text'>submit</Button>
        
              
        
    </div>
  )
}

export default Signup