import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)
`
    margin-top : 10px;
`


function Transaction({transaction , settransaction}) {
    const Delete = (index) => {
        let copy = [...transaction]
        copy.splice(index,1)
        settransaction(copy)
    }
  return (
   <Box>
    <Typography variant='h5'>Transaction History</Typography>
    <Divider />
    <List >
        {
            transaction.map((data, index )=>{
                return ( 
                <Detail key={index} style={{background: data.amount > 0 ? 'Green' : 'Red' , color : '#fff'}}>
                    <ListItemIcon><DeleteIcon onClick={()=> Delete(index)}/></ListItemIcon>
                    <ListItemText >{data.text}</ListItemText>
                    <ListItemText >{data.amount}</ListItemText>
                </Detail>
                ) 
            })
        }
    </List>
   </Box>
  )
}

export default Transaction