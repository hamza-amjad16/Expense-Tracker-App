import { Box, Button, Container, TextField, Typography,styled } from '@mui/material'
import React, { useState } from 'react'


const TransContainer = styled(Box)`
    display : flex;
    flex-direction : column;
    & > h5 , & > div , & > button{
    margin-top: 20px;
    }

`


function NewTransaction({settransaction}) {
    const [text , settext] = useState('')
    const [amount , setamount] = useState('')

    const addtransaction = ()=> {
        if(text == "" && amount == ""){
            alert("Not Enter The Blank value")
           return
        }
        const transaction = {
            id : Math.floor(Math.random() * 1000000),
            text : text,
            amount : +amount
        }
        settransaction(prevState => [transaction , ...prevState])
       setamount('')
       settext('')
    }
  return (
    <TransContainer>
        <Typography variant="h5">New Transaction</Typography>
        <TextField label="Enter Expense" value={text} onChange={(e)=> settext(e.target.value)}/>
        <TextField label="Enter Amount" value={amount} onChange={(e)=> setamount(e.target.value)}/>
        <Button variant='contained' onClick={addtransaction}>Add Transaction</Button>
    </TransContainer>
  )
}

export default NewTransaction