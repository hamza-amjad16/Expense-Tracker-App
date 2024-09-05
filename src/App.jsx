import './App.css'
import { useState } from 'react'
import { Typography , styled , Box } from '@mui/material'

// Components
import Balance from './Components/Balance'
import ExpenseCard from './Components/ExpenseCard'
import NewTransaction from './Components/NewTransaction'
import Transaction from './Components/Transaction'

const Header = styled(Typography)`
font-size: 36px;
color: blue;
text-transform: uppercase;
`
const Component = styled(Box)`
    display : flex;
    background : white;
    width : 800px;
    padding : 10px
    border-radius: 20px;
    margin : auto;
    & > div {
    height : 70vh;
    width : 50%;
    padding : 10px;
    }

`
function App() {
  const [transaction , settransaction] = useState([
    {id : 1 , text : 'Momos' , amount : -20},
    {id : 2 , text : 'Salary' , amount : 2000},
    {id : 3 , text : 'Book' , amount : -100}
  ])
  return (
    <>
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
      <Balance transaction={transaction} />
      <ExpenseCard transaction = {transaction}/>
      <NewTransaction settransaction={settransaction}/>
        </Box>
        <Box>
          <Transaction transaction={transaction} settransaction={settransaction}/>
        </Box>
      </Component>
    </>
  )
}

export default App
