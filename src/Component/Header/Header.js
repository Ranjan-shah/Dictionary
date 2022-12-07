import React from "react";
import './Header.css';
import TextField  from "@mui/material/TextField";

const Header = () => {
    return(
        <div className="header">
            <span className="title">
                Word Finder
            </span>
            <div className="inputs">our input section</div>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}

export default Header;
