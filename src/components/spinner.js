import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material"
import { useEffect, useState } from 'react';
function Spinner(){
    const [Try,setTry]=useState(true)
    function timeout(){
        return setTry(false)
    }
    useEffect(()=>{
        setTimeout(timeout,7000)
    },[])
    return (
        <>
            <Box sx={{ display: 'block' }}>
                   { Try ?
                        <>
                            <CircularProgress display={"block"}/>
                            <Typography variant='Body1' display={"block"}>Loading...</Typography>
                        </>
                    :
                    <Typography variant='h5'>Time Out</Typography>}
            </Box>
        </>
    )
}
export default Spinner;