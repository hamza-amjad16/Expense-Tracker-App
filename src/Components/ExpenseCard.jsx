import React from 'react'
import { Box, Card, CardContent, styled, Typography } from '@mui/material'

const Container = styled(Box)
`
        display : flex;
        & > div {
            flex : 1;
            padding: 10px;
        }
`
function ExpenseCard({transaction}) {
    const amount = transaction.map(data => data.amount)
const income = amount.filter(item => item > 0).reduce((amount , item) => {
    return amount + item 
},0).toFixed(2)

const expense = (amount.filter(item => item < 0).reduce((amount , item) => {
    return amount + item 
},0) * -1).toFixed(2)

  return (
    <Container>
       <Card>
        <CardContent>
            <Typography>Income</Typography>
            <Typography style={{color : 'green'}}>${income}</Typography>
        </CardContent>
       </Card>
       <Card>
        <CardContent>
            <Typography>Expense</Typography>
            <Typography style={{color : 'red'}}>${expense}</Typography>
        </CardContent>
       </Card>
    </Container>
  )
}

export default ExpenseCard