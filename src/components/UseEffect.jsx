import React, { useState } from 'react'
import { Typography,Button } from '@mui/material'
const UseEffect = () => {
            var [cal,setCal] = useState();
            const input= () => {
                setCal("react");
            }
            const input1= () => {
                setCal("angular");
            }
            const input2= () => {
                setCal("next");
            }
            //UseEffect(()=>{input1();[]}



    
  return (
    <div>
         <Typography variant='h5'>welcome {cal}</Typography>
         <Button variant='text'  onClick={input} >react</Button>
         <Button variant='text'  onClick={input1} >angular</Button>
         <Button variant='text'  onClick={input2} >next</Button>
         
    </div>
  )
}

export default UseEffect