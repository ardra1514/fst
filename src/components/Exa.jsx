import React from 'react'

const Text = () => {
  return (
    <div>

<TextField varient='filled' name='name'onChange={inputHandler} label='Username'/>
             <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                        {names.map((val,i)=>{
                            return(
                                <TableRow>
                                    <TableCell>{val.sname}</TableCell>
                                    <TableCell>{val.age}</TableCell>


                                </TableRow>
                            )
                            
                        })}


                    </TableBody>
            </Table>

        </TableContainer>





    </div>
  )
}

export default Text