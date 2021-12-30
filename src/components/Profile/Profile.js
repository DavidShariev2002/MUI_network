
import "./Profile.scss";

import Box from "@mui/material/Box";

import profile_header from "../../assets/img/profile_header.jpg";

function Profile(){
    return(
        <Box className="profile">
            <img src={profile_header} className="profile__header"></img>
        </Box>
    )
}

export default Profile;