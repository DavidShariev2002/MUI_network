import "./Sidebar.scss";

import Box from "@mui/material/Box";
import Link from '@mui/material/Link';

const Sidebar = () => {
    return (
        <Box className="sidebar">
            <Link className="sidebar__link" href="#" variant="body2">
                Profile
            </Link>
            <Link className="sidebar__link" href="#" variant="body2">
                News
            </Link>
            <Link className="sidebar__link" href="#" variant="body2">
                Posts
            </Link>
            <Link className="sidebar__link" href="#" variant="body2">
                Friends
            </Link>
        </Box>
    );
}

export default Sidebar;