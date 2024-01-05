import { Grid } from "@mui/material";
import "../Header/Header.css";

const Header = () =>{
    return(
        <>
            <header>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className="project__name">Video</div>
                    </Grid>
                </Grid>
            </header>
        </>
    )
}
export default Header;