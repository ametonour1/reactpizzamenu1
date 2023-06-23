import React from 'react';
import Instagramicon from "@mui/icons-material/Instagram";
import Facebookicon from "@mui/icons-material/Facebook";
import Twittericon from "@mui/icons-material/Twitter";
import LinkedInicon from "@mui/icons-material/LinkedIn";
import "../styles/footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            <Instagramicon/> <Facebookicon/> <Twittericon/> <LinkedInicon/>
        </div>
        <p> &copy; 2023 Amet Onour </p>
    </div>
  )
}

export default Footer