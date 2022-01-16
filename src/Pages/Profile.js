import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "../components/Header";
import Plans from "../components/Plans";
import { auth } from "../firebase";
import netflixavatar from "../images/avatar.jpg";
import { NetflixButton } from "../styled/styledcomponents";


const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const signout = () =>{
        auth.signOut()
        history.push("/login")
    }
    return (
        <div>
            <div className={classes.root}>
            <Header />
            <Typography variant="h3" gutterBottom>Edit Profile</Typography>
              <div className={classes.info}>
                 <img src={netflixavatar} alt="avatar" />
                  <div className={classes.details}>
                    <div className={classes.plans}>
                    <Typography  className={classes.plansTex} variant="h6" >Email usuario</Typography>
                    <Typography variant="h5" gutterBottom>Plans</Typography>
                    <Plans cost={7.99}>Netflix Standard</Plans>
                    <Plans cost={11.99}>Netflix Basic</Plans>
                    <Plans wide="medium" color="gray" cost={15.99}>Netflix Premium</Plans>
                    <NetflixButton onClick={signout} wide="fullWidth">Sing Out</NetflixButton>
                 </div>
                 </div>
            </div>
        </div>
    </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        color: "#fff",
        minHeight: "100vh",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    info:{
        width: "80%",
        display: "flex",
        "& img":{
            height: "100px",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        },
    },
    details:{
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6": {
            backgroundColor: "#aaa",
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: "18px",
        },
    },
    plans: {
        width: "100%",
    },
    plansTex: {
        borderBottom: "1px solid lightgray",
    },
}));

export default Profile;