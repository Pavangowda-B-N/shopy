import "./nav.css"
import {Typography,Button,Stack} from "@mui/material"
import {Link} from "react-router-dom";  
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
function NavBar(){
    return (
        <>
            <nav className="navConatiner">
                <div>
                <Typography variant="h4"  fontWeight="bold">Shopy</Typography>
                </div>

                <div>
                    <Stack spacing={1} direction={"row"}>
                        <Link to="/addstocks"   className="link">
                            <Button variant="contained" color="success" size='large' startIcon={<AddIcon/>} >New</Button>
                        </Link>
                        <Link to="/" className="link">
                            <Button variant="contained" color="info" size='large' startIcon={<HomeIcon/>}>Home</Button>
                        </Link>
                    </Stack>
                </div>
            </nav>
        </>
    )
}
export default NavBar;