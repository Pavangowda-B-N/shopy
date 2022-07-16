import { Typography,Stack } from "@mui/material";
import image from "./images/wifi_offline.webp"
function Offline(){
    return (
        <>
            <Stack display="block" >
                <Typography variant='h3' textAlign={'center'}>Offline</Typography>
                <img src={image} alt="wifi"/>
            </Stack>
        </>
    )
}
export default Offline;