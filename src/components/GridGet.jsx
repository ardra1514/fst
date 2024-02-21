import { TextField ,Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const GridGet = () => {
    var[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            console.log(response)
            setProducts(response.data)
        })
        .catch((error)=>{console.log(error)})
    },[])
  return (
   <div>
            <Grid container spacing={2}>
            {products.map((val,ind) =>{
                return(
                    <Grid item xs={12} sm={6} md={4}>
                    
                    <CardMedia
                         sx={{hight:140}}
                        title={val.title}
                         image={val.title}
                         description={val.description}
                            />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles, with over 6,000
                       species, ranging across all continents except Antarctica
                     </Typography>
                     </CardContent> 
                )
            })}

            </Grid>


   </div>

  )
}

export default GridGet