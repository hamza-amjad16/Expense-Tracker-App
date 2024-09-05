
import { Box,styled,Typography } from "@mui/material"

const BalanceText = styled(Typography)`
    font-size : 25px;
    margin-bottom : 20px;
`

const Balance = ({transaction})=> {
const amount = transaction.map(data => data.amount)
const total = amount.reduce((amount , item) => {
    return amount + item 
},0).toFixed(2)

    return (
        <Box>
            <Typography>Balance : ${total}</Typography>
        </Box>
    )
}

export default Balance