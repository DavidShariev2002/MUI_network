
import AppBar from '@mui/material/AppBar';
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="span" sx={{ flexGrow: 1, textAlign: "left" }}>
                    MUI network
                </Typography>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default Header;