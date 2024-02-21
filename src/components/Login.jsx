import { TextField, Typography ,Button} from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br></br><br></br>
        <h1>login page</h1>
        <input placeholder='username'/> 
        <br></br><br></br>
        <input placeholder='password'/>
        <br></br><br></br>
        <button >submit</button>
        <br></br><br></br>
        
        <Typography variant='h1'>login page</Typography>
        <TextField varient='filled' label='Username'/>
        <br></br><br></br>
        <TextField variant='filled' label='Password'/>
        <br></br><br></br>
        <Button variant='text'>submit</Button>
    </div>
  )
}

export default Login