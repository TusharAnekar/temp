import {NavLink} from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export function Header () {

    const getActiveStyle = ({isActive}) => ({
        margin: "5px",
        color: isActive && "red"
    })

    return(
        <>
            <nav>
                <NavLink to={"/"} style={getActiveStyle}>Home</NavLink>
                <NavLink to={"/mockman"} style={getActiveStyle}>Mockman</NavLink>
                <NavLink to={"/temp"} style={getActiveStyle}>Temp</NavLink>
                <HomeRoundedIcon fontSize="large" sx={{ fontSize: 40 }}/>
                <NavLink to={"#grid"} style={getActiveStyle}>Grid</NavLink>
                <NavLink to={"/path-test"} style={getActiveStyle}>Path Test</NavLink>
            </nav>
        </>
    )
}