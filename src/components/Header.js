import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../images/netflix.png"; 
//import logo from '../logo.svg';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const [show, setShow] = useState(false);

    const  hideHeader = ()  =>{
      if(window.scrollY > 100){
        setShow(true)
      } else{
        setShow(false)
      }
    }

    useEffect(()=> { 
      window.addEventListener("scroll", hideHeader);
      return ()=>Window.removeEventListener("scroll", hideHeader)
    }, [])
    return (
        <AppBar position="sticky" elavation={0} className={`${classes.root} ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>
              <IconButton onClick={()=>history.push("/")}>
              <img src={logo} className={classes.logo} display="none" alt="logo" />
              </IconButton>
                 <Avatar variant='square' style={{cursor: "pointer"}}
                 onClick={()=>history.push("/profile")}/>
            </Toolbar>
        </AppBar>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {       
        backgroundColor: "#111",
        top: 0,
        left: 0,
        right: 0,
      },

      transparent: {
        backgroundColor: "transparent",
      },

      toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },

    logo: {       
      width: "100px",
      //height: "100px",
       cursor: "pointer",
    },
  }));

export default Header
